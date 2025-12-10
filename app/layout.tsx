import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Rakshith Srinath | Graduate Research Assistant | Database Developer | Data Engineer',
  description: 'Master\'s in Applied Data Science with 3 years of professional experience. Building scalable data pipelines, automating reporting systems, and developing predictive models. Expert in Python, SQL, Spark, Azure, and AWS.',
  keywords: 'Data Engineer, Database Developer, Applied Data Science, Python, SQL, Spark, Azure, AWS, Machine Learning, Data Analytics',
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

