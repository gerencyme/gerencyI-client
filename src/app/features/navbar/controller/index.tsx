import { usePathname } from 'next/navigation';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { capitalizeName } from '~/src/app/shared/utils/transformers';
import { APP_ROUTES } from '~utils/app-routes';
import { FaCirclePlus } from 'react-icons/fa6';
import { RiStockLine } from 'react-icons/ri';

export const useNavbarController = () => {
  const { company } = useCompanyInfo();
  const pathName = usePathname();

  const firstUserName = company?.name?.split(' ')[0];
  const capitalizedUserName = (firstUserName && capitalizeName(firstUserName)) || '';

  const isUnderNewOrder = pathName === APP_ROUTES.private['new-order'].name;
  const choiseLabel = isUnderNewOrder ? 'Painel' : 'Novo Pedido';
  const choiseIcon = isUnderNewOrder ? RiStockLine : FaCirclePlus;
  const choiseLink = isUnderNewOrder
    ? APP_ROUTES.private['inventory-control'].name
    : APP_ROUTES.private['new-order'].name;

  return {
    pathName,
    capitalizedUserName,
    company,
    choiseIcon,
    choiseLabel,
    choiseLink
  };
};
