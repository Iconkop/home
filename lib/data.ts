/**
 * 个人主页数据配置
 * 修改此文件即可更新网站所有内容，无需改动组件代码
 */

// ========== 网站设置 ==========
export const site = {
  title: '小辰云小栈',     // 网站标题（浏览器标签页 + SEO）
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
  badge: '开放合作机会',   // 状态标签文字
  ctaPrimary: '浏览项目',            // 主按钮文字
  ctaSecondary: '取得联系',           // 副按钮文字
  scrollText: '向下滚动',                   // 滚动提示文字
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
  subtitle: '一位充满激情的开发者，用简洁的代码和用心的设计创造数字体验。', // 区块副标题
  backgroundTitle: '背景',   // 个人介绍标题
  background: [                    // 个人介绍段落（数组，每项为一段）
    '我是一名全栈开发者，热衷于构建美观、高性能的 Web 应用。拥有多年的现代 Web 技术经验，专注于打造既优雅又可扩展的解决方案。',
    '在不敲代码的时候，我喜欢探索新技术、为开源项目做贡献，或者和开发者社区分享知识。',
  ],
  skillsTitle: '技能',           // 技能标题
  techStackTitle: '技术栈',    // 技术栈标题
  experienceTitle: '经历',   // 经历标题
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
  { name: '前端开发', level: 95 },
  { name: '后端开发', level: 88 },
  { name: 'UI/UX 设计', level: 82 },
  { name: '运维部署', level: 75 },
]

// ========== 经历时间轴 ==========
export const timeline = [
  {
    year: '2027 —  Future',
    title: '一名开发人员',
    company: 'Unseen',
    description: '',
  },
  {
    year: '2012-2027',
    title: '学生',
    company: '',
    description: '一直在上学',
  },
  {
    year: '2006-2012',
    title: '学前',
    company: '',
    description: '幼儿时期',
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
    title: 'Portfolio',
    description: '基于 Next.js 14、TypeScript 和 TailwindCSS 打造的现代响应式个人作品集网站，所有内容通过一个配置文件集中管理，无需改动任何组件代码即可轻松自定义。',
    image: '/projects/1.png',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/Iconkop/home.git',
    live: 'https://lcunt.cn',
  },
  {
    title: '项目二',
    description: '一款 AI 驱动的开发者工具，帮助程序员写出更好的代码，深度集成主流 IDE 与 CI/CD 流程。',
    image: '/projects/Portfolio.png',
    tags: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.example.com',
  },
  ]

// ========== 项目区块 ==========
export const projectsSection = {
  subtitle: '以下是我开发的一些精选项目——从 Web 应用到开发者工具。',
}

// ========== 我的网站 ==========
export const mySiteSection = {
  subtitle: 'A collection of my websites and projects.', // 区块副标题
}

export const mySite = [
  { name: '小辰云小栈', icon: 'https://xusue.com/favicon.ico', url: 'https://xusue.com', description: '个人博客' },
  { name: 'GitHub', icon: '', url: 'https://github.com', description: '开源项目' },
]

// ========== 联系方式 ==========
export const contact = {
  subtitle: '想一起合作，或者只是想打个招呼？欢迎通过以下任意方式联系我。',
  cta: '打个招呼',
}

// ========== 页脚 ==========
export const footer = {
  copyright: 'All rights reserved.',  // 版权声明后缀（前面会自动拼接年份和名字）
  icp: '',                             // 备案号（如需显示可填写，留空则不显示）
}