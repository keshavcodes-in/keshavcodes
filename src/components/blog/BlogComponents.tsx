import Image from 'next/image';
import React from 'react';

import { CodeCopyButton } from './CodeCopyButton';

export const BlogComponents = {
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={450}
      className="rounded-lg my-8"
      {...props}
    />
  ),
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1 className="mb-6 mt-10 text-3xl sm:text-4xl font-bold leading-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2 className="mb-4 mt-10 text-2xl sm:text-3xl font-bold leading-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3 className="mb-3 mt-8 text-xl sm:text-2xl font-semibold leading-snug" {...props}>
      {children}
    </h3>
  ),
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="mb-6 text-base sm:text-lg leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul className="mb-6 ml-2 text-base sm:text-lg list-disc space-y-3" {...props}>
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol className="mb-6 ml-2 text-base sm:text-lg list-decimal space-y-3" {...props}>
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return String(node);
      if (React.isValidElement(node) && node.props && typeof node.props === 'object') {
        return getTextContent((node.props as { children?: React.ReactNode }).children);
      }
      if (Array.isArray(node)) return node.map(getTextContent).join('');
      return '';
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative my-6">
        <pre
          className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed [&>code]:bg-transparent [&>code]:p-0"
          {...props}
        >
          {children}
        </pre>
        <CodeCopyButton code={codeText} />
      </div>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    if (className?.includes('language-')) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code 
        className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono border border-border/40" 
        {...props}
      >
        {children}
      </code>
    );
  },
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="my-6 border-l-4 border-primary/50 pl-6 italic text-muted-foreground bg-muted/30 py-4 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href?: string;
    [key: string]: unknown;
  }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  hr: (props: { [key: string]: unknown }) => (
    <hr className="my-10 border-border/40" {...props} />
  ),
};
