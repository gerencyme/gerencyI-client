import { tv } from 'tailwind-variants';

export const faqRootTv = tv({
  base: 'py-1 lg:py-4 flex flex-col items-center justify-center gap-2 min-[1520px]:gap-8 cursor-default w-full lg:max-w-2xl',
  variants: {
    page: {
      register: 'min-[1520px]:absolute m-0 right-12 top-1/4 hidden md:flex',
      home: 'relative hidden md:flex'
    }
  },
  defaultVariants: {
    page: 'register'
  }
});

export const FaqContentTv = tv({
  base: 'flex flex-col h-full'
});
