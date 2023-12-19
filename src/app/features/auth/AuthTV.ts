import { tv } from 'tailwind-variants';

export const authRootTv = tv({
  base: 'relative animate-opacityOn flex flex-col gap-2 lg:gap-8 w-full max-w-7xl h-fit m-auto p-2 lg:p-6'
});

export const authFormTv = tv({
  base: 'flex flex-col gap-2 lg:gap-8 w-full h-fit items-center pt-2 min-[1520px]:pt-20'
});

export const recoveryButtonTv = tv({
  base: 'absolute top-2 lg:top-12 right-2 lg:right-12'
});

export const authHeaderTv = tv({
  base: 'flex flex-col min-[1520px]:relative min-[1520px]:left-14 min-[1520px]:top-14 pl-1 sm:pl-0'
});

export const authRedirectBackTv = tv({
  base: 'flex cursor-default w-full min-[1520px]:absolute min-[1520px]:top-72 min-[1520px]:left-20'
});
