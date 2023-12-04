import { tv } from 'tailwind-variants';

export const aboutServiceBlockIconTv = tv({
  base: 'flex flex-col justify-center ring-1 ring-purple items-center rounded-sm relative',
  variants: {
    blockSize: {
      big: 'p-8 bg-bigBlockIcon',
      medium: 'p-4 bg-mediumBlockIcon',
      small: 'p-2 bg-smallBlockIcon'
    }
  },
  defaultVariants: {
    blockSize: 'medium'
  }
});

export const aboutServiceInfoCardTv = tv({
  base: 'w-0 h-40 overflow-hidden delay-700 duration-1000 p-8 ring-1 ring-purple rounded-lg p-4 flex flex-col items-center justify-center gap-4 text-center',
  variants: {
    state: {
      isVisible: 'opacity-100 w-[240px]',
      hidden: 'opacity-0'
    },
    side: {
      left: 'relative -translate-x-0',
      right: 'translate-y-24 absolute left-[260px]',
      bottom: 'relative top-[323px] left-[200px] delay-1000 h-fit w-fit'
    }
  },
  defaultVariants: {
    state: 'hidden'
  }
});

export const aboutServiceCardInfoLineTv = tv({
  base: 'duration-1000 bg-purple h-0.5',
  variants: {
    state: {
      isVisible: 'w-40',
      hidden: 'w-0'
    },
    side: {
      left: 'translate-y-10',
      right: 'absolute top-44 left-[100px]',
      bottom: 'hidden'
    }
  }
});
