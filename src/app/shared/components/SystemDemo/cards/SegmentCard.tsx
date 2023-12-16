import Image from 'next/image';
import { Text } from '../../Text';
import { SegmentCardOptions } from '~types/SegmentCardOptions';
import { blurDataURL } from '~utils/constants/blurDataURL';
import { segmentCardTv } from '../SystemDemoUtils.';

interface SegmentCardProps {
  options: SegmentCardOptions[];
}

export function SegmentCard({ options = [] }: SegmentCardProps) {
  return (
    <div className={segmentCardTv()}>
      <Text text="São apenas 3 passos" weight="bold" size="md" color="secondary" />
      <ul className="flex flex-col gap-3">
        {options.map((option, i) => (
          <li key={i} className="flex items-center gap-3">
            <Image
              className="rounded-full"
              alt="imagem do segmento da empresa de exemplo"
              src={option.src}
              placeholder="blur"
              blurDataURL={blurDataURL}
              width={50}
              height={50}
            />
            <div className="flex flex-col gap-1">
              <Text text={option.optionTitle} color="white" size="md" weight="bold" />
              <Text
                text={option.optionDescription}
                className="text-white/75"
                size="xs"
                weight="normal"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
