'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import GitHubRepositories from '@/components/GitHubRepositories'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubRepositories />
      <Education />
      <Certifications />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

