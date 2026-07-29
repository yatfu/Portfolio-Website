import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 font-retro text-xl">Featured Work</h1>
      <div className="grid grid-cols-3 gap-1">
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
  );
}
