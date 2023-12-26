import { Dispatch, ReactNode, SetStateAction } from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { CircularDivisor } from '~shared/components/CircularDivisor';
import { FilterOptions } from '~shared/types/FilterOptions';
import { capitalizeName } from '../../utils/transformers';
import * as tv from './DropdownMenuTV';

interface DropdownMenuProps {
  children: ReactNode;
  filterOptions: FilterOptions[];
  currentFilter: string;
  setCurrentFilter: Dispatch<SetStateAction<string>>;
}

export function DropdownMenu({
  setCurrentFilter,
  children,
  currentFilter,
  filterOptions = []
}: DropdownMenuProps) {
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger>{children}</DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content side="top" className={tv.dropdownMenuContentTv()} sideOffset={5}>
          <DropdownMenuRadix.RadioGroup value={currentFilter} onValueChange={setCurrentFilter}>
            {filterOptions.map((option) => (
              <DropdownMenuRadix.RadioItem
                key={option.id}
                className={tv.dropdownMenuRadioItemTv()}
                value={option.label}
              >
                <DropdownMenuRadix.ItemIndicator className={tv.dropdownMenuItemIndicatorTv()}>
                  <CircularDivisor color="primary" />
                </DropdownMenuRadix.ItemIndicator>
                {capitalizeName(option.value ?? option.label)}
              </DropdownMenuRadix.RadioItem>
            ))}
          </DropdownMenuRadix.RadioGroup>

          <DropdownMenuRadix.Arrow className="fill-white" />
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  );
}
