import { tv } from 'tailwind-variants';

export const productCardStatusTv = tv({
  base: 'absolute top-8 left-6 w-2 h-2 rounded-full',
  variants: {
    state: {
      done: 'bg-lime',
      canceled: 'bg-error',
      underAnalisis: 'bg-yellow-500 animate-status-ping'
    }
  }
});

export const productCardLikeActionTv = tv({
  base: 'absolute top-5 right-3 overflow-hidden bg-private rounded-full flex items-center justify-center w-9 h-9'
});

export const productCardActionsTv = tv({
  base: 'flex items-center justify-between px-1 w-full'
});

export const productCardContentInfoUnderAnalysisTv = tv({
  base: 'text-center truncate w-full rounded ring-1 ring-purple px-4 py-1 bg-easydark'
});

export const productCardContentInfoTv = tv({
  base: 'text-center w-full flex items-center justify-between rounded ring-1 ring-purple px-4 py-1 bg-easydark'
});

export const productCardHeaderTv = tv({
  base: 'felx flex-col text-center items-center justify-center w-36 m-auto'
});

export const productCardIdentifyColorTv = tv({
  base: 'flex items-center justify-center absolute -top-1 w-56 h-3 rounded-lg bg-private'
});

export const productCardRootTv = tv({
  base: 'relative w-64 h-[440px] p-6 flex flex-col items-center justify-center gap-2 ring-1 ring-purple bg-darkblue rounded-2xl'
});

export const renderCancelTooltipContentTv = tv({
  base: 'flex flex-col items-center justify-center'
});
