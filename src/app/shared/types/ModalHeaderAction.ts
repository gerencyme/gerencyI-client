import { ElementType } from 'react';

export interface ModalHeaderAction {
  id: number;
  icon: ElementType;
  label: string;
  onClick: () => void;
}
