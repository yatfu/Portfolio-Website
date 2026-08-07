import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/featuredWork';
import { additionalProjects } from '@/data/additionalProjects';
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

      <section id="additional-projects" className="mt-16">
        <h2 className="mb-6 font-retro text-base">Additional Projects</h2>

        {additionalProjects.length === 0 ? (
          <p className="text-muted-foreground">No additional projects yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {additionalProjects.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {item.coverImage && (
                    <Image src={item.coverImage} alt={item.title} fill className="object-cover" />
                  )}
                </div>

                <h3 className="mt-2 font-retro text-sm">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>

                {item.tags.length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
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
        )}
      </section>

      <section id="other-projects" className="mt-16">
        <h2 className="mb-6 font-retro text-base">Other Projects</h2>

        {otherProjects.length === 0 ? (
          <p className="text-muted-foreground">No other projects yet — check back soon.</p>
        ) : (
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
        )}
      </section>

      <div className="mt-10 flex justify-center">
        <Link href="/" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
