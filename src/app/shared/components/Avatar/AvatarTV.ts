import { tv } from 'tailwind-variants';

export const avatarRootTv = tv({
  base: 'relative rounded-full overflow-hidden',
  variants: {
    size: {
      small: 'w-8 h-8',
      medium: 'w-28 h-28'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
