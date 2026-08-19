import Link from 'next/link';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import ContactLinks from '@/components/ContactLinks';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="intro" className="mx-auto max-w-xl px-4 py-16 text-center">
        <p className="text-sm text-muted-foreground">Hi, I'm</p>
        <h1 className="mt-2 font-retro text-2xl sm:text-3xl">Keanu Lagundimao</h1>
        <p className="mt-4 text-muted-foreground">
          I'm an aspiring developer, currently sushi chef.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <Link href="/about" className={cn(buttonBase, buttonVariants.default, buttonSizes.default)}>
            Learn More About Me :)
          </Link>
        </div>
      </section>
      <Menu />
    </div>
  );
}
