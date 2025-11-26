'use client'

import { motion } from 'framer-motion'

const certifications = [
  {
    name: 'Post Graduate Program in Data Science and Engineering',
    issuer: 'Great Learning',
    year: '2020-2021',
    icon: '🎓',
  },
  {
    name: 'Alteryx Foundational Certification',
    issuer: 'Alteryx',
    year: '2021',
    icon: '📊',
  },
  {
    name: 'The Complete SQL Bootcamp 2021: Go from Zero to Hero',
    issuer: 'Udemy',
    year: '2021',
    icon: '💾',
  },
  {
    name: 'Hive to ADVANCE HIVE (real time usage): Hadoop querying tool',
    issuer: 'Online',
    year: '2021',
    icon: '☁️',
  },
  {
    name: 'A Training program on Data Engineering',
    issuer: 'Professional Training',
    year: '2021',
    icon: '🔧',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400">
            Professional certifications and training programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-primary-400 mb-2 group-hover:text-primary-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-300 text-sm">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

