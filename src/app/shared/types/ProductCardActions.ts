export interface ProductCardActions {
  id: number;
  label: string;
  color: 'primary' | 'dark';
  onClick: () => void;
}
