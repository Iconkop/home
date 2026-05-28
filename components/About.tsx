'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { techStack, skills, timeline, about } from '@/lib/data'
import ScrollReveal from './ScrollReveal'

// 技能数字计数器
function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span>{count}%</span>
}

export default function About() {
  const skillsRef = useRef<HTMLDivElement>(null)
  const skillsInView = useInView(skillsRef, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {about.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 个人介绍 + 技能 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-20">
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold">{about.backgroundTitle}</h3>
              {about.background.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4 sm:space-y-6" ref={skillsRef}>
              <h3 className="text-xl sm:text-2xl font-semibold">{about.skillsTitle}</h3>
              <div className="space-y-4 sm:space-y-5">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">
                        <AnimatedCounter target={skill.level} inView={skillsInView} />
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 relative"
                      >
                        {/* 闪光效果 */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '200%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.8 + i * 0.12, ease: 'easeOut' }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 技术栈 */}
        <ScrollReveal>
          <div id="tech-stack" className="mb-12 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-10">{about.techStackTitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="group glass rounded-2xl p-4 sm:p-5 text-center cursor-default relative overflow-hidden"
                >
                  {/* Hover 背景光晕 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/0 to-indigo-400/0 group-hover:from-violet-400/10 group-hover:to-indigo-400/10 transition-all duration-500" />
                  {/* 底部发光线 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent transition-all duration-500" />

                  <motion.div
                    className="text-2xl sm:text-3xl mb-2 sm:mb-3 relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="text-xs sm:text-sm font-medium relative z-10 group-hover:text-foreground transition-colors">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 经历时间轴 */}
        <ScrollReveal>
          <div id="experience">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-10">{about.experienceTitle}</h3>
            <div className="relative max-w-2xl mx-auto">
              {/* 时间轴线 - 渐进绘制动画 */}
              <motion.div
                className="absolute left-4 sm:left-4 top-0 w-px bg-gradient-to-b from-violet-500/60 via-indigo-400/40 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="space-y-6 sm:space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-10 sm:pl-12"
                  >
                    {/* 时间轴圆点 - 脉冲光环 */}
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 ring-4 ring-background">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-violet-400/50"
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>

                    <motion.div
                      className="glass rounded-2xl p-4 sm:p-6 group hover:shadow-lg hover:shadow-violet-500/5 transition-shadow"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs text-muted-foreground font-medium font-mono">{item.year}</span>
                      <h4 className="text-base sm:text-lg font-semibold mt-1 group-hover:text-foreground transition-colors">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
