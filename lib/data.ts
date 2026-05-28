/**
 * 个人主页数据配置
 * 修改此文件即可更新网站所有内容，无需改动组件代码
 */

// ========== 网站设置 ==========
export const site = {
  title: 'Shinko\'s Portfolio',     // 网站标题（浏览器标签页 + SEO）
  navTitle: 'Portfolio',            // 导航栏左上角显示的文字
  description: 'This is My Web',    // 网站描述（SEO + OG 分享）
}

// ========== 个人信息 ==========
export const personalInfo = {
  name: 'Shinko',                // 你的名字（显示在 Hero 区域）
  title: '',                 // 职位头衔（显示在 Hero 名字下方）
  description: 'This is My Web', // 个人简介（Hero 区域描述文字）
  email: 'shenzhan22@gmail.com',    // 联系邮箱
  github: 'https://github.com/iconkop',  // GitHub 主页链接
}

// ========== Hero 区域 ==========
export const hero = {
  badge: 'Available for opportunities',   // 状态标签文字
  ctaPrimary: 'View Projects',            // 主按钮文字
  ctaSecondary: 'Get in Touch',           // 副按钮文字
  scrollText: 'Scroll',                   // 滚动提示文字
}

// ========== 导航栏链接 ==========
// href 对应各区块的 id，可自由增减
export const navLinks = [
  { label: 'About', href: '#about' },           // 关于我
  { label: 'Tech Stack', href: '#tech-stack' }, // 技术栈
  { label: 'Experience', href: '#experience' }, // 经历
  { label: 'Projects', href: '#projects' },     // 项目展示
  { label: 'My Site', href: '#my-site' },        // 我的网站
  { label: 'Contact', href: '#contact' },       // 联系方式
]

// ========== 关于我 ==========
export const about = {
  subtitle: 'A passionate developer crafting digital experiences with clean code and thoughtful design.', // 区块副标题
  backgroundTitle: 'Background',   // 个人介绍标题
  background: [                    // 个人介绍段落（数组，每项为一段）
    'I\'m a full-stack developer with a passion for building beautiful, performant web applications. With years of experience in modern web technologies, I focus on creating solutions that are both elegant and scalable.',
    'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.',
  ],
  skillsTitle: 'Skills',           // 技能标题
  techStackTitle: 'Tech Stack',    // 技术栈标题
  experienceTitle: 'Experience',   // 经历标题
}

// ========== 技术栈 ==========
// 图标使用 emoji，可替换为自定义 SVG 或图标库
export const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '💚' },
  { name: 'TailwindCSS', icon: '🎨' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
]

// ========== 技能 ==========
// level: 0-100，控制进度条宽度
export const skills = [
  { name: 'Frontend Development', level: 95 },  // 前端开发
  { name: 'Backend Development', level: 88 },   // 后端开发
  { name: 'UI/UX Design', level: 82 },          // UI/UX 设计
  { name: 'DevOps', level: 75 },                // 运维部署
]

// ========== 经历时间轴 ==========
export const timeline = [
  {
    year: '2024 — Present',           // 时间段
    title: 'Senior Developer',        // 职位
    company: 'Tech Company',          // 公司
    description: 'Leading frontend architecture and building scalable web applications.', // 工作描述
  },
  {
    year: '2022 — 2024',
    title: 'Full Stack Developer',
    company: 'Startup Inc.',
    description: 'Built and shipped multiple products from concept to production.',
  },
  {
    year: '2020 — 2022',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created beautiful, responsive websites for diverse clients.',
  },
]

// ========== 项目展示 ==========
// 可自由增减，奇数时最后一个自动居中，为空数组时整个区域隐藏
// image: 项目截图路径（放在 public/projects/ 目录下）
// tags: 使用的技术标签
// github: 源码链接
// live: 在线预览链接
export const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript. Features real-time collaboration and a beautiful UI.',
    image: '/projects/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.example.com',
  },
  {
    title: 'Project Two',
    description: 'An AI-powered tool that helps developers write better code. Integrates with popular IDEs and CI/CD pipelines.',
    image: '/projects/project2.jpg',
    tags: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.example.com',
  },
  {
    title: 'Project Three',
    description: 'A design system and component library used by multiple teams. Focuses on accessibility and developer experience.',
    image: '/projects/project3.jpg',
    tags: ['React', 'Storybook', 'Radix UI', 'Figma'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.example.com',
  },
  {
    title: 'Project Four',
    description: 'A real-time dashboard for monitoring cloud infrastructure. Built with WebSocket and server-sent events.',
    image: '/projects/project4.jpg',
    tags: ['Vue.js', 'D3.js', 'Go', 'Redis'],
    github: 'https://github.com/yourusername/project4',
    live: 'https://project4.example.com',
  },
]

// ========== 项目区块 ==========
export const projectsSection = {
  subtitle: 'A selection of projects I\'ve built — from web apps to developer tools.', // 区块副标题
}

// ========== 我的网站 ==========
// 可自由增减，布局自动适配：
//   PC 端：1-2 个居中，3 个靠左，4 个填满一行
//   移动端：每行 2 个，奇数时最后一个居中
// icon: 图标图片路径（放在 public/ 目录下），留空显示默认图标
// url: 网站链接
// description: 简短描述（可选，显示在名称下方）
export const mySiteSection = {
  subtitle: 'A collection of my websites and projects.', // 区块副标题
}

export const mySite = [
  { name: '小辰云小栈', icon: 'https://xusue.com/favicon.ico', url: 'https://xusue.com', description: 'Personal blog' },
  { name: 'GitHub', icon: '', url: 'https://github.com', description: 'Open source projects' },
  { name: 'Docs', icon: '', url: 'https://example.com/docs', description: 'Documentation' },
  { name: 'Gallery', icon: '', url: 'https://example.com/gallery', description: 'Photo gallery' },
  ]

// ========== 联系方式 ==========
export const contact = {
  subtitle: 'Interested in working together or just want to say hello? Feel free to reach out through any of these channels.', // 区块副标题
  cta: 'Say Hello',  // 主按钮文字
}

// ========== 页脚 ==========
export const footer = {
  copyright: 'All rights reserved.',  // 版权声明后缀（前面会自动拼接年份和名字）
  icp: '',                             // 备案号（如需显示可填写，留空则不显示）
}
