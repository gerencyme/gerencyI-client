import Image from 'next/image';
import { Text } from '../../Text';
import { SegmentCardOptions } from '~types/SegmentCardOptions';
import { blurDataURL } from '~utils/constants/blurDataURL';
import * as tv from '../SystemDemoTV';

interface SegmentCardProps {
  options: SegmentCardOptions[];
}

export function SegmentCard({ options = [] }: SegmentCardProps) {
  return (
    <div className={tv.segmentCardTv()}>
      <Text text="São apenas 3 passos" weight="bold" size="md" color="secondary" />
      <ul className={tv.segmentCardULTv()}>
        {options.map((option, i) => (
          <li key={i} className={tv.segmentCardLITv()}>
            <Image
              className="rounded-full"
              alt="imagem do segmento da empresa de exemplo"
              src={option.src}
              placeholder="blur"
              blurDataURL={blurDataURL}
              width={50}
              height={50}
            />
            <div className={tv.segmentCardFooterTv()}>
              <Text text={option.optionTitle} color="secondary" size="md" weight="bold" />
              <Text text={option.optionDescription} size="xs" weight="normal" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
