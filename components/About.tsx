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
            Master&apos;s student in Applied Data Science with <span className="text-primary-400 font-semibold">3 years of professional experience</span> in data engineering and analytics. Proven ability to build scalable data pipelines, automate reporting systems, and develop predictive models across research and production environments.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Adept at using <span className="text-secondary-400 font-semibold">Python, SQL, Spark</span>, and cloud platforms (<span className="text-secondary-400 font-semibold">Azure, AWS</span>) to solve complex data challenges. Currently contributing to academic research in construction materials and developing custom Microsoft Access solutions. Passionate about driving data-informed decisions through clean pipelines, rigorous analysis, and stakeholder collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30 card-hover"
            >
              <div className="text-3xl font-bold text-gradient mb-2">3+ Years</div>
              <div className="text-gray-400">Professional Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary-900/50 to-secondary-800/30 border border-secondary-500/30 card-hover"
            >
              <div className="text-3xl font-bold text-gradient mb-2">MS</div>
              <div className="text-gray-400">Applied Data Science</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-900/50 to-accent-800/30 border border-accent-500/30 card-hover"
            >
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-gray-400">Certifications</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

