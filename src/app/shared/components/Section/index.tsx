import { ReactNode } from 'react';
import { sectionTv } from './SectionTV';

interface SectionProps {
  children: ReactNode;
  id: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <section className={sectionTv()} id={id}>
      {children}
    </section>
  );
}
