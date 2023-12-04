import { VariantProps } from 'tailwind-variants';
import { aboutServiceBlockIconTv } from '../AboutServiceTV';
import Image from 'next/image';

interface AboutServiceBlockIconProps extends VariantProps<typeof aboutServiceBlockIconTv> {
  src: string;
  isBigVisible?: boolean;
  isMediumVisible?: boolean;
  isSmallVisible?: boolean;
  className?: string;
}

export function AboutServiceBlockIcon({
  src,
  blockSize,
  isBigVisible,
  isMediumVisible,
  isSmallVisible,
  className
}: AboutServiceBlockIconProps) {
  const openLine = isBigVisible || isMediumVisible || isSmallVisible;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={aboutServiceBlockIconTv({ blockSize, className })}>
        <Image src={src} alt="ícone da explicação da camada da GerencyI" />
      </div>
      <div className={`relative duration-[2000ms] bg-purple w-0.5 ${openLine ? 'h-6' : 'h-0'}`} />
    </div>
  );
}
