import { usePathname } from 'next/navigation';
import { useUserInfo } from '~/src/app/shared/hooks/useUserInfo';
import { capitalizeName } from '~/src/app/shared/utils/transformers';
import { APP_ROUTES } from '~utils/app-routes';
import { FaCirclePlus } from 'react-icons/fa6';
import { RiStockLine } from 'react-icons/ri';

export const useNavbarController = () => {
  const { user } = useUserInfo();
  const pathName = usePathname();

  const firstUserName = user?.name?.split(' ')[0];
  const capitalizedUserName = (firstUserName && capitalizeName(firstUserName)) || '';

  const isUnderNewOrder = pathName === APP_ROUTES.private['new-order'].name;
  const choiseLabel = isUnderNewOrder ? 'Controle de Estoque' : 'Novo Pedido';
  const choiseIcon = isUnderNewOrder ? RiStockLine : FaCirclePlus;
  const choiseLink = isUnderNewOrder
    ? APP_ROUTES.private['inventory-control'].name
    : APP_ROUTES.private['new-order'].name;

  return {
    pathName,
    capitalizedUserName,
    user,
    choiseIcon,
    choiseLabel,
    choiseLink
  };
};
