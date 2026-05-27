'use client'

import { motion } from 'framer-motion'
import { mySite, mySiteSection } from '@/lib/data'
import ScrollReveal from './ScrollReveal'

export default function MySite() {
  if (mySite.length === 0) return null

  const count = mySite.length
  const pcJustify = count <= 2 ? 'sm:justify-center' : ''

  return (
    <section id="my-site" className="py-16 sm:py-24 px-4 sm:px-6 gradient-bg relative overflow-hidden">
      {/* 装饰光球 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
              My <span className="gradient-text">Site</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {mySiteSection.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={`flex flex-wrap justify-center ${pcJustify} gap-3 sm:gap-5`}>
            {mySite.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="w-[calc(50%-6px)] sm:w-[calc(25%-15px)] relative group"
              >
                {/* 渐变边框光效 */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />

                {/* 卡片主体 */}
                <div className="relative glass rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 group-hover:shadow-xl group-hover:shadow-indigo-500/10 transition-all duration-300">
                  {/* 图标容器 */}
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl object-cover"
                        />
                      ) : (
                        <span className="text-2xl sm:text-3xl opacity-50 group-hover:opacity-80 transition-opacity">🌐</span>
                      )}
                    </div>
                    {/* 图标光晕 */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* 文字 */}
                  <div className="text-center">
                    <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-tight">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
