import { ReactNode } from 'react';

interface ModalRootProps {
  children: ReactNode;
  isModalOpen: boolean;
}

export function ModalRoot({ children, isModalOpen }: ModalRootProps) {
  return (
    <div
      className={`${
        isModalOpen ? 'scale-100' : 'scale-0'
      } z-50 duration-300 absolute inset-0 bg-darkblue/90 flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
