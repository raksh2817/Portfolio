'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const journey = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started my journey in data science, fascinated by how data could tell stories and solve real-world problems.',
      icon: '🚀',
    },
    {
      year: '2021-2023',
      title: 'Professional Growth',
      description: 'Built production data pipelines, automated reporting systems, and developed predictive models in enterprise environments.',
      icon: '💼',
    },
    {
      year: '2024',
      title: 'Academic Excellence',
      description: 'Pursuing Master\'s in Applied Data Science while contributing to research and developing custom database solutions.',
      icon: '🎓',
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Exploring AI agents, LLMs, and cutting-edge data engineering techniques to push boundaries.',
      icon: '✨',
    },
  ]

  const passions = [
    { icon: '⚡', text: 'Building scalable systems', color: 'text-primary-400' },
    { icon: '🔬', text: 'Research & innovation', color: 'text-secondary-400' },
    { icon: '🤖', text: 'AI & machine learning', color: 'text-accent-400' },
    { icon: '📊', text: 'Data storytelling', color: 'text-primary-400' },
  ]

  const codeSnippet = `// What I do best
const buildDataPipeline = async () => {
  const rawData = await extractFromSource();
  const transformed = transform(rawData);
  const insights = await analyze(transformed);
  return insights;
};`

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-gradient">Not Just Another</span>
            <br />
            <span className="text-gradient">Data Engineer</span>
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I turn complex data into actionable insights and build systems that scale
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 card-hover border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-primary-400 mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a <span className="text-primary-400 font-semibold">Master's student in Applied Data Science</span> with a passion for turning raw data into meaningful solutions. What started as curiosity about how data drives decisions has evolved into a career building production-grade systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently, I'm balancing <span className="text-secondary-400 font-semibold">academic research</span> in construction materials with <span className="text-accent-400 font-semibold">real-world applications</span>—developing custom database solutions, building AI-powered systems, and creating data pipelines that process millions of records daily.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring the latest in <span className="text-primary-400 font-semibold">LLMs, AI agents, and distributed systems</span>. I believe the best solutions come from understanding both the technical and human sides of data.
              </p>
            </div>

            {/* Code snippet card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-6 card-hover border border-primary-500/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 ml-2">data-pipeline.js</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </motion.div>
          </motion.div>

          {/* Right side - Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-400 mb-6">My Journey</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />
                
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-3 top-2 w-6 h-6 rounded-full bg-gradient-primary border-4 border-gray-900 flex items-center justify-center">
                      <span className="text-xs">{item.icon}</span>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-4 card-hover border border-primary-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-primary-400">{item.year}</span>
                        <span className="text-lg font-bold text-gray-200">{item.title}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats and Passions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { number: '3+', label: 'Years Experience', gradient: 'from-primary-500 to-primary-700' },
              { number: 'MS', label: 'Data Science', gradient: 'from-secondary-500 to-secondary-700' },
              { number: '5+', label: 'Certifications', gradient: 'from-accent-500 to-accent-700' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`glass-effect rounded-xl p-6 text-center card-hover border border-primary-500/30 ${
                  hoveredCard === index ? 'border-primary-400 scale-105' : ''
                } transition-all`}
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Passions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent-400 mb-6">What Drives Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary-900/20 border border-primary-500/20 hover:border-primary-400/50 transition-colors"
                >
                  <span className="text-2xl">{passion.icon}</span>
                  <span className={`text-sm font-medium ${passion.color}`}>{passion.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-effect rounded-2xl p-8 border-t-4 border-secondary-500"
        >
          <h3 className="text-2xl font-bold text-secondary-400 mb-6 text-center">Tech Arsenal</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'SQL', 'Spark', 'Azure', 'AWS', 'Kafka', 'Docker', 'Kubernetes', 'FastAPI', 'React', 'LLMs', 'LangChain'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05, type: 'spring' }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-900/50 to-secondary-900/50 border border-primary-500/30 text-gray-300 text-sm font-medium hover:border-primary-400 hover:text-primary-300 transition-all cursor-default"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
