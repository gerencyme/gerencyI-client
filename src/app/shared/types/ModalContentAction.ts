export interface ModalContentAction {
  id: number;
  label: string;
  color: 'easydark' | 'primary' | 'error';
  onClick: () => void;
}
