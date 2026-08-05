'use client';

import { useState } from 'react';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

// Replace with your real email address.
const EMAIL = 'lagundimaokeanu@gmail.com';

export default function EmailCopy() {
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
      className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}
    >
      {copied ? 'Copied!' : 'Email'}
    </button>
  );
}
