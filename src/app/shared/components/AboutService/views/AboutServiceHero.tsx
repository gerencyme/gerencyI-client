import Image from 'next/image';
import { aboutServiceHeroTv } from '../AboutServiceTV';

interface AboutServiceHeroProps {
  src: string;
  alt: string;
}

export function AboutServiceHero({ src, alt }: AboutServiceHeroProps) {
  return <Image className={aboutServiceHeroTv()} src={src} alt={alt} />;
}
