'use client';

import { Search } from '~shared/components/Search';
import { ChangeEvent } from 'react';

interface SearchInputProps {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string;
  isLoading: boolean;
}

export function SearchInput({ onchange, search, isLoading }: SearchInputProps) {
  return (
    <Search.root>
      <Search.icon isLoading={isLoading} />
      <Search.input
        placeholder="Digite o nome de algum produto..."
        onchange={onchange}
        value={search}
      />
    </Search.root>
  );
}
