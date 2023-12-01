import { Text } from '~/src/app/shared/components/Text';
import { IoMdArrowDropup } from 'react-icons/io';
import { bestSellersData } from '../../animatedTableUtils';
import { formatPrice } from '~/src/app/shared/utils/transformers';
import Gains from '~assets/svg/gains.svg';
import Image from 'next/image';
import { Icon } from '~/src/app/shared/components/Icon';

const getFirstThreeNames = (fullName: string) => {
  const names = fullName.split(' ');
  const firstThreeNames = names.slice(0, 3);
  const remainingNames = names.slice(3);

  return {
    firstThree: firstThreeNames.join(' '),
    remaining: remainingNames.join(' ')
  };
};

export function BestSellers() {
  return (
    <div className="w-fit h-fit absolute right-10 top-80 flex flex-col gap-4">
      <Text
        color="white"
        weigth="bold"
        text="Compare seus itens mais vendidos com a semana passada"
      />
      <div className="flex gap-9">
        {bestSellersData.map((bestSeller) => (
          <div
            key={bestSeller.id}
            className="bg-easydark rounded-md p-2 relative flex flex-col items-start justify-center gap-4 w-36 h-20 ring-1 ring-purple"
          >
            <Image
              alt="itens mais vendidos na semana comparados com a semana passada"
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
              <div className="flex items-center bg-green-800 text-lime rounded-sm p-0.5">
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
