import { tv } from 'tailwind-variants';

export const circularDivisorTv = tv({
  base: 'z-10 w-1.5 h-1.5 rounded-full',
  variants: {
    color: {
      white: 'bg-white/75',
      primary: 'bg-primary/75'
    }
  },
  defaultVariants: {
    color: 'white'
  }
});
