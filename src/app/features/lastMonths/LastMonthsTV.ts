import { tv } from 'tailwind-variants';

export const lastMonthsRootTv = tv({
  base: 'flex flex-col gap-4 max-w-7xl m-auto pb-4'
});

export const lastMonthsHeaderTv = tv({
  base: 'flex items-end justify-between gap-4'
});

export const headerFiltersTv = tv({
  base: 'flex flex-col gap-4 h-36 justify-end'
});

export const lastMonthsFallbackTv = tv({
  base: 'justify-center items-center'
});

export const lastMonthsFallbackTitleTv = tv({
  base: 'text-white font-bold text-lg md:text-xl text-center'
});
