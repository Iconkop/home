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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-400/[0.04] dark:bg-violet-400/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-400/[0.04] dark:bg-indigo-400/[0.06] rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
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
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {mySiteSection.subtitle}
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              My <span className="gradient-text">Site</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 卡片网格：移动端2列，sm 3列，lg 4列居中 */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[720px] mx-auto">
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
              whileHover={{ y: -8, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative block w-[calc(50%-6px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
            >
              {/* 渐变光晕 */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-400 via-indigo-400 to-fuchsia-400 opacity-0 group-hover:opacity-60 dark:group-hover:opacity-40 blur-md transition-opacity duration-500" />

              {/* 卡片主体 */}
              <div className="relative glass rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-4 h-full group-hover:border-violet-400/30 dark:group-hover:border-violet-400/20 transition-all duration-300">
                {/* 顶部发光线 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 图标容器 */}
                <div className="relative">
                  {/* 外圈光环 */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-violet-400/0 to-indigo-400/0 group-hover:from-violet-400/10 group-hover:to-indigo-400/10 transition-all duration-500 blur-sm" />

                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-400/8 to-indigo-400/8 dark:from-violet-400/15 dark:to-indigo-400/15 flex items-center justify-center overflow-hidden group-hover:from-violet-400/15 group-hover:to-indigo-400/15 dark:group-hover:from-violet-400/25 dark:group-hover:to-indigo-400/25 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-400/10">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 group-hover:scale-110"
                      />
                    ) : (
                      /* 默认 SVG 矢量图标 */
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 text-foreground/30 group-hover:text-violet-400 dark:group-hover:text-violet-400 transition-all duration-300 group-hover:scale-110"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                  </div>

                  {/* 底部投影光晕 */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-violet-400/25 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 文字区 */}
                <div className="text-center">
                  <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {item.name}
                  </span>
                  {item.description && (
                    <p className="text-[10px] sm:text-xs text-muted-foreground/70 group-hover:text-muted-foreground mt-1 leading-relaxed transition-colors duration-300 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* 底部外链箭头 */}
                <svg
                  className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-muted-foreground/60 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
