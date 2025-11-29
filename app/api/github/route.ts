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
  name: string
  full_name: string
  html_url: string
  default_branch: string
}

export async function GET() {
  try {
    const username = 'raksh2817'
    const githubToken = process.env.GITHUB_TOKEN // Optional: for higher rate limits

    // Fetch user's repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
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
        return commits.map((commit) => ({
          sha: commit.sha.substring(0, 7),
          message: commit.commit.message.split('\n')[0], // First line only
          date: commit.commit.author.date,
          url: commit.html_url,
          repo: repo.name,
          repoUrl: repo.html_url,
        })))
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}:`, error)
        return []
      }
    })

    const allCommits = (await Promise.all(commitsPromises))
      .flat()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 20) // Get 20 most recent commits

    return NextResponse.json({ commits: allCommits }, { status: 200 })
  } catch (error) {
    console.error('Error fetching GitHub commits:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub commits' },
      { status: 500 }
    )
  }
}

