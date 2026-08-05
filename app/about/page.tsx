import Image from 'next/image';
import Link from 'next/link';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

export default function About() {
  return (
    <article className="mx-auto max-w-xl px-4 py-16 text-center">
      <Link href="/" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
        ← Back to Home
      </Link>

      <Image
        src="/profile-placeholder.svg"
        alt="Profile placeholder"
        width={96}
        height={96}
        className="mx-auto mb-4 mt-6 h-24 w-24 rounded-full object-cover"
      />

      <h1 className="font-retro text-2xl sm:text-3xl">About Me</h1>

      <div className="mt-6 flex flex-col gap-4 text-left text-muted-foreground">
        <p>
          I'm an aspiring developer, currently working as a sushi chef. I'm learning to build web
          applications and exploring how AI tools fit into a modern development workflow.
        </p>
        <p>Replace this with more about your background, interests, and what you're looking for next.</p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <a href="#contact" className={cn(buttonBase, buttonVariants.secondary, buttonSizes.default)}>
          Get In Touch
        </a>
      </div>
    </article>
  );
}
