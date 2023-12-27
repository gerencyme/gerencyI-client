'use client';

import { mockedProductCardContent } from '~features/Productcards/ProductCardsUtils';
import { Search } from '~features/search';
import { useSearch } from '~shared/hooks/useSearch';
import { Filters } from '../../filters';
import { useFilters } from '~/src/app/shared/hooks/useFilters';
import { useLastMonthsController } from '../controller';
import { headerFiltersTv, lastMonthsHeaderTv } from '../LastMonthsTV';
import { LastMonthsProducts } from './LastMonthsProducts';
import { LastMonthsMonthlyExpense } from './LastMonthsMonthlyExpense';

export function LastMonthsContent() {
  const { searchedData, search, isTyping, onchange } = useSearch(mockedProductCardContent);
  const {
    currentMonthFilter,
    translatedSelectedStatus,
    filteredData,
    filterMonthsOptions,
    filterStatusOptions,
    setSelectedStatus,
    setCurrentMonth
  } = useFilters(searchedData);
  const { isExpensesVisible, totalPrice, toggleExpenses } = useLastMonthsController(filteredData);

  return (
    <>
      <div className={lastMonthsHeaderTv()}>
        <div className={headerFiltersTv()}>
          <Filters.content
            currentFilter={translatedSelectedStatus as string}
            setCurrentFilter={setSelectedStatus}
            filterOptions={filterStatusOptions}
          />
          <Filters.content
            filterOptions={filterMonthsOptions}
            currentFilter={currentMonthFilter}
            setCurrentFilter={setCurrentMonth}
          />
        </div>
        <LastMonthsMonthlyExpense
          translatedSelectedStatus={translatedSelectedStatus as string}
          currentMonthFilter={currentMonthFilter}
          isExpensesVisible={isExpensesVisible}
          toggleExpenses={toggleExpenses}
          totalPrice={totalPrice}
        />
      </div>
      <Search.input isLoading={isTyping} search={search} onchange={onchange} />
      <LastMonthsProducts filteredData={filteredData} />
    </>
  );
}
