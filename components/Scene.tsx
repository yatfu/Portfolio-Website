'use client';

import Spline from '@splinetool/react-spline';
import type { Application, SPEObject } from '@splinetool/runtime';
import { useRef } from 'react';

export default function Scene() {
  const splineRef = useRef<Application | null>(null);
  const cameraRef = useRef<SPEObject | null>(null);
  const baseRotation = useRef({ x: 0, y: 0 });

  function onLoad(spline: Application) {
    splineRef.current = spline;

    const camera = spline.findObjectByName('Camera');
    if (camera) {
      cameraRef.current = camera;
      baseRotation.current = { x: camera.rotation.x, y: camera.rotation.y };
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const camera = cameraRef.current;
    if (!camera) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    camera.rotation.y = baseRotation.current.y + -x * 0.15;
    camera.rotation.x = baseRotation.current.x + -y * 0.;
  }

  return (
    <div onMouseMove={handleMouseMove} className="h-full w-full">
      <Spline scene="https://prod.spline.design/8YMDyL-djdpB8GNA/scene.splinecode" onLoad={onLoad} />
    </div>
  );
}
