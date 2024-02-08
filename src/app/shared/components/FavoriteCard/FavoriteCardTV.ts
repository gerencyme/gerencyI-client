import { tv } from 'tailwind-variants';

export const favoriteCardRootTv = tv({
  base: 'relative w-64 overflow-hidden h-64 p-4 flex flex-col items-center justify-center gap-2 ring-1 dark:ring-purple ring-gray-200 duration-500 dark:bg-darkblue bg-white rounded-2xl'
});

export const favoriteCardLikeActionTv = tv({
  base: 'absolute top-5 right-3 overflow-hidden duration-500 dark:bg-private bg-gray-50 rounded-full flex items-center justify-center w-9 h-9'
});

export const favoriteCardHeaderTv = tv({
  base: 'felx flex-col text-center items-center justify-center w-36 m-auto'
});

export const favoriteCardHeaderFavoriteNameTv = tv({
  base: 'truncate w-36'
});

export const favoriteCardHeaderFavoriteBrandTv = tv({
  base: 'truncate w-36 text-center'
});

export const favoritePurchaseInfoTv = tv({
  base: 'flex gap-2 items-center'
});

export const favoriteCardActionsTv = tv({
  base: 'flex items-center justify-center gap-1 px-1 w-full'
});
