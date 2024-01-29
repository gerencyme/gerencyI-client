import { tv } from 'tailwind-variants';

export const circularDivisorTv = tv({
  base: 'z-10 w-1.5 h-1.5 rounded-full duration-500',
  variants: {
    color: {
      white: 'dark:bg-white/75 bg-black/50',
      primary: 'bg-primary/75'
    }
  },
  defaultVariants: {
    color: 'white'
  }
});
