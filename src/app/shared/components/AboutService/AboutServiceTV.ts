import { tv } from 'tailwind-variants';

export const aboutServiceBlockIconTv = tv({
  base: 'flex flex-col justify-center ring-1 ring-purple items-center rounded-sm relative',
  variants: {
    blockSize: {
      big: 'p-4 sm:p-8 bg-bigBlockIcon',
      medium: 'p-2 sm:p-4 bg-mediumBlockIcon',
      small: 'p-0.5 sm:p-2 bg-smallBlockIcon'
    }
  },
  defaultVariants: {
    blockSize: 'medium'
  }
});

export const aboutServiceInfoCardTv = tv({
  base: 'absolute w-0 h-20 md:h-28 lg:h-40 overflow-hidden delay-700 duration-1000 p-2 md:p-4 lg:p-8 ring-1 ring-purple rounded-lg flex flex-col items-center justify-center gap-2 lg:gap-4 text-center',
  variants: {
    state: {
      isVisible: 'opacity-100 w-24 md:w-[190px] lg:w-[240px]',
      hidden: 'opacity-0'
    },
    side: {
      left: 'right-[65px] sm:right-[98px] md:right-[152px] lg:right-[275px]',
      right: 'left-[50px] sm:left-[65px] md:left-[125px] lg:left-[260px]',
      bottom: 'top-[45px] sm:top-[58px] md:top-[66px] lg:top-[68px] -translate-x-[40%]'
    }
  },
  defaultVariants: {
    state: 'hidden'
  }
});

export const aboutServiceCardInfoLineTv = tv({
  base: 'relative duration-1000 bg-purple h-0.5',
  variants: {
    state: {
      isVisible: 'w-4 md:w-16 lg:w-36',
      hidden: 'w-0'
    },
    side: {
      left: 'top-8 -translate-x-[17px] md:-translate-x-[64px] lg:-translate-x-[131px] xl:-translate-x-[130px]',
      right: 'top-4 md:top-8 translate-x-[33px] sm:left-[16px] md:left-[27px] lg:left-[82px]',
      bottom: 'hidden'
    }
  }
});

export const aboutServiceHeaderTv = tv({
  base: 'w-full h-fit pt-32 min-[540px]:pt-52 md:pt-44'
});

export const aboutServiceHeaderTitleTv = tv({
  base: 'text-lg md:text-xl lg:text-2xl font-rosarivo text-center'
});

export const aboutServiceHeaderSubtitleTv = tv({
  base: 'text-sm lg:text-md text-white/75 text-center pt-4'
});

export const aboutServiceHeroTv = tv({
  base: 'pointer-events-none py-12 w-full sm:h-fit'
});

export const aboutServiceFooterTv = tv({
  base: 'w-full h-fit flex flex-col justify-center items-center'
});

export const aboutServiceBlockIconHeroTv = tv({
  base: 'animate-[opacityOn_5000ms_ease-in] w-4 md:w-6 lg:w-fit'
});

export const aboutServiceBlockIconTextTv = tv({
  base: 'h-full text-[8px] text-white md:text-sm text-clip overflow-hidden w-full md:w-44 lg:w-60 leading-3 animate-[opacityOn_5000ms_ease-in]'
});

export const aboutServiceBlockIconRootTv = tv({
  base: 'flex flex-col justify-center items-center'
});

export const aboutServiceBlockIconPurpleLineTv = tv({
  base: 'relative duration-[2000ms] bg-purple w-0.5',
  variants: {
    state: {
      isVisible: 'h-6',
      hidden: 'h-0'
    }
  },
  defaultVariants: {
    state: 'hidden'
  }
});
