export function ProductDemo({ src, title }: { src: string; title: string }) {
  if (src.endsWith(".mp4")) {
    return (
      <video
        src={encodeURI(src)}
        title={`${title} demo`}
        aria-label={`${title} demo`}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        className="aspect-video w-full bg-navy object-cover"
      />
    );
  }

  return (
    <iframe
      src={encodeURI(src)}
      title={`${title} demo`}
      loading="lazy"
      className="aspect-video w-full border-0 bg-paper"
    />
  );
}
