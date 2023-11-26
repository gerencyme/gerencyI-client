import { NavbarAction } from '~shared/types/NavbarActions';
import { APP_ROUTES } from '~shared/utils/app-routes';

export const newMyAccountActions: NavbarAction[] = [
  {
    color: 'primary',
    href: APP_ROUTES.private['my-account'].name,
    label: 'Perfil'
  }
];
