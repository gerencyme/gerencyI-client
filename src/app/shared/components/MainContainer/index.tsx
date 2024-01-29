'use client';

import { ReactNode, useEffect, useState } from 'react';
import { VariantProps } from 'tailwind-variants';
import { useTheme } from '~/src/app/shared/hooks/contexts/useTheme';
import { mainContainerTv } from './MainContainerTv';
interface MainContainerProps extends VariantProps<typeof mainContainerTv> {
  children: ReactNode;
}

export function MainContainer({ children, bgTheme }: MainContainerProps) {
  const [isClientSide, setIsClientSide] = useState(false);
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark' ? 'dark' : 'light';

  const bgByTheme: typeof bgTheme = theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    <main className={`${isDarkMode} ${mainContainerTv({ bgTheme: bgByTheme })}`}>
      {isClientSide && children}
    </main>
  );
}
