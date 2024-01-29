import { ReactNode } from 'react';
import { useTheme } from '~hooks/contexts/useTheme';
import { darkModeRootTv } from '../DarkModeTV';

interface DarkModeRootProps {
  children: ReactNode;
}

export function DarkModeRoot({ children }: DarkModeRootProps) {
  const { changeTheme } = useTheme();

  return (
    <button onClick={changeTheme} className={darkModeRootTv()}>
      {children}
    </button>
  );
}
