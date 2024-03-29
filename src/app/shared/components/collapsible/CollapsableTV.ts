import { tv } from 'tailwind-variants';

export const collapsableRootTv = tv({
  base: 'transition-all duration-300 relative w-fit overflow-hidden duration-300',
  variants: {
    collapsableState: {
      open: 'h-44',
      close: 'h-12'
    }
  },
  defaultVariants: {
    collapsableState: 'close'
  }
});

export const collapsableContentTv = tv({
  base: 'p-1 md:px-4 md:py-2 w-72 md:w-[450px] xl:w-[650px] h-fit overflow-y-scroll'
});

export const CollapsibleHeaderTv = tv({
  base: 'pb-2 border-b-2 h-10 duration-500 dark:border-white border-black w-96 md:w-[480px] xl:w-[680px]'
});
