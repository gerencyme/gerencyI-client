import { ReactNode } from 'react';
import { Text } from '../../Text';

interface ModalHeaderProps {
  modalTitle: string;
  isCancel?: boolean;
  children?: ReactNode;
}

export function ModalHeader({ isCancel = false, modalTitle, children }: ModalHeaderProps) {
  const bgColor = isCancel ? 'bg-error' : 'bg-primary';

  return (
    <div className={`${bgColor} absolute top-0 w-full h-10 flex justify-between items-center p-3`}>
      <Text text={modalTitle} color="white" size="sm" weight="bold" className="truncate" />
      {children}
    </div>
  );
}
