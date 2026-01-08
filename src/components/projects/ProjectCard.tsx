'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = () => {
    router.push(project.projectDetailsPageSlug);
  };

  // Memoizing to ensure stable references for Tooltip triggers
  const visibleTechs = useMemo(() => 
    project.technologies.slice(0, 5), 
    [project.technologies]
  );

  return (
    <div className="group relative h-full flex transition-all duration-500 ease-out hover:-translate-y-1.5">
      <div className="relative flex h-full flex-col w-full">
        <Card className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-neutral-200/80 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-500 group-hover:border-neutral-300 group-hover:shadow-2xl dark:border-neutral-700 dark:bg-neutral-950/70 dark:group-hover:border-neutral-600">
          
          {/* Media Section */}
          <div className="p-3 pb-0 relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {project.video && (
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <div className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex size-14 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                        <PlayCircle
                          className="size-8 text-neutral-900"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full p-2 border-0 bg-black/95 backdrop-blur-xl">
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <video
                        className="h-full w-full object-cover"
                        src={project.video}
                        autoPlay
                        loop
                        controls
                      />
                    </div>
                    <DialogTitle className="sr-only">
                      {project.title}
                    </DialogTitle>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          {/* Main Card Content Body */}
          <div
            onClick={handleCardClick}
            className="flex flex-col flex-grow cursor-pointer outline-none"
          >
            <CardContent className="relative z-10 flex flex-grow flex-col p-5 sm:px-7 sm:pb-7 sm:pt-4">
              {/* Top Bar: Live Status & Divider */}
              <div className="mb-3 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    {project.isWorking && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                        project.isWorking ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                    {project.isWorking ? 'Live' : 'Progress'}
                  </span>
                </div>
                <div className="h-[1px] flex-grow bg-neutral-100 dark:bg-neutral-800" />
              </div>

              {/* Header: Title and Action Icons */}
              <div className="flex items-start justify-between ">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1 shrink-0 relative z-20 pt-0.5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex size-8 items-center justify-center text-neutral-400 hover:text-blue-500 transition-all hover:scale-110 active:scale-95"
                      >
                        <Website className="size-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Live Site</TooltipContent>
                  </Tooltip>

                  {project.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex size-8 items-center justify-center text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95"
                        >
                          <Github className="size-6" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>View Code</TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>

              <p className="mb-6 line-clamp-3 text-md leading-relaxed tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>

              {/* Footer: Tech Stack Icons */}
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {visibleTechs.map((tech, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <div className="size-5 transition-transform hover:scale-120 hover:brightness-110 grayscale-[0.2] hover:grayscale-0">
                          {tech.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="text-[11px] font-bold uppercase tracking-wider">
                        {tech.name}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[11px] font-bold text-neutral-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}