import Image from 'next/image';
import Demo from '~assets/svg/demo.svg';
import { blurDataURL } from '~utils/constants/blurDataURL';
import { inventoryControlTv } from '../SystemDemoTV';

export function InventoryControl() {
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={inventoryControlTv()}
      src={Demo}
      alt="teste"
      width={570}
      height={300}
    />
  );
}
