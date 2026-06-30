'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Real-time Streaming Pipeline',
    tech: 'Kafka, Spark Streaming, Delta Lake, AWS',
    period: 'Oct - Dec 2025',
    description: 'Built real-time pipeline processing 100K events/second with exactly-once semantics and <3 second latency. Deployed on AWS using Docker/Kubernetes with auto-scaling based on lag metrics.',
    borderClass: 'border-primary-500',
    textClass: 'text-primary-400',
  },
  {
    title: 'LLM-Powered Document Analysis System',
    tech: 'LangChain, ChromaDB, FastAPI, React',
    period: 'May - Jul 2025',
    description: 'Developed RAG system achieving 92% accuracy across 10K+ documents with web interface. Built React + FastAPI application with user authentication and real-time document processing.',
    borderClass: 'border-secondary-500',
    textClass: 'text-secondary-400',
  },
  {
    title: 'Enterprise Behavioral Data Warehouse',
    tech: 'MS Access, VBA, SQL',
    period: 'Mar - Dec 2025',
    description: 'Led a team of 5 to architect an enterprise data warehouse with dimensional modeling, centralizing behavioral data from 50+ distributed entry points across residential facilities. Built an automated ETL pipeline with validation rules, referential-integrity constraints, and audit logging, processing 1000+ monthly transactions at 99.9% accuracy.',
    borderClass: 'border-accent-500',
    textClass: 'text-accent-400',
  },
  {
    title: 'End-to-End ML Pipeline for Churn Prediction',
    tech: 'Airflow, MLflow, AWS SageMaker',
    period: 'Jan - Mar 2024',
    description: 'Built production ML pipeline with feature store processing 5M customer records daily. Deployed XGBoost model with A/B testing, reducing churn by 18% and saving $2M annually.',
    borderClass: 'border-accent-500',
    textClass: 'text-accent-400',
  },
  {
    title: 'Apache Spark Benchmarking',
    tech: 'Spark, DuckDB, Pandas',
    period: 'Feb - Apr 2024',
    description: 'Benchmarked frameworks on 10M+ flight records achieving 45% performance improvement through strategic partitioning, caching, and broadcast joins.',
    borderClass: 'border-primary-500',
    textClass: 'text-primary-400',
  },
  {
    title: 'System Monitoring Tool',
    tech: 'Flask, Docker, Grafana, MySQL',
    period: 'Jul 2024 - Present',
    description: 'Developed containerized Flask API + Python agent via Docker Compose to log CPU, memory, and disk metrics in MySQL fact/dim schema.',
    borderClass: 'border-secondary-500',
    textClass: 'text-secondary-400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-effect rounded-2xl p-6 card-hover border-t-4 ${project.borderClass} group relative overflow-hidden`}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300" />
              <div className="relative z-10">
                <div className={`text-xs font-semibold ${project.textClass} mb-3 px-2 py-1 rounded-full inline-block bg-${project.borderClass.split('-')[1]}-900/30`}>
                  {project.period}
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary-900/30 border border-primary-500/30 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

