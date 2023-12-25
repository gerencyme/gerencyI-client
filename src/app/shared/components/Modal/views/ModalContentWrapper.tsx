import { ReactNode } from 'react';
import { modalContentWrapperTv } from '../ModalTV';

interface ModalContentWrapperProps {
  children: ReactNode;
}

export function ModalContentWrapper({ children }: ModalContentWrapperProps) {
  return <div className={modalContentWrapperTv()}>{children}</div>;
}
