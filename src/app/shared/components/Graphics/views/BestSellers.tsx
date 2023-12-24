'use client';

import { Text } from '~/src/app/shared/components/Text';
import { IoMdArrowDropup } from 'react-icons/io';
import { bestSellersData } from '~features/animatedTable/animatedTableUtils';
import { formatPrice, getFirstThreeNames } from '~/src/app/shared/utils/transformers';
import { Icon } from '~/src/app/shared/components/Icon';
import Gains from '~assets/svg/gains.svg';
import Image from 'next/image';
import { BestSellersData } from '~types/graphics/BestSellersData';
import { VariantProps } from 'tailwind-variants';
import { bestSellersContent, bestSellersPercentRoot, bestSellersTv } from '../GraphicsTV';

interface BestSellersProps extends VariantProps<typeof bestSellersTv> {
  bestSellers?: BestSellersData[];
  isPressable?: boolean;
  title?: boolean;
  hasFunction?: boolean;
  handleSetToDraft: (i: number, data: BestSellersData[]) => void;
  cursor: 'pointer' | 'default';
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
  cursor,
  isPressable = false
}: BestSellersProps) {
  const data = bestSellers ?? bestSellersData;
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  const handler = (i: number) => (hasFunction ? handleSetToDraft(i, data) : {});

  return (
    <div className={bestSellersTv({ pressableState: state, bgColor, hoverState })}>
      {title && (
        <Text
          color="white"
          weight="bold"
          text={bestSellersTitle}
          className="text-xs md:text-md xl:text-lg"
        />
      )}
      <div className="flex w-full gap-6 md:gap-9 justify-start">
        {data.map((bestSeller, i) => (
          <div
            onClick={() => handler(i)}
            key={bestSeller.id}
            className={bestSellersContent({ bgColor, cursor })}
          >
            <Image
              alt={alt}
              width={35}
              height={35}
              src={Gains}
              className="absolute -top-4 -right-4"
            />

            <Text
              color="white"
              weight="bold"
              text={getFirstThreeNames(bestSeller.name).firstThree}
            />
            <div className="flex items-center gap-2">
              <Text color="white" weight="bold" text={formatPrice(bestSeller.value)} />
              <div className={bestSellersPercentRoot()}>
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
