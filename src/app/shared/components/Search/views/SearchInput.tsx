import { ChangeEvent, useEffect, useRef } from 'react';
import { searchInputTV } from '../SearchTV';
import { APP_ROUTES } from '../../../utils/app-routes';
import { usePathname } from 'next/navigation';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ placeholder, value, onchange }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === APP_ROUTES.private['last-months'].name) {
      return inputRef.current?.focus();
    }
  }, [pathName, value]);

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
