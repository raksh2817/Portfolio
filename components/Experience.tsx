'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Solutions Engineer',
    company: 'LifeLine Billing Solutions Inc',
    location: 'Texas, USA — Remote',
    period: 'Dec 2025 - Present',
    achievements: [
      'Architected an end-to-end claims management system replacing manual Excel workflows, designing a PostgreSQL schema with dimensional modeling to centralize claims data from third-party integrations',
      'Built a batch ETL pipeline to ingest, validate, and transform claims data from external systems into a normalized relational database with audit logging and error handling',
      'Developed a role-based workflow platform with Flask REST APIs and a React frontend, enabling 4 user types to track the claims lifecycle across configurable stages',
      'Scaled the system beyond pilot to production deployment serving active users, with a roadmap to integrate AI-powered automation features',
    ],
  },
  {
    title: 'Data Engineer I',
    company: 'LatentView Analytics (Adobe B2B Marketing)',
    location: 'Chennai, India',
    period: 'Aug 2021 - Apr 2023',
    achievements: [
      'Built clickstream analytics pipelines processing 2-3 TB daily using PySpark, HiveQL, and SQL Server for Adobe&apos;s B2B marketing platform serving 10K+ users',
      'Developed an automated data reconciliation framework using PySpark and Airflow to detect and resolve discrepancies across upstream data sources, reducing manual QA effort by 60%',
      'Optimized data warehouse performance through partitioning, bucketing, and columnar formats (Parquet/ORC), achieving 2x faster query execution and 50% storage reduction',
      'Led migration from on-premise Hadoop to Azure Databricks with Delta Lake, reducing ETL runtimes by 40% with 99.9% pipeline uptime',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Skyward Publication',
    location: 'Bengaluru, India',
    period: 'May 2020 - Jul 2021',
    achievements: [
      'Engineered ETL pipelines (10K+ records/day) and full-stack applications for a small-scale publisher using Python, JavaScript, MySQL, SQL Server, and REST APIs',
      'Built an internal content management dashboard with a JavaScript frontend and Python backend, streamlining the editorial workflow and reducing publication turnaround time by 25%',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary group-hover:w-2 transition-all" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-300" />
              <div className="pl-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-400 mb-1 group-hover:text-primary-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-300 text-sm font-semibold group-hover:border-primary-400 transition-colors">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start group/item"
                    >
                      <span className="text-primary-400 mr-3 mt-1 group-hover/item:text-primary-300 transition-colors">▸</span>
                      <span className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

