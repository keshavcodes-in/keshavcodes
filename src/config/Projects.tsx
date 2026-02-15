// import Bun from '@/components/technologies/Bun';
// import ExpressJs from '@/components/technologies/ExpressJs';
// import Github from '@/components/technologies/Github';
// import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
// import Motion from '@/components/technologies/Motion';
// import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import NpmIcon from '@/components/technologies/NpmIcon';
// import PostgreSQL from '@/components/technologies/PostgreSQL';
// import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
// import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
// import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  
  {
    title: 'FocusBolt',
    description:
      'Smart Pomodoro timer with ambient music, smart notifications, beautiful themes, and deep work analytics to help you stay focused.',
    image: '/project/focus-bolt.png',
    video:
      'https://ik.imagekit.io/jzry83ljs/focusbolt_demovideo.mp4?updatedAt=1759599474035',
    link: 'https://focusbolt.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/keshavcodes-in/focusbolt',
    live: 'https://focusbolt.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/focusbolt',
    isWorking: true, // Beta version - actively maintained
  },

  {
  title: 'MuseumMitra',
  description: 'Smart museum ticketing with chatbot AI, PayPal payments, QR verification, and role-based dashboards for admins, staff, and visitors.',
  image: '/project/museummitra.png',
  video: 'https://ik.imagekit.io/jzry83ljs/museummitrademo.mp4',
  link: 'https://museum-mitra.vercel.app/',
  technologies: [
    { name: 'React', icon: <ReactIcon key="react" /> },
    { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },

    { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  ],
  live: 'https://museummitra.vercel.app/',
  details: true,
  projectDetailsPageSlug: '/projects/museummitra',
  isWorking: true,
}
,
  {
    title: 'Graphit',
    description:
      'A dynamic platform for uploading and analyzing CSV or JSON datasets with seamless chart visualizations.',
    image: '/project/graphit.png',
    video: 'https://ik.imagekit.io/jzry83ljs/graphit_video.mp4',
    link: 'https://graphit-eta.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
    ],
    github: 'https://github.com/keshavcodes-in/Graphit',
    live: 'https://graphit-eta.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/graphit',
    isWorking: true,
  },
  {
    title: 'AutoSuggestion Kit',
    description:
      'A lightweight, and customizable React autosuggestion component available as an npm package.',
    image: '/project/npm-kit.png',
    video: 'https://ik.imagekit.io/jzry83ljs/npm_video.mp4',
    link: 'https://github.com/keshavcodes-in/autosuggestion-kit/blob/main/README.md',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'npm', icon: <NpmIcon key="npm" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/keshavcodes-in/autosuggestion-kit',
    details: true,
    projectDetailsPageSlug: '/projects/npm-kit',
    isWorking: true,
  },

  
];
