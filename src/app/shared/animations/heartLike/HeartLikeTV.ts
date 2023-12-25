import { tv } from 'tailwind-variants';

export const unfilledHeartTv = tv({
  base: 'absolute cursor-pointer z-0 duration-500',
  variants: {
    state: {
      isHeartFilled: 'scale-0',
      isNotHeartFilled: 'scale-100'
    }
  }
});

export const filledHeartTv = tv({
  base: 'z-40 duration-500',
  variants: {
    state: {
      isHeartFilled: 'scale-150',
      isNotHeartFilled: 'scale-0'
    }
  }
});
