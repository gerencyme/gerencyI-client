import { VariantProps } from 'tailwind-variants';
import {
  aboutServiceBlockIconHeroTv,
  aboutServiceBlockIconPurpleLineTv,
  aboutServiceBlockIconRootTv,
  aboutServiceBlockIconTextTv,
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
            className={aboutServiceBlockIconHeroTv()}
          />
        )}
        <Text
          text={text}
          color="white"
          fontFamily="rosarivo"
          className={aboutServiceBlockIconTextTv()}
        />
      </div>
      <div className={aboutServiceCardInfoLineTv({ state: visibleState, side: side })} />
      <div className={aboutServiceBlockIconRootTv()}>
        <div className={aboutServiceBlockIconTv({ blockSize, className })}>
          <Image
            src={src}
            alt="ícone da explicação da camada da GerencyI"
            className="w-4 md:w-6 lg:w-fit"
          />
        </div>
        <div className={aboutServiceBlockIconPurpleLineTv({ state: visibleState })} />
      </div>
    </div>
  );
}
