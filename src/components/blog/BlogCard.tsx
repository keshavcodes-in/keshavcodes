'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BlogPostPreview } from '@/types/blog';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useMemo } from 'react';

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, image, tags, date } = frontmatter;

  // Memoize date formatting to prevent unnecessary calculations
  const formattedDate = useMemo(() => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, [date]);

  return (
    <div className="group relative h-full flex transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01]">
      <Link href={`/blog/${slug}`} className="block w-full outline-none">
        <Card className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-neutral-200/80 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-950/70 dark:group-hover:border-neutral-600">
          
          {/* Media Section */}
          <div className="p-3 pb-0">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <CardContent className="relative z-10 flex flex-grow flex-col p-5 sm:px-7 sm:pb-7 sm:pt-4">
            {/* Date Bar */}
            <div className="mb-3 flex items-center gap-3">
              <time className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                {formattedDate}
              </time>
              <div className="h-[1px] flex-grow bg-neutral-100 dark:bg-neutral-800" />
            </div>

            {/* Title */}
            <h3 className="mb-3 line-clamp-2 min-h-[3.5rem] text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {title}
            </h3>

            {/* Description */}
            <p className="mb-6 line-clamp-3 text-md leading-relaxed tracking-tight text-neutral-500 dark:text-neutral-400">
              {description}
            </p>

            {/* Footer Tags */}
            <div className="mt-auto flex items-center justify-between overflow-hidden">
              <div className="flex flex-nowrap gap-2 overflow-hidden">
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap rounded-full border border-neutral-200/50 bg-neutral-50/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:border-neutral-800/50 dark:bg-neutral-900/50 dark:text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}