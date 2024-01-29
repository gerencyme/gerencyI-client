import { tv } from 'tailwind-variants';

export const searchRootTV = tv({
  base: 'h-9 w-hull rounded flex items-center py-1 px-2 gap-2 ring-1 dark:ring-primary ring-gray-200 duration-500 dark:bg-darkblue bg-gray-50'
});

export const searchInputTV = tv({
  base: 'outline-none w-full h-full bg-transparent duration-500 dark:text-white text-black dark:placeholder:text-white/50'
});

export const searchIconTV = tv({
  base: '',
  variants: {
    loadState: {
      isLoading: 'animate-spin',
      notLoading: ''
    }
  },
  defaultVariants: {
    loadState: 'notLoading'
  }
});
