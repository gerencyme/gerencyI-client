import { tv } from 'tailwind-variants';

export const systemDemoRootTv = tv({
  base: 'flex flex-col gap-4 items-center justify-center m-auto w-full pb-4'
});

export const inventoryControlTv = tv({
  base: 'pointer-events-none rounded-3xl'
});

export const segmentCardULTv = tv({
  base: 'flex flex-col gap-3'
});

export const segmentCardLITv = tv({
  base: 'flex items-center gap-3'
});

export const segmentCardTv = tv({
  base: 'rounded-3xl dark:bg-gradient-hero bg-gradient-light-hero w-full duration-500 max-w-[210px] ring-1 ring-white/75 flex flex-col items-center gap-4 justify-center p-4'
});

export const segmentCardFooterTv = tv({
  base: 'flex flex-col gap-1'
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
