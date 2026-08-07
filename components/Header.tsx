import Link from "next/link";
import { cn, buttonBase, buttonVariants, buttonSizes } from "@/lib/utils";

const navLinkStyles = cn(
  buttonBase,
  buttonVariants.secondary,
  buttonSizes.default,
  "pixel-border"
);

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-3 py-3 sm:justify-between sm:px-4">
        <Link href="/" className="font-retro text-xs">
          Keanu Lagundimao
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-2">
          <Link href="/about" className={navLinkStyles}>
            About
          </Link>
          <Link href="/work" className={navLinkStyles}>
            Featured Work
          </Link>
          <Link href="/contact" className={navLinkStyles}>
            Contact
          </Link>
          <a href="/resume.pdf" download className={navLinkStyles}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
