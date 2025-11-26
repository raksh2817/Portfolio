'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: ['Python', 'SQL', 'Apache Spark', 'Java', 'JavaScript', 'Bash', 'ETL/ELT', 'Data Warehousing', 'Data Modeling', 'Visual Basic for Applications (VBA)', 'Microsoft Access'],
    colorClass: 'text-primary-400',
    bgClass: 'bg-primary-900/50',
    borderClass: 'border-primary-500/30',
    textClass: 'text-primary-300'
  },
  {
    title: 'Data Engineering',
    skills: ['Databricks', 'Delta Lake', 'Airflow', 'Kafka', 'Snowflake', 'dbt', 'Hadoop', 'Hive', 'Oozie', 'Stream Processing'],
    colorClass: 'text-secondary-400',
    bgClass: 'bg-secondary-900/50',
    borderClass: 'border-secondary-500/30',
    textClass: 'text-secondary-300'
  },
  {
    title: 'ML/AI',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'RAG', 'MLflow', 'Feature Engineering', 'Model Deployment'],
    colorClass: 'text-accent-400',
    bgClass: 'bg-accent-900/50',
    borderClass: 'border-accent-500/30',
    textClass: 'text-accent-300'
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (S3, EC2, SageMaker)', 'Azure (Databricks, ADF)', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    colorClass: 'text-primary-400',
    bgClass: 'bg-primary-900/50',
    borderClass: 'border-primary-500/30',
    textClass: 'text-primary-300'
  },
  {
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Alteryx', 'Tableau', 'Grafana', 'Power BI', 'Git', 'Jira'],
    colorClass: 'text-secondary-400',
    bgClass: 'bg-secondary-900/50',
    borderClass: 'border-secondary-500/30',
    textClass: 'text-secondary-300'
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-4 ${category.colorClass} group-hover:scale-105 transition-transform`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.02 }}
                      className={`px-3 py-1 rounded-full text-sm ${category.bgClass} border ${category.borderClass} ${category.textClass} cursor-default`}
                      whileHover={{ scale: 1.15, zIndex: 10 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

