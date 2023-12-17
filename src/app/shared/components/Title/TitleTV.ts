import { tv } from 'tailwind-variants';

export const titleTv = tv({
  base: 'text-black m-0',
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
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      white: 'text-white',
      lightPurple: 'text-lightPurple'
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
