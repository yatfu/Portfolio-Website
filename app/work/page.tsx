import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/featuredWork';
import { additionalWork } from '@/data/additionalWork';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

export default function Work() {
  const featuredProjects = projects.filter((project) => project.featured !== false);
  const otherProjects = projects.filter((project) => project.featured === false);

  return (
    <article className="mx-auto max-w-6xl px-4 py-16">
      <section id="work">
        <h1 className="mb-6 font-retro text-xl">Featured Work</h1>
        <div className="grid grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="group">
              <h3 className="mb-2 font-retro text-sm">{project.title}</h3>
              <div className="pixel-border relative aspect-square overflow-hidden bg-muted">
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
            </div>
          ))}
        </div>

      </section>

      <section id="additional-work" className="mt-16">
        <h2 className="mb-6 font-retro text-base">Additional Work</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {additionalWork.map((item) => (
            <article
              key={item.title}
              className={cn(
                buttonBase,
                'pixel-border min-h-40 w-full flex-col items-start justify-start bg-secondary p-4 text-left text-secondary-foreground'
              )}
            >
              <h3 className="text-sm leading-relaxed">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {item.tags.map((tag) => (
                  <li
                    key={tag.label}
                    className={cn(buttonBase, buttonSizes.sm, tag.color ?? 'bg-muted', 'text-foreground')}
                  >
                    {tag.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="other-projects" className="mt-16">
        <h2 className="mb-6 font-retro text-base">Other Projects</h2>

        <div className="grid grid-cols-2 gap-4">
            {otherProjects.map((project) => (
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
              </div>
            ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <Link href="/" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
