import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { projects } from '@/data/projects';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

export default function Home() {
  return (
    <div>
      <Hero />
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
          <Link href="#work" className={cn(buttonBase, buttonVariants.default, buttonSizes.default)}>
            View My Work
          </Link>
          <a href="#contact" className={cn(buttonBase, buttonVariants.secondary, buttonSizes.default)}>
            Get In Touch
          </a>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 font-retro text-base">Featured Work</h2>
        <div className="grid grid-cols-2 gap-1">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              {project.coverImage ? (
                <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
              ) : (
                <span className="flex h-full w-full items-center justify-center p-2 text-center text-sm text-muted-foreground">
                  {project.title}
                </span>
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-background p-2 text-center text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {project.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
