import Link from 'next/link';
import ContactLinks from '@/components/ContactLinks';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

export default function Contact() {
  return (
    <article className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="font-retro text-2xl sm:text-3xl">Get In Touch</h1>

      <div className="mt-6">
        <ContactLinks />
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/" className={cn(buttonBase, buttonVariants.ghost, buttonSizes.sm)}>
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
