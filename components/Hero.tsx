'use client'

import { motion } from 'framer-motion'
import { personalInfo, hero } from '@/lib/data'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* 渐变光球 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium glass text-muted-foreground">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-muted-foreground font-medium mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {hero.ctaPrimary}
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium glass rounded-full hover:scale-105 transition-all duration-300"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 sm:mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs">{hero.scrollText}</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
