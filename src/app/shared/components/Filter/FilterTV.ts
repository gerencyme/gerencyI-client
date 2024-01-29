import { tv } from 'tailwind-variants';

export const filterRootTv = tv({
  base: 'h-9 w-fit rounded flex items-center py-1 px-2 gap-2 ring-1 dark:ring-primary ring-gray-200 duration-500 dark:bg-darkblue bg-gray-50'
});

export const filterIconTv = tv({
  base: 'duration-300 hover:translate-y-1'
});

export const filterLabelTv = tv({
  base: 'text-xs sm:text-sm md:text-md'
});
