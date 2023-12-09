import { HTMLAttributes, ReactNode } from 'react';
import { aboutServiceFooterTv } from '../AboutServiceTV';

interface AboutServiceFooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function AboutServiceFooter({ children, ...pros }: AboutServiceFooterProps) {
  return (
    <div {...pros} className={aboutServiceFooterTv()}>
      {children}
    </div>
  );
}
