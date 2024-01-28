import { Template } from '~/src/app/shared/components/Template';
import { ProductCard } from '~/src/app/shared/types/ProductCard';
import { Productcards } from '../../Productcards';
import { LastMonthsFallback } from './LastMonthsFallback';
import { DivObserver } from '~/src/app/shared/components/DivObserver';
import { Ref, forwardRef } from 'react';
import { Spinner } from '~/src/app/shared/components/Spinner';

interface LastMonthsProductsProps {
  filteredData: ProductCard[];
  ref?: Ref<HTMLDivElement>;
  isLoading: boolean;
}

export const LastMonthsProducts = forwardRef<HTMLDivElement, LastMonthsProductsProps>(
  ({ filteredData, isLoading, ...props }, ref) => (
    <>
      {filteredData.length > 0 && (
        <Template {...props} goBack className="max-h-[640px]" overflow="scroll-y">
          <Productcards.content productCard={filteredData} />
          <DivObserver ref={ref} />
          {isLoading && (
            <div className="bg-white w-full h-44">
              <Spinner />
            </div>
          )}
        </Template>
      )}
      {!filteredData.length && <LastMonthsFallback />}
    </>
  )
);

LastMonthsProducts.displayName = 'LastMonthsProducts';
