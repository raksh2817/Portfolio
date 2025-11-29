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
      description: 'Pursuing Masters in Applied Data Science while contributing to research and developing custom database solutions.',
      icon: '🎓',
    },
    {
      year: '2025',
      title: 'AI Engineering Journey',
      description: 'Dedicated to mastering AI engineering—deep learning, neural networks, and production AI systems. Building expertise to become a leading AI engineer.',
      icon: '🤖',
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
                I&apos;m a <span className="text-primary-400 font-semibold">versatile technologist with 3+ years of experience</span> in data engineering, full-stack development, and machine learning. Proven track record building scalable data pipelines processing 2-3 TB daily, developing web applications, and deploying ML models. Currently pursuing <span className="text-secondary-400 font-semibold">MS in Applied Data Science</span> at Clarkson University, combining engineering depth with analytical rigor.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My core expertise spans <span className="text-accent-400 font-semibold">Python, SQL, Apache Spark, cloud platforms (AWS/Azure)</span>, and modern ML/web frameworks. I&apos;ve built enterprise-scale systems for Adobe&apos;s B2B marketing platform serving 10K+ users, optimized data warehouses achieving 2x faster query execution, and migrated on-premise systems to Azure Databricks with 40% runtime reduction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I&apos;m deeply immersed in <span className="text-accent-400 font-semibold">AI engineering</span>—studying deep learning architectures, neural networks, and production AI systems. My goal is to become a proficient <span className="text-primary-400 font-semibold">AI Engineer</span>, combining my data engineering expertise with cutting-edge AI technologies to build intelligent systems that solve complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I believe the best solutions come from understanding both the technical and human sides of data, and AI is the next frontier in creating truly intelligent, autonomous systems.
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

        {/* AI Engineering Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative overflow-hidden"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-accent-500/30 relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - Visual AI representation */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
                >
                  <div className="relative">
                    {/* Neural Network Visualization */}
                    <div className="relative w-full max-w-md mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse" />
                      <div className="relative bg-gradient-to-br from-accent-900/50 via-primary-900/50 to-secondary-900/50 rounded-2xl p-6 md:p-8 border border-accent-500/30 overflow-hidden">
                        {/* Neural Network Layers */}
                        <svg className="w-full h-64 md:h-80" viewBox="0 0 300 320" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
                              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.4" />
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                              <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          
                          {/* Input Layer (3 nodes) */}
                          {[0, 1, 2].map((i) => {
                            const y = 40 + i * 80
                            return (
                              <g key={`input-${i}`}>
                                <motion.circle
                                  cx="50"
                                  cy={y}
                                  r="12"
                                  fill="url(#neuralGradient)"
                                  stroke="#f43f5e"
                                  strokeWidth="2"
                                  filter="url(#glow)"
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.9, 1.1, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                  }}
                                />
                              </g>
                            )
                          })}
                          
                          {/* Hidden Layer 1 (4 nodes) */}
                          {[0, 1, 2, 3].map((i) => {
                            const y = 20 + i * 60
                            return (
                              <g key={`hidden1-${i}`}>
                                <motion.circle
                                  cx="150"
                                  cy={y}
                                  r="14"
                                  fill="url(#neuralGradient)"
                                  stroke="#6366f1"
                                  strokeWidth="2"
                                  filter="url(#glow)"
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.9, 1.1, 0.9],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    delay: 0.5 + i * 0.25,
                                  }}
                                />
                              </g>
                            )
                          })}
                          
                          {/* Hidden Layer 2 (3 nodes) */}
                          {[0, 1, 2].map((i) => {
                            const y = 60 + i * 80
                            return (
                              <g key={`hidden2-${i}`}>
                                <motion.circle
                                  cx="250"
                                  cy={y}
                                  r="12"
                                  fill="url(#neuralGradient)"
                                  stroke="#d946ef"
                                  strokeWidth="2"
                                  filter="url(#glow)"
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.9, 1.1, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 1 + i * 0.3,
                                  }}
                                />
                              </g>
                            )
                          })}
                          
                          {/* Connections from Input to Hidden Layer 1 */}
                          {[0, 1, 2].map((inputIdx) => {
                            const inputY = 40 + inputIdx * 80
                            return [0, 1, 2, 3].map((hiddenIdx) => {
                              const hiddenY = 20 + hiddenIdx * 60
                              return (
                                <motion.line
                                  key={`conn-${inputIdx}-${hiddenIdx}`}
                                  x1="62"
                                  y1={inputY}
                                  x2="136"
                                  y2={hiddenY}
                                  stroke="url(#neuralGradient)"
                                  strokeWidth="1"
                                  opacity="0.3"
                                  initial={{ pathLength: 0, opacity: 0 }}
                                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    pathLength: { duration: 1, delay: 0.5 },
                                    opacity: { duration: 0.5, delay: 0.5 },
                                  }}
                                />
                              )
                            })
                          })}
                          
                          {/* Connections from Hidden Layer 1 to Hidden Layer 2 */}
                          {[0, 1, 2, 3].map((hidden1Idx) => {
                            const hidden1Y = 20 + hidden1Idx * 60
                            return [0, 1, 2].map((hidden2Idx) => {
                              const hidden2Y = 60 + hidden2Idx * 80
                              return (
                                <motion.line
                                  key={`conn-h1-${hidden1Idx}-h2-${hidden2Idx}`}
                                  x1="164"
                                  y1={hidden1Y}
                                  x2="238"
                                  y2={hidden2Y}
                                  stroke="url(#neuralGradient)"
                                  strokeWidth="1"
                                  opacity="0.3"
                                  initial={{ pathLength: 0, opacity: 0 }}
                                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    pathLength: { duration: 1, delay: 1 },
                                    opacity: { duration: 0.5, delay: 1 },
                                  }}
                                />
                              )
                            })
                          })}
                          
                          {/* Animated data flow particles */}
                          {[0, 1, 2].map((i) => {
                            const startY = 40 + i * 80
                            const midY = 20 + (i % 4) * 60
                            const endY = 60 + (i % 3) * 80
                            return (
                              <motion.circle
                                key={`particle-${i}`}
                                r="3"
                                fill="#f43f5e"
                                initial={{ opacity: 0, cx: 50, cy: startY }}
                                animate={{
                                  opacity: [0, 1, 1, 0],
                                  cx: [50, 150, 250, 300],
                                  cy: [startY, midY, endY, endY],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  delay: i * 0.8,
                                  ease: "easeInOut",
                                }}
                              />
                            )
                          })}
                        </svg>
                        
                        {/* Layer Labels */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4 text-xs text-gray-400">
                          <span className="text-accent-400">Input</span>
                          <span className="text-primary-400">Hidden</span>
                          <span className="text-secondary-400">Output</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🤖</span>
                    <h3 className="text-3xl md:text-4xl font-bold">
                      <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-400">
                        AI Engineering Journey
                      </span>
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I&apos;m actively pursuing expertise in <span className="text-accent-400 font-semibold">AI Engineering</span>, focusing on deep learning, neural networks, and production AI systems. My goal is to become a leading AI engineer who bridges the gap between data engineering and artificial intelligence.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-accent-400 font-semibold mb-1">Deep Learning & Neural Networks</h4>
                        <p className="text-gray-400 text-sm">Mastering architectures, optimization, and training strategies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-primary-400 font-semibold mb-1">Production AI Systems</h4>
                        <p className="text-gray-400 text-sm">Building scalable, reliable AI infrastructure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-400 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-secondary-400 font-semibold mb-1">LLMs & AI Agents</h4>
                        <p className="text-gray-400 text-sm">Developing intelligent agents and language models</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-effect rounded-2xl p-8 border-t-4 border-secondary-500"
        >
          <h3 className="text-2xl font-bold text-secondary-400 mb-6 text-center">Tech Arsenal</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'SQL', 'Spark', 'Azure', 'AWS', 'Kafka', 'Docker', 'Kubernetes', 'FastAPI', 'React', 'LLMs', 'LangChain', 'PyTorch', 'TensorFlow', 'Neural Networks'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05, type: 'spring' }}
                className={`px-4 py-2 rounded-full border text-gray-300 text-sm font-medium hover:scale-110 transition-all cursor-default ${
                  ['PyTorch', 'TensorFlow', 'Neural Networks'].includes(tech)
                    ? 'bg-gradient-to-r from-accent-900/50 to-accent-800/30 border-accent-500/50 hover:border-accent-400 hover:text-accent-300'
                    : 'bg-gradient-to-r from-primary-900/50 to-secondary-900/50 border-primary-500/30 hover:border-primary-400 hover:text-primary-300'
                }`}
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
