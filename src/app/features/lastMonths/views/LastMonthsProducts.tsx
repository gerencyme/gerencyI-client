import { Template } from '~/src/app/shared/components/Template';
import { ProductCard } from '~/src/app/shared/types/ProductCard';
import { Productcards } from '../../Productcards';
import { LastMonthsFallback } from './LastMonthsFallback';

interface LastMonthsProductsProps {
  filteredData: ProductCard[];
}

export function LastMonthsProducts({ filteredData }: LastMonthsProductsProps) {
  return (
    <>
      {filteredData.length > 0 && (
        <Template goBack className="max-h-[600px]" overflow="scroll-y">
          <Productcards.content productCard={filteredData} />
        </Template>
      )}
      {!filteredData.length && <LastMonthsFallback />}
    </>
  );
}
