import { tv } from 'tailwind-variants';

export const profileRootTv = tv({
  base: 'flex items-center w-fit h-fit gap-2 md:gap-4'
});

export const profileInfoTv = tv({
  base: 'flex flex-col gap-2 md:gap-4 z-10'
});

export const profileInfoContentWrapperTv = tv({
  base: 'flex items-center gap-2 md:gap-4 flex-wrap'
});

export const profileInfoTitleTv = tv({
  base: 'text-sm md:text-md lg:text-lg',
  variants: {
    color: {
      white: 'text-white',
      'white/75': 'text-white/75'
    }
  }
});
