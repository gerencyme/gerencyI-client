import { tv } from 'tailwind-variants';

export const collapsableRootTv = tv({
  base: 'relative h-full max-h-40 w-fit overflow-hidden duration-300',
  variants: {
    collapsableState: {
      open: 'h-40 overflow-y-scroll',
      close: 'h-10'
    }
  },
  defaultVariants: {
    collapsableState: 'close'
  }
});

export const collapsableContentTv = tv({
  base: 'mt-10 p-1 md:px-4 md:py-2 w-72 md:w-[450px] xl:w-[650px]'
});

export const CollapsibleHeaderTv = tv({
  base: 'pb-2 border-b-2 h-fit border-white w-96 md:w-[480px] xl:w-[680px]'
});
