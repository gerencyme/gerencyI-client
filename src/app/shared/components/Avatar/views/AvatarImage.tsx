import Image from 'next/image';
import { blurDataURL } from '~utils/constants/blurDataURL';

interface AvatarImageProps {
  src: string;
  alt: string;
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return (
    <Image
      className="w-8 h-8 bg-contain"
      src={src}
      alt={alt}
      width={30}
      height={30}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
}
