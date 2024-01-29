import { ReactNode } from 'react';
import { modalContentTv } from '../ModalTV';

interface ModalContentProps {
  children: ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
  return <div className={modalContentTv()}>{children}</div>;
}
