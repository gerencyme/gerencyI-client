export interface NavbarAction {
  href: string;
  label: string;
  color: 'primary' | 'transparent' | 'tertiary';
  onClick?: () => void;
}
