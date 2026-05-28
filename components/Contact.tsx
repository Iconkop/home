'use client'

import { motion } from 'framer-motion'
import { personalInfo, contact } from '@/lib/data'
import ScrollReveal from './ScrollReveal'

const contactLinks = [
  {
    name: 'GitHub',
    href: personalInfo.github,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
            {contact.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="glass rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow group"
                aria-label={link.name}
              >
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.icon}
                </div>
                <div className="text-xs font-medium mt-2.5 sm:mt-3 text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.name}
                </div>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 sm:mt-16">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {contact.cta}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
