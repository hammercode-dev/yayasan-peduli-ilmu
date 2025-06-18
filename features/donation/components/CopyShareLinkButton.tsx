'use client';

import { Share2, Check } from 'lucide-react';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CopyShareLinkButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const handleCopy = async () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const url = `${origin}/${pathname}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full bg-accent-800 hover:bg-accent-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center relative"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-2 text-white" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4 mr-2" />
          {title}
        </>
      )}
    </button>
  );
}
