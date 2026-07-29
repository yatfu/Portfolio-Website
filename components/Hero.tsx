'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

// Replace with your own exported Spline scene URL,
// e.g. https://prod.spline.design/XXXXXXXXXXXXXXXX/scene.splinecode
const SPLINE_SCENE_URL = 'https://prod.spline.design/8YMDyL-djdpB8GNA/scene.splinecode';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={SPLINE_SCENE_URL} className="h-full w-full" />
      </div>

      <a
        href="#intro"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
