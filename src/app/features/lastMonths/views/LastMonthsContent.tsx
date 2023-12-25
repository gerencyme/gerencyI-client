'use client';

import { Productcards } from '~features/Productcards';
import { mockedProductCardContent } from '~features/Productcards/ProductCardsUtils';
import { Search } from '~features/search';
import { useSearch } from '~shared/hooks/useSearch';
import { LastMonthsFallback } from './LastMonthsFallback';

export function LastMonthsContent() {
  const { filteredData, search, onchange } = useSearch(mockedProductCardContent);

  return (
    <>
      <Search.input search={search} onchange={onchange} />
      {filteredData && <Productcards.content productCard={filteredData} />}
      {!filteredData.length && <LastMonthsFallback />}
    </>
  );
}
