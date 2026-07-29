import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ScrollAudio from '@/components/ScrollAudio';
import { cn, buttonBase, buttonVariants, buttonSizes, cardStyles } from '@/lib/utils';
export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollAudio />
      <section id="intro" className="mx-auto max-w-xl px-4 py-16 text-center">
        <Image
          src="/profile-placeholder.svg"
          alt="Profile placeholder"
          width={96}
          height={96}
          className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
        />
        <p className="text-sm text-muted-foreground">Hi, I'm</p>
        <h1 className="mt-2 font-retro text-2xl sm:text-3xl">Keanu Lagundimao</h1>
        <p className="mt-4 text-muted-foreground">
          I'm an aspiring developer, currently sushi chef.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <Link href="/projects" className={cn(buttonBase, buttonVariants.default, buttonSizes.default)}>
            View My Work
          </Link>
          <a href="#contact" className={cn(buttonBase, buttonVariants.secondary, buttonSizes.default)}>
            Get In Touch
          </a>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="mb-3 font-retro text-base">Featured Work</h2>
        <div className={cardStyles}>
          <p className="text-sm text-muted-foreground">
            <Link href="/projects" className="text-foreground underline underline-offset-2">
              View all featured work
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
