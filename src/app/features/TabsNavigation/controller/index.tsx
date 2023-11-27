import { usePathname } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { TabsNavigationItemsProps } from '~/src/app/shared/components/TabsNavigation/views/TabsNavigationItems';

export const useTabsNavigationController = ({ links, isOpen }: TabsNavigationItemsProps) => {
  const pathName = usePathname();
  const routeIndex = pathName.replace('/', '');

  const currentRoute = APP_ROUTES.private[routeIndex as keyof (typeof APP_ROUTES)['private']].label;
  const filteredLinks = links.filter((link) => link.href !== pathName);
  const orderedLinks = [{ href: pathName, label: currentRoute }, ...filteredLinks];
  const linksToRender = isOpen ? orderedLinks : [orderedLinks[0]];

  return { linksToRender, pathName };
};
