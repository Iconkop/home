'use client'

import { motion } from 'framer-motion'
import { mySite, mySiteSection } from '@/lib/data'
import ScrollReveal from './ScrollReveal'

export default function MySite() {
  if (mySite.length === 0) return null

  return (
    <section id="my-site" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/[0.04] dark:bg-indigo-500/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/[0.04] dark:bg-purple-500/[0.06] rounded-full blur-[80px]" />
        {/* 网格背景 */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* 标题区 */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass text-muted-foreground mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {mySiteSection.subtitle}
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              My <span className="gradient-text">Site</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 卡片网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {mySite.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative block"
            >
              {/* 渐变光晕（hover 时出现） */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-60 dark:group-hover:opacity-40 blur-md transition-opacity duration-500" />

              {/* 卡片主体 */}
              <div className="relative glass rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 h-full group-hover:border-indigo-500/30 dark:group-hover:border-indigo-400/20 transition-all duration-300">
                {/* 顶部发光点 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 图标 */}
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/15 dark:to-purple-500/15 flex items-center justify-center group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover"
                      />
                    ) : (
                      <span className="text-2xl sm:text-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-110 transform">
                        🌐
                      </span>
                    )}
                  </div>
                  {/* 图标底部光晕 */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 文字 */}
                <div className="text-center flex-1 flex flex-col justify-center">
                  <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {item.name}
                  </span>
                  {item.description && (
                    <p className="text-[10px] sm:text-xs text-muted-foreground/70 group-hover:text-muted-foreground mt-1 leading-relaxed transition-colors duration-300 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* 底部箭头指示 */}
                <svg
                  className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-muted-foreground translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
