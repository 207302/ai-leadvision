"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function ProductDemo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  if (!src.endsWith(".mp4")) {
    return (
      <iframe
        src={encodeURI(src)}
        title={`${title} demo`}
        loading="lazy"
        className="aspect-video w-full border-0 bg-paper"
      />
    );
  }

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={encodeURI(src)}
        title={`${title} demo`}
        aria-label={paused ? `Play ${title} demo` : `Pause ${title} demo`}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        tabIndex={0}
        onClick={togglePlayback}
        onKeyDown={(event) => {
          if (event.key !== " " && event.key !== "Enter") return;
          event.preventDefault();
          togglePlayback();
        }}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className="aspect-video w-full cursor-pointer bg-navy object-cover"
      />
      {paused ? (
        <button
          type="button"
          aria-pressed={muted}
          aria-label={muted ? `Unmute ${title} demo` : `Mute ${title} demo`}
          onClick={(event) => {
            event.stopPropagation();
            setMuted((value) => !value);
          }}
          className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_10px_28px_rgba(18,24,38,0.16)]"
        >
          {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
        </button>
      ) : null}
    </div>
  );
}
