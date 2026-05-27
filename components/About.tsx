'use client'

import { motion } from 'framer-motion'
import { techStack, skills, timeline, about } from '@/lib/data'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {about.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 个人介绍 + 技能 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-24">
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold">{about.backgroundTitle}</h3>
              {about.background.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold">{about.skillsTitle}</h3>
              <div className="space-y-4 sm:space-y-5">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 技术栈 */}
        <ScrollReveal>
          <div id="tech-stack" className="mb-16 sm:mb-24">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-10">{about.techStackTitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-4 sm:p-5 text-center hover:shadow-lg transition-shadow cursor-default"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{tech.icon}</div>
                  <div className="text-xs sm:text-sm font-medium">{tech.name}</div>
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
              {/* 时间轴线 */}
              <div className="absolute left-4 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

              <div className="space-y-6 sm:space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-10 sm:pl-12"
                  >
                    {/* 时间轴圆点 */}
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ring-4 ring-background" />

                    <div className="glass rounded-2xl p-4 sm:p-6">
                      <span className="text-xs text-muted-foreground font-medium">{item.year}</span>
                      <h4 className="text-base sm:text-lg font-semibold mt-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
