import { tv } from 'tailwind-variants';

export const serviceCardRootTV = tv({
  base: `relative shadow-2xl opacity-75 shadow-darkblue w-full max-w-[300px] h-fit mb-4 rounded-3xl duration-700 transition-all duration-500 dark:bg-darkblue bg-white flex flex-col items-center py-2 md:py-4 px-3 md:px-8 justify-center gap-1 md:gap-4 cursor-default`,
  variants: {
    state: {
      isVisible: 'top-0',
      notVisible: 'top-72'
    }
  }
});

export const serviceCardInfoCardTv = tv({
  base: `relative overflow-hidden mb-4 p-1 md:p-4 h-20 w-full dark:bg-private bg-gray-100 duration-500 text-center rounded-2xl flex flex-col gap-1 items-center justify-center`
});

export const serviceCardLeftDetailTv = tv({
  base: `absolute top-1/3 left-0 bg-secondary h-8 w-1`
});

export const serviceCardTextInfoTv = tv({
  base: `dark:text-white/75 text-black/50`
});

export const serviceCardRightDetailTv = tv({
  base: `absolute top-1/3 right-0 bg-secondary h-8 w-1`
});
