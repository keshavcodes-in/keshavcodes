'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  FileText,
  Github,
  Mail,
  Send,
} from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { AuroraText } from '@/components/ui/aura-text';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const TerminalWindow = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
     setDisplayedLines([]);
    const lines = [
      '$ whoami',
      '> Full-stack Developer',
      '$ skills --list',
      '> React • Next.js • TypeScript',
      '> Node.js • PostgreSQL • Docker',
      '$ status',
      '> Active ✓',
    ];

    let index = 0;
    const timer = setInterval(() => {
      if (index < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="hidden lg:block w-full max-w-[360px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Terminal with subtle box effect in dark mode */}
      <div className="rounded-xl border border-neutral-200 bg-white/80 dark:border-neutral-700/40 dark:bg-neutral-900/70 backdrop-blur-xl shadow-sm dark:shadow-[0_0_25px_rgba(59,130,246,0.08)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800/50">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <span className="ml-2 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
            zsh
          </span>
        </div>
        <div className="p-4 font-mono text-[12px] space-y-1.5 h-[160px] overflow-hidden">
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className={line?.startsWith('$') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-neutral-600 dark:text-neutral-400 pl-3'}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AvatarWithStatus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mb-2 lg:mb-4"> {/* Reduced mobile spacing */}
      <motion.div
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border border-neutral-200 dark:border-neutral-800 p-1 bg-white dark:bg-neutral-900 shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Image 
            src="/assets/avatar.png" 
            alt="Keshav" 
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>
      <div
        className="absolute bottom-4 right-4 z-20 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-neutral-950"></span>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-6 bottom-0 whitespace-nowrap bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-xl"
            >
              AVAILABLE FOR WORK
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Hero() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('developerkeshav200@gmail.com');
    toast.success('Email copied!');
  };

  const socials = [
    { name: 'GitHub', icon: <Github size={22} />, link: 'https://github.com/keshavcodes-in' },
    { name: 'X', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, link: 'https://x.com/heyKeshavCodes' },
    { name: 'Email', icon: <Mail size={22} />, onClick: copyToClipboard },
  ];

  return (
    <TooltipProvider>
      <section className="w-full max-w-5xl mx-auto py-6 lg:py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                <span className="whitespace-nowrap inline-flex items-center">
                  Hi, I&apos;m <span className="ml-2"><AuroraText>Keshav</AuroraText></span>
                  <motion.span
                    className="inline-block ml-3 origin-bottom-right"
                    animate={{ rotate: [0, 15, -10, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  >
                    👋🏻
                  </motion.span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                Building modern web applications from design to deployment, dedicated to quality and user experience.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-center lg:justify-start">
              {/* Resume Button with Shimmer */}
              <Link
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[145px] sm:w-[160px] flex items-center justify-center gap-2 px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/40 text-neutral-800 dark:text-neutral-200 font-semibold rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all text-sm sm:text-base shadow-sm overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent" />
                <FileText size={18} className="relative z-10" /> 
                <span className="relative z-10">Resume</span>
              </Link>

              {/* Message Button with Shimmer */}
              <Link
                href="/contact"
                className="group relative w-[145px] sm:w-[160px] flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm sm:text-base active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <Send size={18} className="relative z-10" /> 
                <span className="relative z-10">Message</span>
              </Link>
            </div>

            <div className="pt-2 lg:pt-4 space-y-6">
              <Link
                href="https://cal.com/keshav-codes/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-md font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center lg:justify-start gap-2"
              >
                <Calendar size={20} className="text-blue-500" /> Schedule a Call
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <div className="flex gap-6 justify-center lg:justify-start items-center">
                {socials.map((social, i) => (
                  <Tooltip key={i} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={social.onClick || (() => window.open(social.link, '_blank', 'noopener,noreferrer'))}
                        className="cursor-pointer text-neutral-500 hover:text-blue-600 dark:hover:text-white transition-all transform hover:scale-110 active:scale-90"
                      >
                        {social.icon}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs font-semibold">
                      {social.name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end order-1 lg:order-2">
            <AvatarWithStatus />
            <TerminalWindow />
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
