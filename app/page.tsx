import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import EmailCopy from '@/components/EmailCopy';
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
          <Link href="/about" className={cn(buttonBase, buttonVariants.default, buttonSizes.default)}>
            Learn More About Me :)
          </Link>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          <a
            href="https://github.com/yatfu"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}
          >
            LinkedIn
          </a>
          <EmailCopy />
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-6 font-retro text-base">Featured Work</h2>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.slug} className="group">
              <h3 className="mb-2 font-retro text-sm">{project.title}</h3>
              <div className="relative aspect-square overflow-hidden bg-muted">
                {project.coverImage && (
                  <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
                )}

                <div className="pointer-events-none absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-3 bg-background p-4 text-center transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <p className="text-sm text-muted-foreground">{project.summary || project.title}</p>

                  {(project.liveUrl || project.repoUrl) && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(buttonBase, buttonVariants.secondary, buttonSizes.sm, 'focus-visible:ring-0')}
                        >
                          Live Site
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(buttonBase, buttonVariants.secondary, buttonSizes.sm)}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className={cn(buttonBase, buttonVariants.default, buttonSizes.sm)}
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {project.tags.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag.label}
                      className={cn(buttonBase, buttonSizes.sm, tag.color ?? 'bg-muted', 'text-foreground')}
                    >
                      {tag.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
