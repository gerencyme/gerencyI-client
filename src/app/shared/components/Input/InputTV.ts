import { tv } from 'tailwind-variants';

export const inputRootTv = tv({
  base: 'relative transform duration-300 border-2 font-rubik relative max-w-[680px] flex flex-col gap-3 rounded-2xl pt-5 px-4 text-white/50 ',
  variants: {
    state: {
      isActive: 'border-lightPurple text-lightPurple',
      inactive: 'border-transparent',
      error: 'border-error text-error'
    },
    size: {
      full: 'max-w-[680px] min-[680px]:w-full',
      fit: 'max-w-[130px]'
    },
    inputColor: {
      primary: 'bg-darkblue',
      easydark: 'bg-easydark'
    }
  },
  defaultVariants: {
    inputColor: 'primary'
  }
});

export const inputLabelTv = tv({
  base: 'absolute scale-75 left-1 -translate-y-4 font-medium'
});

export const inputFieldTv = tv({
  base: 'outline-none bg-transparent py-2 pl-8 items-center',
  variants: {
    fildSize: {
      full: 'w-60 sm:w-72 lg:w-full',
      huge: 'w-60 sm:w-72 lg:w-72'
    }
  },
  defaultVariants: {
    fildSize: 'huge'
  }
});

export const errorMessageTv = tv({
  base: 'text-xs absolute -bottom-5'
});
