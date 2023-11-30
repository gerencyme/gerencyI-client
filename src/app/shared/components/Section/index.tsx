import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <section className="w-full m-auto items-center justify-center flex max-w-7xl h-full" id={id}>
      {children}
    </section>
  );
}
