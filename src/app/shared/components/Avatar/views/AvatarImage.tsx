import Image from 'next/image';
import { blurDataURL } from '~utils/constants/blurDataURL';

interface AvatarImageProps {
  src: string;
  alt: string;
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return (
    <Image src={src} alt={alt} fill quality={100} placeholder="blur" blurDataURL={blurDataURL} />
  );
}
