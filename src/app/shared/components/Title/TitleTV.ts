import { tv } from 'tailwind-variants';

export const titleTv = tv({
  base: 'dark:text-white text-black m-0 duration-500',
  variants: {
    fontFamily: {
      rubik: 'font-rubik',
      rosarivo: 'font-rosarivo'
    },
    size: {
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    },
    color: {
      primary: 'dark:text-primary text-primary',
      secondary: 'dark:text-secondary text-secondary',
      tertiary: 'dark:text-tertiary text-tertiary',
      lightPurple: 'dark:text-lightPurple text-lightPurple',
      white: 'text-white'
    },
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
      light: 'font-light',
      'semi-bold': 'font-500',
      black: 'font-black'
    }
  },
  defaultVariants: {
    size: 'lg',
    weight: 'normal'
  }
});
