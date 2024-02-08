import { tv } from 'tailwind-variants';

export const templateTv = tv({
  base: 'relative flex',
  variants: {
    responsive: {
      isResponsive: 'p-1 gap-2 sm:p-2 lg:p-4 md:gap-4',
      locked: 'p-1 gap-2'
    },
    overflow: {
      hidden: 'overflow-hidden',
      'scroll-x': 'overflow-x-scroll',
      'scroll-x-hidden': 'overflow-x-hidden',
      'scroll-y': 'overflow-y-scroll flex-col',
      'scroll-y-hidden': 'overflow-y-hidden'
    },
    direction: {
      col: 'flex-col gap-1 md:gap-5',
      'locked-col': 'flex-col gap-1 gap-5',
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
      easydark:
        'duration-500 dark:bg-easydark bg-gray-50 ring-1 dark:ring-purple ring-gray-200 rounded-sm',
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    height: 'full',
    goBackState: 'haventGoBack',
    bgColor: 'easydark',
    responsive: 'isResponsive'
  }
});

export const backButtonTv = tv({
  base: 'absolute top-4 left-4 duration-300 hover:-translate-x-1 cursor-pointer'
});
