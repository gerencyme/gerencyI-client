import { ReactNode } from 'react';
import { Template } from '~/src/app/shared/components/Template';

interface FavoritesRootProps {
  children: ReactNode;
}

export function FavoritesRoot({ children }: FavoritesRootProps) {
  return (
    <Template overflow="scroll-y" className="max-h-[600px] max-w-7xl m-auto">
      {children}
    </Template>
  );
}
