import Github from '@/components/svgs/Github';
import Mail from '@/components/svgs/Mail';



export const heroConfig = {
  // Personal Information
  name: 'Keshav',
  title: 'Full Stack web developer.',
  avatar: '/assets/avatar.png',
// Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Bun',
      href: 'https://bun.sh/',
      component: 'Bun',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [

  {
    name: 'Github',
    href: 'https://github.com/keshavcodes-in',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:developerkeshav200@gmail.com',
    icon: <Mail />,
    
  },
];
