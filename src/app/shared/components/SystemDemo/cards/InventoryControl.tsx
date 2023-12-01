import Image from 'next/image';
import Demo from '~assets/svg/demo.svg';
import { blurDataURL } from '~utils/constants/blurDataURL';

export function InventoryControl() {
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      className="pointer-events-none rounded-3xl"
      src={Demo}
      alt="teste"
      width={570}
      height={300}
    />
  );
}
