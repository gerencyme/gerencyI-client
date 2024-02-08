import { tv } from 'tailwind-variants';

export const buttonRootTv = tv({
  base: 'flex relative justify-center items-center rounded-xl disabled:bg-violet-400 ',
  variants: {
    size: {
      small: 'py-2 px-2 sm:px-4 w-fit h-fit',
      medium: 'py-4 px-16 h-12 w-full max-w-sm sm:w-72 lg:w-96',
      huge: 'py-6 px-16 h-12 w-full',
      inputCompatible: 'w-64 h-10 sm:h-14 sm:w-full'
    },
    color: {
      primary: ` bg-lightPurple py-2 px-4 hover:after:bg-white/25 after:hover:left-0 after:right-0 after:top-0 after:rounded-xl after:absolute
      after:hover:w-full after:w-0 after:transition-all after:duration-300 after:h-full
      disabled:pointer-events-none active:after:w-full active:after:h-full active:after:top-0 after:left-1/2 active:after:left-0
      active:after:bg-white/5`,
      secondary: ` bg-white py-2 px-4 hover:after:bg-primary/25 after:hover:left-0 after:right-0 after:top-0 after:rounded-xl after:absolute
      after:hover:w-full after:w-0 after:transition-all after:duration-300 after:h-full
      disabled:pointer-events-none active:after:w-full active:after:h-full active:after:top-0 after:left-1/2 active:after:left-0
      active:after:bg-primary/5`,
      tertiary: ` bg-secondary py-2 px-4 hover:after:bg-white/25 after:hover:left-0 after:right-0 after:top-0 after:rounded-xl after:absolute
      after:hover:w-full after:w-0 after:transition-all after:duration-300 after:h-full
      disabled:pointer-events-none active:after:w-full active:after:h-full active:after:top-0 after:left-1/2 active:after:left-0
      active:after:bg-white/5`,
      white: ` bg-white py-2 px-4 hover:after:bg-private/25 after:hover:left-0 after:right-0 after:top-0 after:rounded-xl after:absolute
      after:hover:w-full after:w-0 after:transition-all after:duration-300 after:h-full
      disabled:pointer-events-none active:after:w-full active:after:h-full active:after:top-0 after:left-1/2 active:after:left-0
      active:after:bg-private/5`,
      error: ` bg-error py-2 px-4 hover:after:bg-white/25 after:hover:left-0 after:right-0 after:top-0 after:rounded-xl after:absolute
      after:hover:w-full after:w-0 after:transition-all after:duration-300 after:h-full
      disabled:pointer-events-none active:after:w-full active:after:h-full active:after:top-0 after:left-1/2 active:after:left-0
      active:after:bg-white/5`,
      easydark: ` bg-easydark py-2 px-4 hover:after:bg-white/25 after:hover:left-0 after:right-0 after:top-0 after:rounded-xl after:absolute
      after:hover:w-full after:w-0 after:transition-all after:duration-300 after:h-full
      disabled:pointer-events-none active:after:w-full active:after:h-full active:after:top-0 after:left-1/2 active:after:left-0
      active:after:bg-white/5`,
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary'
  }
});

export const buttonContentWrapperTv = tv({
  base: 'relative w-full justify-center m-auto flex gap-x-2 items-center'
});

export const buttonLinkTv = tv({
  base: 'relative z-10 flex items-center',
  variants: {
    color: {
      black: 'text-black',
      white: 'text-white'
    }
  },
  defaultVariants: {
    color: 'black'
  }
});

export const buttonIconTv = tv({
  base: 'relative w-5 h-5 text-white'
});
