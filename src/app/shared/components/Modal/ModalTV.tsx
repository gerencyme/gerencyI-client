import { tv } from 'tailwind-variants';

export const modalHeaderTv = tv({
  base: 'absolute top-0 w-full h-10 flex justify-between items-center p-3',
  variants: {
    modalOption: {
      cancel: 'bg-error',
      primary: 'bg-primary'
    }
  }
});

export const modalRootTv = tv({
  base: 'z-50 overflow-hidden duration-300 absolute inset-0 duration-500 dark:bg-darkblue/90 bg-gray-100/90 flex items-center justify-center',
  variants: {
    state: {
      open: 'scale-100',
      closed: 'scale-0'
    }
  }
});

export const modalContentTv = tv({
  base: 'flex flex-col gap-3 pt-10 w-40 text-white'
});

export const modalContentActionsTv = tv({
  base: 'flex items-center gap-4 w-fit m-auto'
});

export const modalContentWrapperTv = tv({
  base: 'rounded-lg relative shadow-lg dark:shadow-black shadow-black/25 overflow-hidden duration-500 dark:bg-private bg-white flex flex-col justify-center items-center min-w-[200px] min-h-[140px] p-3'
});

export const modalHeaderActionsRootTv = tv({
  base: 'flex gap-1 items-center cursor-pointer'
});

export const modalHeaderActionsContentTv = tv({
  base: 'bg-white rounded flex items-center justify-center w-6 h-6'
});
