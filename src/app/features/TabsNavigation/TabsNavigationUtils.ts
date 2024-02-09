import { TabsNavigationItems } from '~types/TabsNavigationItems';
import { APP_ROUTES } from '~utils/app-routes';

export const links: TabsNavigationItems[] = [
  {
    href: APP_ROUTES.private['dashboard'].name,
    label: APP_ROUTES.private['dashboard'].label
  },
  {
    href: APP_ROUTES.private['my-data'].name,
    label: APP_ROUTES.private['my-data'].label
  },
  {
    href: APP_ROUTES.private['last-months'].name,
    label: APP_ROUTES.private['last-months'].label
  }
];
