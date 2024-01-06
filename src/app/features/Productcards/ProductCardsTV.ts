import { tv } from 'tailwind-variants';

export const editPurchaseContentTv = tv({
  base: 'w-fit h-fit font-bold text-center text-xs py-1 bg-easydark rounded m-auto outline-none',
  variants: {
    opacity: {
      '50%': 'placeholder:text-white/50',
      '100%': 'placeholder:text-white'
    }
  }
});
