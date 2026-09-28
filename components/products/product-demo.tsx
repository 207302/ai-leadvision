export function ProductDemo({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={encodeURI(src)}
      title={`${title} demo`}
      loading="lazy"
      className="aspect-video w-full border-0 bg-[#7FA3BC]"
    />
  );
}
