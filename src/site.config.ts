// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Haoran (Cris) Wang',
  role: 'Robotics researcher and mechanical engineering graduate student',
  email: 'hwang359@jh.edu',
  tagline: 'Robot manipulation, robot learning, dexterous manipulation, and embodied AI.',
  description:
    'Academic homepage of Haoran (Cris) Wang, a robotics researcher working on robot manipulation, robot learning, dexterous manipulation, and embodied AI.',
  status: 'M.S. Mechanical Engineering at Johns Hopkins University',
  social: [
    { label: 'GitHub', href: 'https://github.com/CrisWang6' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haoran-wang-30180b383' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/work' },
  { label: 'CV', href: '/cv' },
  { label: 'About', href: '/about' },
] as const;
