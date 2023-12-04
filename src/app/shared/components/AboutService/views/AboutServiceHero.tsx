import Image from 'next/image';

interface AboutServiceHeroProps {
  src: string;
  alt: string;
}

export function AboutServiceHero({ src, alt }: AboutServiceHeroProps) {
  return <Image className="pointer-events-none py-12 w-full h-full" src={src} alt={alt} />;
}
