import { DropdownMenu } from '~/src/app/shared/components/DropdownMenu';
import { Filter } from '~/src/app/shared/components/Filter';
import { Dispatch, SetStateAction } from 'react';
import { FilterOptions } from '~/src/app/shared/types/FilterOptions';
import { capitalizeName } from '~/src/app/shared/utils/transformers';

export interface FilterContentProps {
  currentFilter: string;
  filterOptions: FilterOptions[];
  setCurrentFilter: Dispatch<SetStateAction<Readonly<string>>>;
}

export function FilterContent({
  currentFilter,
  filterOptions,
  setCurrentFilter
}: FilterContentProps) {
  return (
    <Filter.root>
      <Filter.label text={capitalizeName(currentFilter)} />
      <DropdownMenu
        currentFilter={currentFilter}
        filterOptions={filterOptions}
        setCurrentFilter={setCurrentFilter}
      >
        <Filter.icon />
      </DropdownMenu>
    </Filter.root>
  );
}
