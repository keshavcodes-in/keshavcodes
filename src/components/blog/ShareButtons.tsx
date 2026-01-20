'use client';

import { Button } from '@/components/ui/button';
import { Copy, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { toast } from 'sonner';

interface ShareButtonsProps {
  title: string;
}

async function safeCopyToClipboard(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
  } catch (err) {
    console.error('Clipboard copy failed', err);
    throw err;
  }
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [mounted, setMounted] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setMounted(true);
    setUrl(window.location.href);
  }, []);

  if (!mounted) return null;

  const handleCopy = async () => {
    try {
      await safeCopyToClipboard(url);
      toast.success('Link copied to clipboard');
    } catch {
      toast.error('Could not copy link');
    }
  };

  const shareOnTwitter = () => {
    const text = `${title} – ${url}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      '_blank',
    );
  };

  const shareOnLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url,
      )}`,
      '_blank',
    );
  };

  return (
    <section className="mt-12 border-t border-border/40 pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: text */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
            <Share2 className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-medium">Loved this post?</p>
            <p className="text-sm text-muted-foreground">
              Share it with your network.
            </p>
          </div>
        </div>

        {/* Right: buttons */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="col-span-2 sm:col-auto justify-center gap-2 sm:min-w-[130px] cursor-pointer"
          >
            <Copy className="h-4 w-4" />
            <span className="whitespace-nowrap">Copy link</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={shareOnTwitter}
            className="justify-center gap-2 sm:min-w-[130px] cursor-pointer"
          >
            <FaXTwitter className="h-4 w-4" />
            <span>Twitter</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={shareOnLinkedin}
            className="justify-center gap-2 sm:min-w-[130px] cursor-pointer"
          >
            <FaLinkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
