import { tv } from 'tailwind-variants';

export const myDataFormTv = tv({
  base: 'flex flex-col'
});

export const myDataHeaderRootTv = tv({
  base: 'w-full flex md:justify-end pb-5'
});

export const myDataHeaderContentTv = tv({
  base: 'flex gap-2 sm:gap-4'
});

export const myDataRootTv = tv({
  base: 'flex w-fit gap-1 md:gap-5 m-auto'
});

export const myDataContentTv = tv({
  base: 'flex flex-col xl:flex-row gap-5 mb-5'
});

export const myDataInputsContentTv = tv({
  base: 'flex gap-1 md:gap-5',
  variants: {
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap'
    }
  }
});
