import { tv } from 'tailwind-variants';

export const serviceCardRootTV = tv({
  base: 'w-full max-w-[300px] h-fit mb-4 rounded-3xl bg-primary flex flex-col items-center py-2 md:py-4 px-3 md:px-8 justify-center gap-1 md:gap-4'
});

export const serviceCardInfoCardTv = tv({
  base: 'relative mb-4 p-1 md:p-4 h-20 w-full bg-private text-center rounded-2xl flex flex-col gap-1 items-center justify-center'
});
