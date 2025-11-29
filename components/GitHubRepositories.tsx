'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Repository {
  id: number
  name: string
  fullName: string
  url: string
  description: string
  language: string
  stars: number
  forks: number
  updatedAt: string
  createdAt: string
  topics: string[]
}

export default function GitHubRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('/api/github')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        setRepositories(data.repositories || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-400',
      Python: 'bg-green-400',
      Java: 'bg-orange-400',
      'C++': 'bg-blue-500',
      C: 'bg-gray-400',
      'C#': 'bg-purple-400',
      Go: 'bg-cyan-400',
      Rust: 'bg-orange-600',
      PHP: 'bg-indigo-400',
      Ruby: 'bg-red-400',
      Swift: 'bg-orange-300',
      Kotlin: 'bg-purple-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-500',
      Shell: 'bg-gray-500',
      Other: 'bg-gray-600',
    }
    return colors[language] || colors.Other
  }

  return (
    <section id="repositories" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">GitHub Repositories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            My open-source projects and contributions
          </p>
        </motion.div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-400"></div>
            <p className="text-gray-400 mt-4">Loading repositories...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && repositories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No repositories found</p>
          </div>
        )}

        {!loading && !error && repositories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 card-hover border-t-4 border-primary-500 group relative overflow-hidden block"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-primary-300 transition-colors flex-1">
                      {repo.name}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors flex-shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm mb-4 line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}
                        />
                        <span className="text-xs text-gray-400">{repo.language}</span>
                      </div>
                    )}
                    {repo.stars > 0 && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-xs">{repo.stars}</span>
                      </div>
                    )}
                    {repo.forks > 0 && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-xs">{repo.forks}</span>
                      </div>
                    )}
                  </div>

                  {repo.topics && Array.isArray(repo.topics) && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {repo.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary-900/30 border border-primary-500/30 text-gray-400"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary-900/30 border border-primary-500/30 text-gray-400">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="text-xs text-gray-500">
                    Updated {formatDate(repo.updatedAt)}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {!loading && !error && repositories.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <motion.a
              href="https://github.com/raksh2817?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full font-semibold text-primary-400 border border-primary-500/50 hover:border-primary-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Repositories on GitHub
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

