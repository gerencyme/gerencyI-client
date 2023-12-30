'use client';

import { Text } from '~/src/app/shared/components/Text';
import { Search } from '../../search';
import { Filters } from '../../filters';
import { useSearch } from '~/src/app/shared/hooks/useSearch';
import { useFilters } from '~/src/app/shared/hooks/useFilters';
import { Table, TableRows } from '../../animatedTable/views/Table';
import { rows } from '../../animatedTable/animatedTableUtils';
import { ProductCard } from '~/src/app/shared/types/ProductCard';
import { DashboardTableTv, DashboardTableFiltersTv } from '../DashboardTV';

export function Dashboardtable() {
  const { searchedData, search, isTyping, onchange } = useSearch(rows as unknown as ProductCard[]);
  const { currentMonthFilter, filterMonthsOptions, filteredData, setCurrentMonth } =
    useFilters(searchedData);
  return (
    <div className={DashboardTableTv()}>
      <Text text="Lista de pedidos" size="md" color="white" weight="light" />
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

      <Table
        state="notPressable"
        isPressable={false}
        tableRows={filteredData as unknown as TableRows[]}
      />
    </div>
  );
}
