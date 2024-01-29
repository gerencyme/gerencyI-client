import { VariantProps } from 'tailwind-variants';
import Image from 'next/image';
import { Text } from '../../Text';
import * as tv from '../AboutServiceTV';

interface AboutServiceBlockIconProps extends VariantProps<typeof tv.aboutServiceBlockIconTv> {
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
      <div className={tv.aboutServiceInfoCardTv({ state: visibleState, side: side })}>
        {icon && (
          <Image
            alt="ícone representativo da explicação da camada da GerencyI"
            src={icon}
            className={tv.aboutServiceBlockIconHeroTv()}
          />
        )}
        <Text text={text} fontFamily="rosarivo" className={tv.aboutServiceBlockIconTextTv()} />
      </div>
      <div className={tv.aboutServiceCardInfoLineTv({ state: visibleState, side: side })} />
      <div className={tv.aboutServiceBlockIconRootTv()}>
        <div className={tv.aboutServiceBlockIconTv({ blockSize, className })}>
          <Image
            src={src}
            alt="ícone da explicação da camada da GerencyI"
            className={tv.aboutServiceBlockHeroTv()}
          />
        </div>
        <div className={tv.aboutServiceBlockIconPurpleLineTv({ state: visibleState })} />
      </div>
    </div>
  );
}
