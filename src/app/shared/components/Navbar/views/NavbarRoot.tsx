import { ReactNode } from 'react';

interface NavbarRootProps {
  children: ReactNode;
}

export function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav className="w-full h-fit flex items-center justify-between pb-4 lg:pb-8">{children}</nav>
  );
}
