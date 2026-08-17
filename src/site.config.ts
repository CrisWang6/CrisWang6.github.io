// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Haoran (Cris) Wang',
  role: 'Robotics developer and mechanical engineering graduate student',
  email: 'hwang359@jh.edu',
  tagline: 'I build robotic systems that move between mechanical design, sensing, control, and embodied AI.',
  description:
    'Portfolio of Haoran Wang - robotics research, motion control, wearable sensing, vision-based pose estimation, and robot mechanism design.',
  status: 'M.S. Mechanical Engineering at Johns Hopkins University',
  social: [
    { label: 'GitHub', href: 'https://github.com/CrisWang6' },
    { label: 'Website', href: 'https://criswang6.github.io/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/work' },
  { label: 'CV', href: '/cv' },
  { label: 'About', href: '/about' },
] as const;
