import { ChangeEvent } from 'react';
import { searchInputTV } from '../SearchTV';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ placeholder, value, onchange }: SearchInputProps) {
  return (
    <input
      value={value}
      className={searchInputTV()}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
}
