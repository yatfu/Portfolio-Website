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
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-retro text-xs">
          Keanu Lagundimao
        </Link>
        <nav className="flex items-center gap-2">
          <a href="#about" className={navLinkStyles}>
            About
          </a>
          <Link href="/#work" className={navLinkStyles}>
            Featured Work
          </Link>
          <a href="#contact" className={navLinkStyles}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
