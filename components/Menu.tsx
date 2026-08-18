import type { ReactNode } from "react";
import Link from "next/link";
import MenuEmailCopy from "@/components/MenuEmailCopy";
import { projects } from "@/data/featuredWork";
import { additionalProjects } from "@/data/additionalProjects";

type MenuCategoryProps = {
  title: string;
  children: ReactNode;
};

function MenuCategory({ title, children }: MenuCategoryProps) {
  return (
    <div>
      <h2 className="font-retro text-lg">{title}</h2>
      <div className="mb-4 mt-2 h-[3px] bg-muted" />
      <ul className="flex flex-col gap-1">{children}</ul>
    </div>
  );
}

type MenuRowProps = {
  link: string;
  title: string;
  description?: string;
  external?: boolean;
  download?: boolean;
};

function MenuRow({
  link,
  title,
  description,
  external,
  download,
}: MenuRowProps) {
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
      <section className="menu-panel pixel-border bg-[#2a150e] p-6 sm:p-8">
        <h1 className="mb-8 text-center font-retro text-xl">Menu</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
              <MenuEmailCopy />
            </li>
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
          </MenuCategory>

          <MenuCategory title="Resume / About">
            <li>
              <MenuRow link="/about" title="About Me" />
            </li>
            <li>
              <MenuRow link="/resume.pdf" title="Resume" external download />
            </li>
          </MenuCategory>
        </div>
      </section>

    </article>
  );
}
