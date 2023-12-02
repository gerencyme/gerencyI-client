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
  isPressable: boolean;
}

const alt = 'itens mais vendidos na semana comparados com a semana passada';
const bestSellersTitle = 'Compare seus itens mais vendidos com a semana passada';

export function BestSellers({ bestSellers, isPressable, pressableState }: BestSellersProps) {
  const data = bestSellers ?? bestSellersData;
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  return (
    <div className={bestSellersTv({ pressableState: state })}>
      <Text
        color="white"
        weigth="bold"
        text={bestSellersTitle}
        className="text-xs md:text-md xl:text-lg"
      />
      <div className="flex gap-9">
        {data.map((bestSeller) => (
          <div key={bestSeller.id} className={bestSellersContent()}>
            <Image
              alt={alt}
              width={35}
              height={35}
              src={Gains}
              className="absolute -top-4 -right-4"
            />

            <Text
              color="white"
              weigth="bold"
              text={getFirstThreeNames(bestSeller.name).firstThree}
            />
            <div className="flex items-center gap-2">
              <Text color="white" weigth="bold" text={formatPrice(bestSeller.value)} />
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
