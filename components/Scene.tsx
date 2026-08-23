'use client';

import Spline from '@splinetool/react-spline';
import type { Application, SPEObject } from '@splinetool/runtime';
import { useRef, useState } from 'react';

export default function Scene() {
  const splineRef = useRef<Application | null>(null);
  const cameraRef = useRef<SPEObject | null>(null);
  const baseRotation = useRef({ x: 0, y: 0 });

  const [loading, setLoading] = useState(true);

  function onLoad(spline: Application) {
    splineRef.current = spline;

    const camera = spline.findObjectByName('Camera');

    if (camera) {
      cameraRef.current = camera;
      baseRotation.current = {
        x: camera.rotation.x,
        y: camera.rotation.y,
      };
    }

    // Spline has finished loading
    setLoading(false);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const camera = cameraRef.current;
    if (!camera) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    camera.rotation.y = baseRotation.current.y + -x * 0.15;
    camera.rotation.x = baseRotation.current.x + -y * 0.15;
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-full w-full"
    >
      {/* Loading Screen */}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" />
        </div>
      )}

      {/* Spline Scene */}
      <Spline
        scene="https://prod.spline.design/8YMDyL-djdpB8GNA/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}