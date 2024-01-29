import { tv } from 'tailwind-variants';

export const ProductsActionsRootTv = tv({
  base: 'w-fit pt-8 flex gap-4 flex-wrap m-auto items-center z-50'
});

export const ProductsHighlightTextTv = tv({
  base: 'text-secondary font-rosarivo'
});

export const ProductsHeaderTitleTv = tv({
  base: 'text:lg sm:text-2xl font-bold dark:text-white text-black text-center'
});

export const ProductsHeaderTextTv = tv({
  base: 'text-md sm:text-xl font-bold dark:text-white/75 text-black/75 text-center'
});

export const ProductsHeaderSubtextTv = tv({
  base: 'w-full max-w-xl m-auto font-rubik dark:text-white text-black text-center font-light text-xs pt-4'
});
