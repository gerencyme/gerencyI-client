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
