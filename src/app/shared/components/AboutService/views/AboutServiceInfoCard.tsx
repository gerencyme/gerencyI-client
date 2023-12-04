import Image from 'next/image';
import { Text } from '../../Text';
import { VariantProps } from 'tailwind-variants';
import { aboutServiceCardInfoLineTv, aboutServiceInfoCardTv } from '../AboutServiceTV';

interface AboutServiceInfoCardProps extends VariantProps<typeof aboutServiceInfoCardTv> {
  isVisible: boolean;
  text: string;
  icon?: string;
}

export function AboutServiceInfoCard({
  icon,
  isVisible,
  text,
  state,
  side
}: AboutServiceInfoCardProps) {
  const visibleState: typeof state = isVisible ? 'isVisible' : 'hidden';

  return (
    <div className="absolute flex right-[698px] top-0">
      <div className={aboutServiceInfoCardTv({ state: visibleState, side })}>
        {icon && (
          <Image
            alt="ícone representativo da explicação da camada da GerencyI"
            src={icon}
            className="animate-[opacityOn_5000ms_ease-in]"
          />
        )}
        <Text
          text={text}
          color="white"
          size="sm"
          fontFamily="rosarivo"
          className="h-12 text-clip overflow-hidden w-60 animate-[opacityOn_5000ms_ease-in]"
        />
      </div>
      <div className={aboutServiceCardInfoLineTv({ state: visibleState, side })} />
    </div>
  );
}
