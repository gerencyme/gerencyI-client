import { tv } from 'tailwind-variants';

export const segmentCardTv = tv({
  base: 'rounded-3xl bg-gradient-hero w-full max-w-[210px] ring-1 ring-white/75 flex flex-col items-center gap-4 justify-center p-4'
});

export const simpleCardTv = tv({
  base: 'bg-transparent z-50 flex flex-col justify-center items-center h-fit gap-1 p-4 relative rounded-3xl shadow-inner shadow-white',
  variants: {
    hasSrc: {
      withSrc: 'w-fit',
      withOuthSrc: 'w-full max-w-[230px]'
    }
  },
  defaultVariants: {
    hasSrc: 'withOuthSrc'
  }
});
