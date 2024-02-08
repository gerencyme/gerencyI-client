import { useNewOrderController } from '~features/newOrder/controller';
import { useProductCardController } from '~/src/app/features/Productcards/controller';
import { useQuery } from 'react-query';
import { getFavorites } from '~/src/app/features/favorites/services';
import { oneHourTimeToRefetchCache } from '~utils/constants/staleTimes';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { FavoritesRequest } from '~/src/app/shared/types/requests/FavoritesRequest';
import { OrderRequest } from '~/src/app/shared/types/requests/OrderRequest';

export const useFavoritesController = () => {
  const { sendNewOrder } = useNewOrderController();
  const { handleLike } = useProductCardController();
  const { company } = useCompanyInfo();

  const getAllFavorites = () => getFavorites(company?.cnpj);

  const { data: favorites, refetch } = useQuery('favorites', getAllFavorites, {
    staleTime: oneHourTimeToRefetchCache,
    refetchOnWindowFocus: false
  });

  const submitNewOrder = (order: FavoritesRequest, newQuantity?: number) =>
    sendNewOrder(order as OrderRequest, newQuantity, refetch);

  const updateLike = (orderId: string, isLiked: boolean) => {
    handleLike(orderId, isLiked);

    refetch();
  };

  return {
    submitNewOrder,
    updateLike,
    favorites
  };
};
