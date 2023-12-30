import { tv } from 'tailwind-variants';

export const avatarRootTv = tv({
  base: 'relative overflow-hidden',
  variants: {
    size: {
      small: 'w-8 h-8 rounded-full',
      medium: 'w-16 md:w-28 h-16 md:h-28 duration-300 sm:rounded-full'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});

export const avatarDefaultWrapperTv = tv({
  base: 'w-full h-full bg-primary duration-300 sm:rounded-full flex items-center justify-center'
});
