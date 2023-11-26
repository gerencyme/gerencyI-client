export interface NavbarAction {
  href: string;
  label: string;
  color: 'primary' | 'transparent';
  onClick?: () => void;
}
