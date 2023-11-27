import Image from 'next/image';
import Teste from '~assets/teste.svg';
import { blurDataURL } from '~utils/constants/blurDataURL';

export function InventoryControl() {
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      className="pointer-events-none rounded-3xl"
      src={Teste}
      alt="teste"
      width={570}
      height={300}
    />
  );
}
