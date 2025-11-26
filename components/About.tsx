'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Versatile technologist with <span className="text-primary-400 font-semibold">3+ years of experience</span> in data engineering, full-stack development, and machine learning. Proven track record building scalable data pipelines processing <span className="text-primary-400 font-semibold">2-3 TB daily</span>, developing web applications, and deploying ML models.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Core expertise in <span className="text-secondary-400 font-semibold">Python, SQL, Apache Spark</span>, cloud platforms (<span className="text-secondary-400 font-semibold">AWS/Azure</span>), and modern ML/web frameworks. <span className="text-primary-400 font-semibold">MS in Applied Data Science</span> candidate at Clarkson University combining engineering depth with analytical rigor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30">
              <div className="text-3xl font-bold text-gradient mb-2">2-3 TB</div>
              <div className="text-gray-400">Daily Data Processing</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary-900/50 to-secondary-800/30 border border-secondary-500/30">
              <div className="text-3xl font-bold text-gradient mb-2">3+ Years</div>
              <div className="text-gray-400">Professional Experience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-900/50 to-accent-800/30 border border-accent-500/30">
              <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-gray-400">Users Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

