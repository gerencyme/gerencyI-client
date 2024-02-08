import { FavoritesRequest } from '~/src/app/shared/types/requests/FavoritesRequest';
import { NewOrderRequest } from '~/src/app/shared/types/requests/NewOrderRequest';

export type OrderRequest = NewOrderRequest & FavoritesRequest;
