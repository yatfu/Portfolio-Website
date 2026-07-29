"use client";

import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Scene() {
  const splineRef = useRef();

  function onLoad(spline) {
    splineRef.current = spline;
  }

  function handleMouseMove(e) {
    if (!splineRef.current) return;

    const x =
      (e.clientX / window.innerWidth - 0.5) * 2;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 2;

    const camera = splineRef.current.findObjectByName(
      "Camera"
    );

    if (camera) {
      camera.rotation.y = x * 0.2;
      camera.rotation.x = -y * 0.2;
    }
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <Spline
        scene="https://prod.spline.design/8YMDyL-djdpB8GNA/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}