import { ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { modalRootTv } from '../ModalTV';

interface ModalRootProps extends VariantProps<typeof modalRootTv> {
  children: ReactNode;
  isModalOpen: boolean;
}

export function ModalRoot({ children, isModalOpen, state }: ModalRootProps) {
  const modalState: typeof state = isModalOpen ? 'open' : 'closed';

  return <div className={modalRootTv({ state: modalState })}>{children}</div>;
}
