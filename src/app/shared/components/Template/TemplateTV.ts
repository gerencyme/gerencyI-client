import { tv } from 'tailwind-variants';

export const templateTv = tv({
  base: 'relative p-1 sm:p-2 lg:p-4 bg-easydark ring-1 ring-purple rounded-sm flex gap-2 md:gap-4',
  variants: {
    overflow: {
      hidden: 'overflow-hidden',
      'scroll-x': 'overflow-x-scroll',
      'scroll-x-hidden': 'overflow-x-hidden',
      'scroll-y': 'overflow-y-scroll flex-col',
      'scroll-y-hidden': 'overflow-y-hidden'
    },
    direction: {
      col: 'flex-col gap-1 md:gap-5',
      row: 'flex-row'
    },
    height: {
      fit: 'h-fit',
      full: 'h-full'
    }
  },
  defaultVariants: {
    height: 'full'
  }
});
