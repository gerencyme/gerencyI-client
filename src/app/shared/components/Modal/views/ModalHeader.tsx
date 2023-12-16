import { ReactNode } from 'react';
import { Text } from '../../Text';
import { modalHeaderTv } from '../ModalTV';
import { VariantProps } from 'tailwind-variants';

interface ModalHeaderProps extends VariantProps<typeof modalHeaderTv> {
  modalTitle: string;
  isCancel?: boolean;
  children?: ReactNode;
}

export function ModalHeader({
  isCancel = false,
  modalTitle,
  modalOption,
  children
}: ModalHeaderProps) {
  const bgColor: typeof modalOption = isCancel ? 'cancel' : 'primary';

  return (
    <div className={modalHeaderTv({ modalOption: bgColor })}>
      <Text text={modalTitle} color="white" size="sm" weight="bold" className="truncate" />
      {children}
    </div>
  );
}
