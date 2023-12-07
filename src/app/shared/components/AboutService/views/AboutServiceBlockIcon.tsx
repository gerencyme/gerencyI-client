import { VariantProps } from 'tailwind-variants';
import {
  aboutServiceBlockIconTv,
  aboutServiceCardInfoLineTv,
  aboutServiceInfoCardTv
} from '../AboutServiceTV';
import Image from 'next/image';
import { Text } from '../../Text';

interface AboutServiceBlockIconProps extends VariantProps<typeof aboutServiceBlockIconTv> {
  src: string;
  text: string;
  isBigVisible?: boolean;
  isMediumVisible?: boolean;
  isSmallVisible?: boolean;
  className?: string;
  icon?: string;
  side?: 'right' | 'bottom' | 'left';
}

export function AboutServiceBlockIcon({
  src,
  blockSize,
  isBigVisible,
  isMediumVisible,
  isSmallVisible,
  icon,
  text,
  side,
  className
}: AboutServiceBlockIconProps) {
  const openLine = isBigVisible || isMediumVisible || isSmallVisible;

  const visibleState = openLine ? 'isVisible' : 'hidden';

  return (
    <div className="relative">
      <div className={aboutServiceInfoCardTv({ state: visibleState, side: side })}>
        {icon && (
          <Image
            alt="ícone representativo da explicação da camada da GerencyI"
            src={icon}
            className="animate-[opacityOn_5000ms_ease-in] w-4 md:w-6 lg:w-fit"
          />
        )}
        <Text
          text={text}
          color="white"
          fontFamily="rosarivo"
          className="h-full text-[8px] text-white md:text-sm text-clip overflow-hidden w-full md:w-44 lg:w-60 leading-3 animate-[opacityOn_5000ms_ease-in]"
        />
      </div>
      <div className={aboutServiceCardInfoLineTv({ state: visibleState, side: side })} />
      <div className="flex flex-col justify-center items-center ">
        <div className={aboutServiceBlockIconTv({ blockSize, className })}>
          <Image
            src={src}
            alt="ícone da explicação da camada da GerencyI"
            className="w-4 md:w-6 lg:w-fit"
          />
        </div>
        <div className={`relative duration-[2000ms] bg-purple w-0.5 ${openLine ? 'h-6' : 'h-0'}`} />
      </div>
    </div>
  );
}
