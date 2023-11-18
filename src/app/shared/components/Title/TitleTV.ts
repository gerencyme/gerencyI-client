import { tv } from 'tailwind-variants';

export const titleTv = tv({
  base: 'font-rubik text-black font-bold m-0 duration-500',
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    },
    color: {
      primary: 'text-primary',
      white: 'text-white'
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
