import { ReactNode } from 'react';

interface HalfContainerProps {
  children: ReactNode;
}

export function HalfContainer({ children }: HalfContainerProps) {
  return <div className="flex flex-col w-fit h-fit gap-2 md:gap-4">{children}</div>;
}
