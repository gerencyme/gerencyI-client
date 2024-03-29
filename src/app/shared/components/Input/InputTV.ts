import { tv } from 'tailwind-variants';

export const inputRootTv = tv({
  base: 'relative w-full transform duration-500 border-2 font-rubik relative max-w-[680px] flex flex-col gap-3 rounded-2xl pt-5 px-4 dark:text-white/50 text-black-50 ',
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
      primary: 'dark:bg-darkblue bg-gray-200',
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
  base: 'outline-none bg-transparent w-full py-2 pl-8 items-center placeholder:text-xs md:placeholder:text-md text-xs md:text-md'
});

export const errorMessageTv = tv({
  base: 'text-xxs md:text-xs absolute -bottom-4 md:-bottom-5'
});
