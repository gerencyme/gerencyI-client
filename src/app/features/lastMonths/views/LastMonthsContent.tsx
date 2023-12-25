'use client';

import { Productcards } from '~features/Productcards';
import { mockedProductCardContent } from '~features/Productcards/ProductCardsUtils';
import { Search } from '~features/search';
import { useSearch } from '~shared/hooks/useSearch';
import { LastMonthsFallback } from './LastMonthsFallback';

export function LastMonthsContent() {
  const { filteredData, search, isTyping, onchange } = useSearch(mockedProductCardContent);

  return (
    <>
      <Search.input isLoading={isTyping} search={search} onchange={onchange} />
      {filteredData.length ? (
        <Productcards.content productCard={filteredData} />
      ) : (
        <LastMonthsFallback />
      )}
    </>
  );
}
