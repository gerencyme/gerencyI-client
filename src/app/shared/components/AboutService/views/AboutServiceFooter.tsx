import { HTMLAttributes, ReactNode } from 'react';

interface AboutServiceFooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function AboutServiceFooter({ children, ...pros }: AboutServiceFooterProps) {
  return (
    <div {...pros} className="relative w-full h-fit flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
