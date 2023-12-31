import { tv } from 'tailwind-variants';

export const iconTv = tv({
  base: 'cursor-default duration-300',
  variants: {
    size: {
      small: 'w-4 h-4',
      medium: 'w-6 h-6'
    },
    color: {
      primary: 'text-primary',
      white: 'text-white'
    },
    type: {
      password: 'cursor-pointer w-12 text-white/50 hover:text-white/75 absolute right-0 top-6',
      representation: 'w-12 absolute left-0 top-6'
    },
    button: {
      medium: 'relative w-5 h-5 text-white'
    },
    collapsableState: {
      open: 'h-40 rotate-45 absolute right-0',
      close: 'h-10 rotate-0 absolute right-0'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
