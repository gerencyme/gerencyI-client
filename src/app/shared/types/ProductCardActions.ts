export interface ProductCardActions {
  id: number;
  label: string;
  color: 'primary' | 'white';
  onClick: () => void;
  textColor: 'white' | 'black';
}
