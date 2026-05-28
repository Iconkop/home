'use client'

import { motion } from 'framer-motion'
import { projects, projectsSection } from '@/lib/data'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  // 项目为空时隐藏整个区域
  if (projects.length === 0) return null

  return (
    <section id="projects" className="py-14 sm:py-24 px-4 sm:px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {projectsSection.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              delay={i * 0.1}
              className="w-full sm:w-[calc(50%-12px)]"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
              >
                {/* 项目封面 */}
                <div className="relative aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl sm:text-6xl opacity-20">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 项目信息 */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 链接按钮 */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium glass rounded-full hover:scale-105 transition-transform"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium bg-foreground text-background rounded-full hover:scale-105 transition-transform"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
