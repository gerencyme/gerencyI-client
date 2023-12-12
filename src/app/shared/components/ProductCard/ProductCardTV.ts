import { tv } from 'tailwind-variants';

export const productCardStatusTv = tv({
  base: 'absolute top-8 left-6 w-2 h-2 rounded-full',
  variants: {
    state: {
      done: 'bg-lime',
      canceled: 'bg-error',
      underAnalisis: 'bg-yellow-500'
    }
  }
});
