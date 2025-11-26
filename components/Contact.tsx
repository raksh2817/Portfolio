'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400">
            Let&apos;s connect and discuss opportunities in data engineering, analytics, or research collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900/30 border border-primary-500/30 text-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900/30 border border-primary-500/30 text-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900/30 border border-primary-500/30 text-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/50 transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-primary-900/30 border border-primary-500/30 text-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-3 bg-gradient-primary rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : status === 'error' ? 'Error - Try Again' : 'Send Message'}
              </motion.button>
              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">Thank you! I&apos;ll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:rakshithsrinath17@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30 hover:border-primary-400 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-primary-400 font-semibold group-hover:text-primary-300">
                      rakshithsrinath17@gmail.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+13156210543"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-br from-secondary-900/50 to-secondary-800/30 border border-secondary-500/30 hover:border-secondary-400 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-secondary-400 font-semibold group-hover:text-secondary-300">
                      +1 (315) 621-0543
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rakshith-s-170298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-br from-accent-900/50 to-accent-800/30 border border-accent-500/30 hover:border-accent-400 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl">💼</div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-accent-400 font-semibold group-hover:text-accent-300">
                      Connect with me
                    </div>
                  </div>
                </motion.a>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-primary-400 font-semibold">
                      Potsdam, New York, United States
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-gray-500"
      >
        <p>© 2025 Rakshith S. All rights reserved.</p>
      </motion.div>
    </section>
  )
}

