import { ReactNode } from 'react';

interface ModalContentProps {
  children: ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
  return <div className="flex flex-col gap-3 pt-10 w-40 text-white">{children}</div>;
}
