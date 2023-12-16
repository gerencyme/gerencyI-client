import { ReactNode } from 'react';

interface ModalContentWrapperProps {
  children: ReactNode;
}

export function ModalContentWrapper({ children }: ModalContentWrapperProps) {
  return (
    <div className="rounded-lg relative shadow-lg shadow-black overflow-hidden bg-private flex flex-col justify-center items-center min-w-[200px] min-h-[140px] p-3">
      {children}
    </div>
  );
}
