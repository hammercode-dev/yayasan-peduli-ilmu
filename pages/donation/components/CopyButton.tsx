'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react';

type CopyButtonProps = {
  value: string;
};

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  };

  return (
    <button
      onClick={handleCopy}
      className="relative p-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
    >
      <Copy className="h-4 w-4" />
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md z-10">
          Copied!
        </span>
      )}
    </button>
  );
}
