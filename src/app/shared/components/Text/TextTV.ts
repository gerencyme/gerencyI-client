import { tv } from 'tailwind-variants';

export const textTv = tv({
  base: 'font-rubik duration-500 text-black dark:text-white',
  variants: {
    fontFamily: {
      rubik: 'font-rubik',
      rosarivo: 'font-rosarivo'
    },
    size: {
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
      xs: 'text-xs',
      xxs: 'text-[9px]'
    },
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
      light: 'font-light',
      'semi-bold': 'font-500',
      black: 'font-900'
    },
    color: {
      primary: 'dark:text-primary text-primary',
      placeholder: 'dark:text-placeholder text-placeholder',
      tertiary: 'dark:text-tertiary text-tertiary',
      secondary: 'dark:text-secondary text-secondary',
      error: 'dark:text-error text-error',
      lime: 'dark:text-lime text-lime',
      black: 'dark:text-black text-black',
      lightPurple: 'dark:text-lightPurple text-lightPurple',
      white: 'text-white'
    }
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    fontFamily: 'rubik'
  }
});
