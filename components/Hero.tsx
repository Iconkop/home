'use client'

import { motion } from 'framer-motion'
import { personalInfo, hero } from '@/lib/data'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* 渐变光球 + 脉冲动画 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-violet-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.14, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-fuchsia-400/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 棱镜光斑 */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-32 h-32 bg-gradient-to-br from-violet-400/20 to-transparent rounded-full blur-2xl"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge 标签 - 脉冲点 */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass text-muted-foreground">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-violet-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {hero.badge}
          </span>
        </motion.div>

        {/* 标题 - 直接展示名字 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* 副标题 - 打字机光标效果 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-muted-foreground font-medium mb-4"
        >
          {personalInfo.title}
          <motion.span
            className="inline-block w-[2px] h-5 bg-violet-400 ml-1 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA 按钮 - 浮动呼吸 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-shadow"
          >
            {hero.ctaPrimary}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
            }}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium glass rounded-full hover:shadow-lg transition-shadow"
          >
            {hero.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* 滚动提示 - 呼吸动画 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 sm:mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <motion.span
              className="text-xs"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              {hero.scrollText}
            </motion.span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-5 group-hover:text-violet-400 transition-colors"
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
