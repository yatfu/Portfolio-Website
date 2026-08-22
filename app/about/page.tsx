import Image from 'next/image';
import Link from 'next/link';
import ContactLinks from '@/components/ContactLinks';
import { cn, buttonBase, buttonVariants, buttonSizes } from '@/lib/utils';

export default function About() {
  return (
    <article className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="font-retro text-2xl sm:text-3xl">About Me</h1>

      <div className="mt-6 flex flex-col gap-4 text-left text-muted-foreground">
        <p>Hi! My name is Keanu, I currently work as a sushi chef at Doraku Izakaya. I worked in the restaurant industry for over a decade and I'm transitioning into software development. </p>
        <Image
        src="/portraitWithAward.jpg"
        alt="Profile placeholder"
        width={300}
        height={300}
        className="mx-auto mb-4 h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72"
      />
        <p>I love working in the sushi bar. However, I plan on having kids in the future, and I don't want my work schedule to impede my ability to be with my family.</p>
        <p>I mainly build web applications, APIs, and services with React (Next) and PostgreSQL. I am also familiar with Express, MongoDB, and Node.js. </p>
        <p>In school I studied machine learning, big data analytics, and statistics, gaining experience with Python and data science libraries.</p>
        <p>Currently I am diving deeper into scaling, optimization, and reliability, with a particular focus on building and operating production systems on AWS.</p>
        <p>My favorite part about development is the iterative process: first making it work, then refining and optimizing, a process that is also used in a culinary environment where you do the same thing every day. </p>
        <img src="/raptor.jpeg"></img>
        <p>Although primarily a web dev, I am open to all types of software development. </p>
        <p> Outside of coding I enjoy exploring different creative pursuits. My favorite forms of expression are cooking and 3D modeling. </p>

        <video
  src="/heavenandhell.mov"
  autoPlay
  muted
  loop
  className="w-full"
>
</video>
      </div>

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
