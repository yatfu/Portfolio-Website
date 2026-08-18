'use client';

import { useState } from 'react';

const EMAIL = 'lagundimaokeanu@gmail.com';

export default function MenuEmailCopy() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable or permission denied — nothing to do.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full flex-col gap-0.5 border-0 bg-transparent py-4 text-left text-sm text-foreground transition-colors hover:text-muted-foreground"
    >
      <span className="flex items-baseline gap-2">
        <span className="font-retro text-[#f3c459]">{copied ? 'Copied!' : 'Email'}</span>
        <span className="mb-1 flex-1 border-b border-dotted border-muted" />
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}
