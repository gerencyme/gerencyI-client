export interface MyDataActions {
  id: number;
  label: string;
  color: 'error' | 'primary';
  type: 'button' | 'reset' | 'submit';
}
