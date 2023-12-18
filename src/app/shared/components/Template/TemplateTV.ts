import { tv } from 'tailwind-variants';

export const templateTv = tv({
  base: 'p-1 sm:p-2 lg:p-4 bg-easydark h-full ring-1 ring-purple rounded-sm flex',
  variants: {
    overflow: {
      hidden: 'overflow-hidden',
      'scroll-x': 'overflow-x-scroll',
      'scroll-x-hidden': 'overflow-x-hidden',
      'scroll-y': 'overflow-y-scroll flex-col',
      'scroll-y-hidden': 'overflow-y-hidden'
    },
    direction: {
      col: 'flex-col gap-5',
      row: 'flex-row'
    }
  }
});
