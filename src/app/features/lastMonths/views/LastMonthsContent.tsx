'use client';

import { Search } from '~features/search';
import { useSearch } from '~shared/hooks/useSearch';
import { Filters } from '../../filters';
import { useFilters } from '~/src/app/shared/hooks/useFilters';
import { useLastMonthsController } from '../controller';
import { headerFiltersTv, lastMonthsHeaderTv } from '../LastMonthsTV';
import { LastMonthsProducts } from './LastMonthsProducts';
import { LastMonthsMonthlyExpense } from './LastMonthsMonthlyExpense';
import { useDashboardController } from '../../dashboard/controller';
import { useRef } from 'react';
import { useObserver } from '~/src/app/shared/hooks/useObserver';
import { DivObserver } from '~/src/app/shared/components/DivObserver';
import { useSecurityExpenses } from '~/src/app/shared/hooks/useSecurityExpenses';

export function LastMonthsContent() {
  const ref = useRef(null);

  const { isExpensesVisible, toggleExpenses } = useSecurityExpenses();
  const { isVisible } = useObserver(ref);
  const { tableData } = useDashboardController(isVisible);
  const { searchedData, search, isTyping, onchange } = useSearch(tableData || []);
  const {
    currentMonthFilter,
    translatedSelectedStatus,
    filteredData,
    filterMonthsOptions,
    filterStatusOptions,
    setSelectedStatus,
    setCurrentMonth
  } = useFilters(searchedData);
  const { totalPrice } = useLastMonthsController(filteredData);

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
      <DivObserver ref={ref} />
    </>
  );
}
