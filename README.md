# Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and TailwindCSS. All content is driven by a single configuration file — no component code changes needed to customize.

## Features

- **Single-file configuration** — edit `lib/data.ts` to update all site content
- **Responsive design** — optimized for mobile, tablet, and desktop
- **Dark / Light mode** — automatic system detection with manual toggle
- **Particle background** — interactive canvas animation, reduced particles on mobile for performance
- **Smooth scroll navigation** — fixed navbar with section anchors
- **Scroll reveal animations** — entrance animations powered by framer-motion
- **Static export** — outputs pure HTML/CSS/JS, deployable anywhere

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, description, CTA buttons, scroll indicator |
| **About** | Background, skill bars, tech stack grid, experience timeline |
| **Projects** | Project cards with cover image, tags, GitHub & live links |
| **My Site** | Link cards to your other websites |
| **Contact** | Email and social links |
| **Footer** | Copyright, ICP registration (optional), social icons |

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS 3.4](https://tailwindcss.com/)
- [framer-motion](https://www.framer.com/motion/) (animations)
- [next-themes](https://github.com/pacocoursey/next-themes) (dark mode)
- [Geist](https://vercel.com/font) (font)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/Iconkop/home.git
cd home
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Customization

All site content lives in **`lib/data.ts`**. Edit the exported objects to customize:

```ts
// Site metadata
export const site = {
  title: 'My Portfolio',
  navTitle: 'My Site',
  description: 'A personal portfolio website',
}

// Personal info
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'A short bio',
  email: 'you@example.com',
  github: 'https://github.com/you',
}

// Tech stack (emoji icons)
export const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
]

// Skills (0-100)
export const skills = [
  { name: 'Frontend', level: 90 },
  { name: 'Backend', level: 75 },
]

// Experience timeline
export const timeline = [
  { year: '2024', title: 'Role', company: 'Company', description: 'What you did' },
]

// Projects
export const projects = [
  {
    title: 'Project Name',
    description: 'What it does',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/you/project',
    live: 'https://project.example.com',
  },
]

// My Site links
export const mySite = [
  { name: 'Blog', icon: '', url: 'https://blog.example.com', description: 'My blog' },
]

// Footer
export const footer = {
  copyright: 'All rights reserved.',
  icp: '', // ICP registration number (optional, for China deployment)
}
```

> **Tip:** Sections with empty arrays (e.g., `projects = []`, `mySite = []`) are automatically hidden.

## Deployment

### GitHub Pages

Set the `BASE_PATH` environment variable to your repository name:

```bash
BASE_PATH=/repo-name npm run build
```

Then deploy the `out/` directory to GitHub Pages.

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Iconkop/home)

### Any Static Host

The `out/` directory can be served by Nginx, Apache, Cloudflare Pages, Netlify, or any static file server.

## Project Structure

```
app/
  globals.css        # Global styles, CSS variables, scrollbar, glassmorphism
  layout.tsx         # Root layout, viewport meta, ThemeProvider
  page.tsx           # Page composition (Navbar + sections + Footer)
components/
  About.tsx          # About section
  Contact.tsx        # Contact section
  Footer.tsx         # Footer
  Hero.tsx           # Hero section with gradient blobs
  MySite.tsx         # My Site link cards
  Navbar.tsx         # Fixed navbar with mobile menu
  ParticleBackground.tsx  # Canvas particle animation
  Projects.tsx       # Project showcase cards
  ScrollReveal.tsx   # Scroll-triggered entrance animation wrapper
  ThemeProvider.tsx  # Dark/light theme context
lib/
  data.ts            # All site content (single source of truth)
public/
  image/             # Static images
```

## License

MIT
