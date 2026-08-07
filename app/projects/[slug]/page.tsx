import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/featuredWork';
import { cn, buttonBase, buttonVariants, buttonSizes, cardStyles } from '@/lib/utils';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-retro text-xl">{project.title}</h1>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag.label} className={cn(buttonBase, buttonSizes.sm, tag.color ?? 'bg-muted', 'text-foreground')}>
            {tag.label}
          </li>
        ))}
      </ul>

      
      <div className="mt-6 flex gap-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonBase, buttonVariants.default, buttonSizes.default)}
          >
            Live Site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonBase, buttonVariants.secondary, buttonSizes.default)}
          >
            Source Code
          </a>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {project.sections.map((section) => (
          <section key={section.title} className={cardStyles}>
            <h2 className="mb-2 font-retro text-sm">{section.title}</h2>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {section.blocks.map((block, i) => {
                if (block.type === 'paragraph') {
                  return <p key={i}>{block.text}</p>;
                }
                if (block.type === 'image') {
                  return (
                    <figure key={i}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- unknown aspect ratio; let it size naturally instead of cropping via next/image's fill mode */}
                      <img src={block.src} alt={block.alt} className="w-full" />
                      {block.description && (
                        <figcaption className="mt-1.5 text-xs text-muted-foreground">{block.description}</figcaption>
                      )}
                    </figure>
                  );
                }
                return (
                  <video key={i} src={block.src} poster={block.poster} controls className="w-full">
                    Your browser doesn&apos;t support embedded video.
                  </video>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/work" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
          ← Back to Featured Work
        </Link>
      </div>
    </article>
  );
}
