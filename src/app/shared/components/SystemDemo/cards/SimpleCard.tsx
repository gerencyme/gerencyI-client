import { Text } from '../../Text';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { VariantProps } from 'tailwind-variants';
import { simpleCardTv } from '../SystemDemoUtils.';

interface SimpleCardProps extends VariantProps<typeof simpleCardTv> {
  src?: string | StaticImport;
  mainText: string;
  secondaryText: string;
}

export function SimpleCard({ mainText, secondaryText, src, hasSrc }: SimpleCardProps) {
  const hasSrcState: typeof hasSrc = src ? 'withSrc' : 'withOuthSrc';

  return (
    <div className={simpleCardTv({ hasSrc: hasSrcState })}>
      {src && <Image alt="Logo GerencyI" src={src} width={50} height={50} />}
      <Text text={mainText} weigth="bold" color="white" size="md" className="text-center" />
      <Text
        text={secondaryText}
        weigth="bold"
        color="secondary"
        size="xs"
        className="text-center"
      />
    </div>
  );
}
