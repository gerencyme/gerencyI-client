import { tv } from 'tailwind-variants';

export const registerRootTv = tv({
  base: 'flex flex-col w-fit items-center sm:items-start max-w-4xl relative gap-2 min-[1520px]:p-8'
});

export const registerHeaderTv = tv({
  base: 'flex flex-col min-[1520px]:relative min-[1520px]:left-14 min-[1520px]:top-14 pl-1 sm:pl-0'
});

export const registerRedirectBackTv = tv({
  base: 'flex cursor-default min-[1520px]:absolute min-[1520px]:top-1/3 min-[1520px]:left-24'
});
