"use client"

import { useEffect, useRef, useState } from "react";

export default function ScrollAudio() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = 1;
    
    // Requires user interaction in most browsers
    // audio.play();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 800;

      const volume = Math.max(
        0,
        1 - scrollY / fadeDistance
      );

      audio.volume = volume;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/ambient.mp3"
        loop
      />

      <button onClick={toggleMute}>
        {muted ? "Unmute" : "Mute"}
      </button>
    </>
  );
}