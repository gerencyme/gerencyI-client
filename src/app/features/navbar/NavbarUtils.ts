import { NavbarAction } from '~types/NavbarActions';
import { APP_ROUTES } from '../../shared/utils/app-routes';

export const actions: NavbarAction[] = [
  {
    color: 'transparent',
    href: APP_ROUTES.public.auth.name,
    label: 'Entrar'
  },
  {
    color: 'primary',
    href: APP_ROUTES.public.register.name,
    label: 'Registre-se'
  }
];
