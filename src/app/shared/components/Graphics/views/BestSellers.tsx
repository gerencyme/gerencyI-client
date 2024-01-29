'use client';

import { Text } from '~shared/components/Text';
import { IoMdArrowDropup } from 'react-icons/io';
import { bestSellersData } from '~features/animatedTable/animatedTableUtils';
import { formatPrice, getFirstThreeNames } from '~shared/utils/transformers';
import { Icon } from '~shared/components/Icon';
import Gains from '~assets/svg/gains.svg';
import Image from 'next/image';
import { BestSellersData } from '~types/graphics/BestSellersData';
import { VariantProps } from 'tailwind-variants';
import * as tv from '../GraphicsTV';

export interface BestSellersProps extends VariantProps<typeof tv.bestSellersTv> {
  bestSellers?: BestSellersData[];
  isPressable?: boolean;
  title?: boolean;
  hasFunction?: boolean;
  handleSetToDraft?: (i: number, data: BestSellersData[]) => void;
  cursor?: 'pointer' | 'default';
}

const alt = 'itens mais vendidos na semana comparados com a semana passada';
const bestSellersTitle = 'Compare seus itens mais vendidos com a semana passada';

export function BestSellers({
  handleSetToDraft,
  bestSellers,
  pressableState,
  bgColor,
  hoverState,
  title,
  hasFunction,
  cursor = 'default',
  isPressable = false
}: BestSellersProps) {
  const data = bestSellers ?? bestSellersData;
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  const handler = (i: number) => (hasFunction ? handleSetToDraft?.(i, data) : {});

  return (
    <div className={tv.bestSellersTv({ pressableState: state, bgColor, hoverState })}>
      {title && <Text weight="bold" text={bestSellersTitle} className={tv.bestSellersTitleTv()} />}
      <div className={tv.bestSellersContentWrapperTv()}>
        {data.map((bestSeller, i) => (
          <div
            onClick={() => handler(i)}
            key={bestSeller.id}
            className={tv.bestSellersContentTv({ bgColor, cursor })}
          >
            <Image
              alt={alt}
              width={35}
              height={35}
              src={Gains}
              className={tv.bestSellersHeroTv()}
            />

            <Text weight="bold" text={getFirstThreeNames(bestSeller.name).firstThree} />
            <div className={tv.bestSellersFooterTv()}>
              <Text weight="bold" text={formatPrice(bestSeller.value)} />
              <div className={tv.bestSellersPercentRootTv()}>
                <Icon icon={IoMdArrowDropup} size="small" />
                <Text size="xs" color="lime" text={`${bestSeller.economyPercent}%`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
