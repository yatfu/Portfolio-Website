import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
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
      <Link href="/projects" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
        ← Back to Featured Work
      </Link>

      <h1 className="mt-4 font-retro text-xl">{project.title}</h1>

      {project.coverImage && (
        <div className={cn(cardStyles, 'relative mt-6 aspect-video w-full')}>
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
        </div>
      )}

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {tag}
          </li>
        ))}
      </ul>

      <p className={cn(cardStyles, 'mt-6 text-sm text-muted-foreground')}>{project.content}</p>

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
    </article>
  );
}
