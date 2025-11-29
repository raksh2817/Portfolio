'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'repositories', 'education', 'certifications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Repositories', id: 'repositories' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer group relative"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              {/* Tech/AI Logo Container */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-md"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Main logo container with tech border */}
                <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-primary-900/80 to-secondary-900/80 border-2 border-primary-500/50 group-hover:border-primary-400 transition-all duration-300 flex items-center justify-center overflow-hidden">
                  {/* Animated tech grid pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-400" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  {/* Neural network nodes animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-accent-400"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* RS Initials */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent tracking-tight">
                      RS
                    </span>
                  </div>
                  
                  {/* Corner tech accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary-400 opacity-60" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-secondary-400 opacity-60" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent-400 opacity-60" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary-400 opacity-60" />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary-400'
                    : 'text-gray-400 hover:text-primary-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-primary-500/30"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary-900/50 text-primary-400'
                      : 'text-gray-400 hover:bg-primary-900/30 hover:text-primary-400'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

