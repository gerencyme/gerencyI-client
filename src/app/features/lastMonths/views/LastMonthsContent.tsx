'use client';

import { Productcards } from '~features/Productcards';
import { mockedProductCardContent } from '~features/Productcards/ProductCardsUtils';
import { Search } from '~features/search';
import { useSearch } from '~shared/hooks/useSearch';
import { LastMonthsFallback } from './LastMonthsFallback';
import { Filters } from '../../filters';
import { useFilters } from '~/src/app/shared/hooks/useFilters';

export function LastMonthsContent() {
  const { searchedData, search, isTyping, onchange } = useSearch(mockedProductCardContent);
  const {
    capitalizedCurrentMonthFilter,
    capitalizedCurrentStatusFilter,
    filteredData,
    filterMonthsOptions,
    filterStatusOptions,
    setSelectedStatus,
    setCurrentMonth
  } = useFilters(searchedData);

  return (
    <>
      <Filters.content
        currentFilter={capitalizedCurrentStatusFilter as string}
        setCurrentFilter={setSelectedStatus}
        filterOptions={filterStatusOptions}
      />
      <Filters.content
        filterOptions={filterMonthsOptions}
        currentFilter={capitalizedCurrentMonthFilter}
        setCurrentFilter={setCurrentMonth}
      />
      <Search.input isLoading={isTyping} search={search} onchange={onchange} />
      {filteredData && <Productcards.content productCard={filteredData} />}
      {!filteredData.length && <LastMonthsFallback />}
    </>
  );
}
