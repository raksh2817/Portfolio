import { NextResponse } from 'next/server'

interface GitHubCommit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  html_url: string
  repository?: {
    name: string
    full_name: string
    html_url: string
  }
}

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  created_at: string
  default_branch: string
  topics: string[]
}

export async function GET() {
  try {
    const username = 'raksh2817'
    const githubToken = process.env.GITHUB_TOKEN // Optional: for higher rate limits

    // Fetch user's repositories (increased to get more repos)
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=all`,
      {
        headers: githubToken
          ? {
              Authorization: `token ${githubToken}`,
              Accept: 'application/vnd.github.v3+json',
            }
          : {
              Accept: 'application/vnd.github.v3+json',
            },
      }
    )

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`)
    }

    const repos: GitHubRepo[] = await reposResponse.json()

    // Fetch recent commits from all repositories
    const commitsPromises = repos.map(async (repo) => {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/commits?per_page=5&sort=updated`,
          {
            headers: githubToken
              ? {
                  Authorization: `token ${githubToken}`,
                  Accept: 'application/vnd.github.v3+json',
                }
              : {
                  Accept: 'application/vnd.github.v3+json',
                },
          }
        )

        if (!commitsResponse.ok) {
          return []
        }

        const commits: GitHubCommit[] = await commitsResponse.json()
        return commits.map((commit) => {
          return {
            sha: commit.sha.substring(0, 7),
            message: commit.commit.message.split('\n')[0], // First line only
            date: commit.commit.author.date,
            url: commit.html_url,
            repo: repo.name,
            repoUrl: repo.html_url,
          }
        })
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}:`, error)
        return []
      }
    })

    const allCommits = (await Promise.all(commitsPromises))
      .flat()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 20) // Get 20 most recent commits

    // Format repositories data
    const formattedRepos = repos
      .filter(repo => !repo.name.toLowerCase().includes('portfolio')) // Exclude portfolio repo itself (case-insensitive)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url,
        description: repo.description || 'No description available',
        language: repo.language || 'Other',
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
        topics: (repo as any).topics || [], // Topics might not be in basic response
      }))
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

    return NextResponse.json({ 
      commits: allCommits,
      repositories: formattedRepos 
    }, { status: 200 })
  } catch (error) {
    console.error('Error fetching GitHub commits:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub commits' },
      { status: 500 }
    )
  }
}

