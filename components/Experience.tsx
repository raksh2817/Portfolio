'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Grading Assistant',
    company: 'Clarkson University Graduate School',
    location: 'Potsdam, New York, United States',
    period: 'May 2025 - Present (7 months)',
    achievements: [
      'Assisting in grading assignments for IA 503 - a graduate-level course focused on Python programming for applied data science',
      'Supporting students by clarifying concepts and reviewing code for best practices and accuracy',
      'Collaborating with the professor to maintain academic standards and ensure timely feedback',
    ],
  },
  {
    title: 'Graduate Assistant',
    company: 'Clarkson University Graduate School',
    location: 'Potsdam, New York, United States',
    period: 'April 2025 - Present (8 months)',
    achievements: [
      'Access Database Developer for Elmcrest, Syracuse, New York',
      'Behavioral Tracking System: Designed and maintained a Microsoft Access-based system to log and analyze clinical behavioral data',
      'Workflow Automation: Automated complex form interactions, time-slot updates, and conditional logic using VBA to improve data input efficiency',
      'Performance Optimization: Enhanced query performance with indexing, table redesign, and parameterized SQL for real-time reporting',
      'Stakeholder Collaboration: Worked closely with clinical supervisors to align data workflows with intervention strategies, ensuring data integrity and compliance',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Clarkson University',
    location: 'Potsdam, New York, United States',
    period: 'November 2024 - October 2025 (1 year)',
    achievements: [
      'Supporting a multidisciplinary civil engineering research project aimed at optimizing cementitious blends for sustainable construction',
      'Conducting comprehensive data cleaning and standardization to ensure accuracy and consistency across complex datasets',
      'Performing exploratory data analysis (EDA) to uncover patterns between blend composition, compressive strength, and reactivity metrics',
      'Building and tuning predictive models to forecast material strength and hydration activity over time, helping researchers predict long-term blend performance',
      'Applying multi-objective optimization to identify optimal blend ratios that maximize strength while supporting sustainability goals, such as higher GPP (ground-glass pozzolan) use',
      'Developing interactive visualizations and dashboards to facilitate decision-making for civil engineering researchers',
    ],
  },
  {
    title: 'Data Engineer - 1',
    company: 'LatentView Analytics',
    location: 'Chennai, Tamil Nadu, India',
    period: 'August 2021 - April 2023 (1 year 9 months)',
    achievements: [
      'Spearheaded optimization of PySpark pipelines in a Hadoop environment, implementing incremental data loading and Spark partitioning strategies that improved performance by 30%',
      'Migrated on-premise data systems to Azure Databricks, utilizing cloud-native architectures (Delta Lake, Azure ADLS) for cost-efficient data storage and real-time data retrieval',
      'Developed real-time streaming solutions using Spark Structured Streaming and Kafka to handle high-volume data in Azure environments',
      'Designed fact and dimension tables using SQL in both on-premise and Azure SQL environments, leveraging SCD Type 2 for historical data accuracy',
    ],
  },
  {
    title: 'Summer Intern',
    company: 'AgilePoint',
    location: 'Bangalore Urban, Karnataka, India',
    period: 'April 2018 - May 2018 (2 months)',
    achievements: [
      'Gained hands-on experience in software development and business process automation',
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

