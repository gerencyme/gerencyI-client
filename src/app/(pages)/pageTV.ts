import { tv } from 'tailwind-variants';

export const homePageTv = tv({
  base: 'relative m-auto flex flex-col gap-4 justify-center items-center w-full max-w-7xl animate-opacityOn'
});

export const homePageTitleTv = tv({
  base: 'w-full max-w-3xl text-center m-auto text-xl sm:text-2xl'
});

export const homePageSubtitleTv = tv({
  base: 'dark:text-white/75 text-black/75 duration-500 text-md sm:text-xl w-full md:w-96 max-w-3xl text-center m-auto'
});

export const homePageSlogan = tv({
  base: 'dark:text-white text-black duration-500 text-md sm:text-xl w-full text-center m-auto pb-10'
});

export const homePageGoToSectionButtonTv = tv({
  base: 'relative md:top-36 lg:top-16'
});

export const homePageSystemDemoTv = tv({
  base: 'lg:absolute w-full -top-48'
});

export const homePageProductCardWrappetTv = tv({
  base: 'relative w-full max-w-[300px] h-full m-auto'
});

export const homePageSecondarySloganTv = tv({
  base: 'text-secondary font-semiBold'
});

export const homePageBrightnessTv = tv({
  base: 'dark:bg-easy-brightness bg-easy-light-brightness'
});
