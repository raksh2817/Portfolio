'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'MS in Applied Data Science',
    institution: 'Clarkson University',
    location: 'Potsdam, NY',
    period: 'Jan 2024 - Dec 2025',
  },
  {
    degree: 'PG Diploma in Data Science',
    institution: 'Great Lakes Institute of Management',
    location: 'Bengaluru, India',
    period: 'Oct 2020 - Jun 2021',
  },
  {
    degree: 'BS in Computer Science & Engineering',
    institution: 'Christ University',
    location: 'Bengaluru, India',
    period: 'Aug 2016 - Jun 2020',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-primary-400 mb-2">{edu.degree}</h3>
              <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-400 mb-3">{edu.location}</p>
              <span className="px-4 py-2 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-300 text-sm">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

