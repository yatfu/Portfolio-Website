import EmailCopy from "@/components/EmailCopy";
import { cn, buttonBase, buttonVariants, buttonSizes } from "@/lib/utils";

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <EmailCopy />
      <a
        href="https://github.com/yatfu"
        target="_blank"
        rel="noreferrer"
        className={cn(buttonBase, buttonVariants.ghost, buttonSizes.default)}
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noreferrer"
        className={cn(buttonBase, buttonVariants.ghost, buttonSizes.default)}
      >
        LinkedIn
      </a>
    </div>
  );
}
