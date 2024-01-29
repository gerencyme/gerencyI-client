'use client';

import { DashboardTableTv, DashboardTableFiltersTv } from '../DashboardTV';
import { Search } from '../../search';
import { Filters } from '../../filters';
import { Table } from '../../Table';
import { Text } from '~shared/components/Text';
import { useSearch } from '~shared/hooks/useSearch';
import { useFilters } from '~shared/hooks/useFilters';
import { ProductCard } from '~types/ProductCard';
import { useRef } from 'react';
import { useDashboardController } from '../controller';
import { useObserver } from '~/src/app/shared/hooks/useObserver';

export function Dashboardtable() {
  const tableRef = useRef(null);
  const { isVisible } = useObserver(tableRef);
  const { tableData, loading } = useDashboardController(isVisible);
  const { searchedData, search, isTyping, onchange } = useSearch(tableData as ProductCard[]);
  const { currentMonthFilter, filterMonthsOptions, filteredData, setCurrentMonth } =
    useFilters(searchedData);

  return (
    <div className={DashboardTableTv()}>
      <Text text="Lista de pedidos" size="md" weight="light" />
      <div className={DashboardTableFiltersTv()}>
        <div className="w-full">
          <Search.input onchange={onchange} search={search} isLoading={isTyping} />
        </div>
        <Filters.content
          currentFilter={currentMonthFilter}
          filterOptions={filterMonthsOptions}
          setCurrentFilter={setCurrentMonth}
        />
      </div>

      <Table isPressable={false} tableRows={filteredData} tableRef={tableRef} loading={loading} />
    </div>
  );
}
