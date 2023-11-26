import { ReactNode } from 'react';

interface NavbarRootProps {
  children: ReactNode;
}

export function NavbarRoot({ children }: NavbarRootProps) {
  return <nav className="w-full h-fit flex justify-between p-4 lg:p-8">{children}</nav>;
}
