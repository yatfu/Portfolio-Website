# Homepage "Featured Work" section (archived)

Removed from `app/page.tsx` (the homepage). This exact content lives on and is
still maintained at [`/work`](../app/work/page.tsx) — this file is kept only as
a reference snapshot of what used to render inline on the homepage, in case
it's wanted there again later.

```tsx
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/featuredWork';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

const featuredProjects = projects.filter((project) => project.featured !== false);

// ...inside the page component's JSX, as a sibling of the #intro section:

<section id="work" className="mx-auto max-w-6xl px-4 py-16">
  <h2 className="mb-6 font-retro text-base">Featured Work</h2>
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

  <div className="mt-6 flex justify-center">
    <Link href="/work#other-projects" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
      Other Projects →
    </Link>
  </div>
</section>
```
