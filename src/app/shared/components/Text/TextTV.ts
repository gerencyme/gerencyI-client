import { tv } from 'tailwind-variants';

export const textTv = tv({
  base: 'font-rubik text-black',
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
      xxs: 'text-xxs'
    },
    weigth: {
      bold: 'font-bold',
      normal: 'font-normal',
      light: 'font-light',
      'semi-bold': 'font-500',
      black: 'font-900'
    },
    color: {
      primary: 'text-primary',
      placeholder: 'text-placeholder',
      white: 'text-white',
      tertiary: 'text-tertiary',
      secondary: 'text-secondary',
      error: 'text-error',
      lime: 'text-lime',
      lightPurple: 'text-lightPurple'
    }
  },
  defaultVariants: {
    size: 'md',
    weigth: 'normal',
    fontFamily: 'rubik'
  }
});
