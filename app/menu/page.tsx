import type { ReactNode } from "react";
import Link from "next/link";
import EmailCopy from "@/components/EmailCopy";
import { projects } from "@/data/featuredWork";
import { additionalProjects } from "@/data/additionalProjects";
import { cn, buttonBase, buttonVariants, buttonSizes } from "@/lib/utils";

function MenuCategory({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-retro text-lg">{title}</h2>
      <div className="mb-4 mt-2 h-[3px] bg-muted" />
      <ul className="flex flex-col gap-1">{children}</ul>
    </div>
  );
}

function MenuRow({
  link,
  title,
  description,
  external,
  download,
}: {
  link: string;
  title: string;
  description?: string;
  external?: boolean;
  download?: boolean;
}) {
  const className =
    "group flex flex-col gap-0.5 py-4 text-sm text-foreground transition-colors hover:text-muted-foreground";
  const content = (
    <>
      <span className="flex items-baseline gap-2">
        <span className="font-retro text-[#f3c459]">{title}</span>
        <span className="mb-1 flex-1 border-b border-dotted border-muted" />
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </span>
      {description && <span className="text-m text-white">{description}</span>}
    </>
  );

  if (external) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        download={download}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link} className={className}>
      {content}
    </Link>
  );
}

export default function Menu() {
  const featuredProjects = projects.filter(
    (project) => project.featured !== false
  );

  return (
    <article className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Experimental
        </p>
        <h1 className="mt-2 font-retro text-2xl sm:text-3xl">The Menu</h1>
        <p className="mt-3 text-muted-foreground">Pick a course.</p>
      </div>

      <div>
        <div className="pixel-border grid grid-cols-1 gap-8 bg-[#300b03] p-6 sm:grid-cols-2 sm:p-8">
          <MenuCategory title="Featured Work">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <MenuRow
                  link={`/projects/${project.slug}`}
                  title={project.title}
                  description={project.summary}
                />
              </li>
            ))}
          </MenuCategory>

          <MenuCategory title="Additional Projects">
            {additionalProjects.length === 0 ? (
              <li className="py-1.5 text-sm text-muted-foreground">
                Nothing plated yet.
              </li>
            ) : (
              additionalProjects.map((item) => (
                <li key={item.title}>
                  <MenuRow
                    link="/work#additional-projects"
                    title={item.title}
                    description={item.summary}
                  />
                </li>
              ))
            )}
          </MenuCategory>

          <MenuCategory title="Contact Info">
            <li>
              <MenuRow
                link="https://github.com/yatfu"
                title="GitHub"
                external
              />
            </li>
            <li>
              <MenuRow
                link="https://linkedin.com/in/your-profile"
                title="LinkedIn"
                external
              />
            </li>
            <li className="py-1.5">
              <EmailCopy />
            </li>
          </MenuCategory>

          <MenuCategory title="Resume / About">
            <li>
              <MenuRow
                link="/about"
                title="About Me"
              />
            </li>
            <li>
              <MenuRow
                link="/resume.pdf"
                title="Resume"
                external
                download
              />
            </li>
          </MenuCategory>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}
        >
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
