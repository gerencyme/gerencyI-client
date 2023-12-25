import { ChangeEvent, useEffect, useRef } from 'react';
import { searchInputTV } from '../SearchTV';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ placeholder, value, onchange }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [value]);

  return (
    <input
      ref={inputRef}
      id="searchInput"
      name="searchInput"
      value={value}
      className={searchInputTV()}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
}
