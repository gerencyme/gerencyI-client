import { tv } from 'tailwind-variants';

export const inputRootTv = tv({
  base: 'transform duration-300 border-2 font-rubik relative w-full max-w-sm flex flex-col gap-3 bg-primary rounded-2xl pt-5 px-4 text-white/50 ',
  variants: {
    state: {
      isActive: 'border-tertiary text-tertiary',
      inactive: 'border-transparent',
      error: 'border-error text-error'
    }
  }
});

export const inputLabelTv = tv({
  base: 'absolute scale-75 left-1 -translate-y-4 font-medium'
});

export const inputFieldTv = tv({
  base: 'outline-none bg-transparent translate-x-7 w-72 md:w-48 lg:w-72 py-2 items-center'
});

export const errorMessageTv = tv({
  base: 'text-xs text-red-500 mt-1'
});
