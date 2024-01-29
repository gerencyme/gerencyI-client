import { tv } from 'tailwind-variants';

export const productCardContentInfoRootTv = tv({
  base: 'flex flex-col justify-center items-center gap-2 w-full'
});

export const productCardStatusTv = tv({
  base: 'absolute top-8 left-6 w-2 h-2 rounded-full',
  variants: {
    state: {
      done: 'bg-lime',
      canceled: 'bg-error',
      underAnalysis: 'bg-yellow-500 animate-status-ping'
    }
  }
});

export const productCardLikeActionTv = tv({
  base: 'absolute top-5 right-3 overflow-hidden duration-500 dark:bg-private bg-gray-50 rounded-full flex items-center justify-center w-9 h-9'
});

export const productCardActionsTv = tv({
  base: 'flex items-center justify-between px-1 w-full'
});

export const productCardContentInfoUnderAnalysisTv = tv({
  base: 'text-center truncate w-full rounded ring-1 duration-500 dark:ring-purple ring-gray-200 px-4 py-1 dark:bg-easydark bg-gray-50'
});

export const productCardContentInfoTv = tv({
  base: 'text-center w-full flex items-center justify-between rounded ring-1 dark:ring-purple duration-500 ring-gray-200 px-4 py-1 dark:bg-easydark bg-gray-50'
});

export const productCardHeaderTv = tv({
  base: 'felx flex-col text-center items-center justify-center w-36 m-auto'
});

export const productCardHeaderProductNameTv = tv({
  base: 'truncate w-36'
});

export const productCardHeaderProductBrandTv = tv({
  base: 'truncate w-36 text-center'
});

export const productCardIdentifyColorRootTv = tv({
  base: 'flex items-center justify-center absolute -top-1 w-56 h-3 rounded-lg duration-500 dark:bg-private bg-gray-50'
});

export const productCardIdentifyColorTv = tv({
  base: 'rounded-lg h-1 w-52 m-auto'
});

export const productCardRootTv = tv({
  base: 'relative w-64 overflow-hidden h-[440px] p-6 flex flex-col items-center justify-center gap-2 ring-1 dark:ring-purple  ring-gray-200 duration-500 dark:bg-darkblue bg-white rounded-2xl'
});

export const renderCancelTooltipContentTv = tv({
  base: 'flex flex-col items-center justify-center bg-white p-2 rounded-lg'
});
