import { ReactNode } from 'react';

interface ProductCardRootProps {
  children: ReactNode;
}

export function ProductCardRoot({ children }: ProductCardRootProps) {
  return (
    <div className="relative w-64 h-[440px] p-6 flex flex-col items-center justify-center gap-2 ring-1 ring-purple bg-darkblue rounded-2xl">
      {children}
    </div>
  );
}
