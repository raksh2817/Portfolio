'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400">
            Let&apos;s connect and discuss opportunities in data engineering, ML, or full-stack development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:rakshithsrinath17@gmail.com"
              className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30 hover:border-primary-400 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">📧</div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-primary-400 font-semibold group-hover:text-primary-300">
                  rakshithsrinath17@gmail.com
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+13156210543"
              className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-secondary-900/50 to-secondary-800/30 border border-secondary-500/30 hover:border-secondary-400 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">📱</div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-secondary-400 font-semibold group-hover:text-secondary-300">
                  +1-315-621-0543
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-accent-900/50 to-accent-800/30 border border-accent-500/30 hover:border-accent-400 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">💼</div>
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <div className="text-accent-400 font-semibold group-hover:text-accent-300">
                  Connect with me
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30 hover:border-primary-400 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">💻</div>
              <div>
                <div className="text-sm text-gray-400">GitHub</div>
                <div className="text-primary-400 font-semibold group-hover:text-primary-300">
                  View my code
                </div>
              </div>
            </motion.a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              <span className="text-primary-400">📍</span> Currently based in <span className="text-primary-400 font-semibold">Potsdam, NY</span>
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-gray-500"
      >
        <p>© 2025 Rakshith Srinath. All rights reserved.</p>
      </motion.div>
    </section>
  )
}

