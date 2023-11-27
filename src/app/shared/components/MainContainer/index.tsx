'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '~hooks/useTheme';
interface MainContainerProps {
  children: React.ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  const [isClientSide, setIsClientSide] = useState(false);
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    <main className={`${isDarkMode} relative p-4 lg:p-8 transition-colors w-screen h-screen`}>
      {isClientSide && children}
    </main>
  );
}
