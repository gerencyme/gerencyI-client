import { NavbarAction } from '~types/NavbarActions';
import { APP_ROUTES } from '../../shared/utils/app-routes';
import { DropDownOptions } from '../../shared/types/DropDownOptions';

export const actions: NavbarAction[] = [
  {
    color: 'tertiary',
    href: APP_ROUTES.public.auth.name,
    label: 'Entrar'
  },
  {
    color: 'primary',
    href: APP_ROUTES.public.register.name,
    label: 'Registre-se'
  }
];

export const authenticatedActions: NavbarAction[] = [
  {
    color: 'primary',
    href: APP_ROUTES.private['my-account'].name,
    label: 'Acessar Painel'
  }
];

export const dropDownOptions: DropDownOptions[] = [
  {
    href: APP_ROUTES.private['my-account'].name,
    label: APP_ROUTES.private['my-account'].label
  },
  {
    href: APP_ROUTES.private['favorites'].name,
    label: APP_ROUTES.private['favorites'].label
  }
];
