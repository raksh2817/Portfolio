import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rakshith Srinath | Data Engineer → AI Engineer | Solutions Engineer',
  description: 'Solutions Engineer at LifeLine Billing Solutions with a Master\'s in Applied Data Science (Clarkson University) and 3+ years of experience. Building scalable data pipelines and ETL, claims-management platforms, and full-stack apps. Expert in Python, SQL, Spark, Azure, AWS, Flask, and React.',
  keywords: 'Data Engineer, AI Engineer, Solutions Engineer, Applied Data Science, Python, SQL, Spark, Azure, AWS, PostgreSQL, Flask, React, ETL, RAG, LLM, Machine Learning, Data Analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

