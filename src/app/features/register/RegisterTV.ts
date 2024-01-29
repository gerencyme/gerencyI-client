import { tv } from 'tailwind-variants';

export const registerRootTv = tv({
  base: 'flex flex-col w-fit items-center sm:items-start max-w-4xl relative gap-2 min-[1520px]:p-8'
});

export const registerHeaderTv = tv({
  base: 'flex flex-col min-[1520px]:relative min-[1520px]:left-14 pl-1 sm:pl-0'
});

export const registerRedirectBackTv = tv({
  base: 'flex cursor-default min-[1520px]:relative min-[1520px]:left-16'
});

export const registerRedirectBackLinkTv = tv({
  base: 'hover:brightness-110 cursor-pointer ml-1 text-xs md:text-md'
});

export const renderStrongPasswordMessageTv = tv({
  base: 'flex items-center absolute -bottom-5 cursor-default gap-1'
});

export const registerFormRootTv = tv({
  base: 'flex flex-col items-center gap-5 lg:gap-6 m-auto'
});

export const registerDualInputsTv = tv({
  base: 'flex justify-center items-center flex-wrap gap-5 lg:gap-8'
});

export const registerButonLabelTv = tv({
  base: 'text-xs sm:text-sm md:text-md lg:text-lg'
});

export const registerHeaderTitleTv = tv({
  base: 'text-lg md:text-xl min-[1520px]:text-2xl'
});

export const registerHeaderSubtitleTv = tv({
  base: 'dark:text-white/75 text-black/50 text-md md:text-lg min-[1520px]:text-2xl'
});
