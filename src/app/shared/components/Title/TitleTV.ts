import { tv } from 'tailwind-variants';

export const titleTv = tv({
  base: 'font-rubik text-black font-bold m-0 duration-500',
  variants: {
    size: {
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      white: 'text-white',
      lightPurple: 'text-lightPurple'
    },
    weigth: {
      bold: 'font-bold',
      normal: 'font-normal',
      light: 'font-light',
      'semi-bold': 'font-500',
      black: 'font-black'
    }
  },
  defaultVariants: {
    size: 'lg',
    weigth: 'normal'
  }
});
