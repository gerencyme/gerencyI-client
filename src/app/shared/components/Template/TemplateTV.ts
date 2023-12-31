import { tv } from 'tailwind-variants';

export const templateTv = tv({
  base: 'relative p-1 sm:p-2 lg:p-4  flex gap-2 md:gap-4',
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
    },
    goBackState: {
      hasGoBack: 'pt-14 md:pt-14 lg:pt-14',
      haventGoBack: ''
    },
    bgColor: {
      easydark: 'bg-easydark ring-1 ring-purple rounded-sm',
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    height: 'full',
    goBackState: 'haventGoBack',
    bgColor: 'easydark'
  }
});

export const backButtonTv = tv({
  base: 'absolute top-4 left-4 duration-300 hover:-translate-x-1 cursor-pointer'
});
