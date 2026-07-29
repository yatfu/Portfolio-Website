import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// merges/dedupes tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// shared container styling (rows, cards, form panels)
export const cardStyles = 'bg-card px-4 py-4';

// shared plain-html button styling
export const buttonBase =
  'inline-flex items-center justify-center gap-1 font-retro text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

export const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
  ghost: 'hover:bg-muted hover:text-foreground',
};

export const buttonSizes = {
  default: 'h-9 px-3',
  sm: 'h-8 px-2.5',
};
