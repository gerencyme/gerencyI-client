import { tv } from 'tailwind-variants';

export const areaChartCompTv = tv({
  base: 'duration-500 pointer-events-auto',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    },
    bgColor: {
      easyblue:
        'dark:bg-easyblue bg-gray-100 rounded-2xl sm:hover:translate-x-2 sm:hover:-translate-y-2 ring-2 dark:ring-purple  ring-gray-200',
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    bgColor: 'easyblue'
  }
});

export const pieChartCompTv = tv({
  base: 'z-50 ring-2 mt-4 dark:ring-purple ring-gray-200 duration-500 pointer-events-auto dark:bg-easyblue bg-gray-100 rounded-2xl sm:hover:translate-x-2 sm:hover:-translate-y-2',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const bestSellersTv = tv({
  base: 'w-full h-fit mt-4 top-[360px] flex flex-col gap-2 md:gap-4 duration-500 pointer-events-auto z-50 p-4 duration-500 items-center justify-center overflow-x-scroll rounded-2xl',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    },
    hoverState: {
      hovered: 'sm:hover:translate-x-2 sm:hover:-translate-y-2',
      notHovered: ''
    },
    bgColor: {
      easyblue: 'dark:bg-easyblue bg-gray-100 ring-2 dark:ring-purple ring-gray-200',
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    hoverState: 'notHovered',
    bgColor: 'easyblue',
    cursor: 'default'
  }
});

export const simpleAreaChartTv = tv({
  base: 'z-50 mt-4 duration-500 pointer-events-auto',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    },
    visibility: {
      hidden:
        'hidden md:block dark:bg-easyblue bg-gray-100 ring-2 dark:ring-purple ring-gray-200 rounded-2xl sm:hover:translate-x-2 sm:hover:-translate-y-2',
      block: 'block'
    }
  },
  defaultVariants: {
    visibility: 'hidden'
  }
});

export const bestSellersContentTv = tv({
  base: 'rounded-md p-2 relative flex flex-col items-start justify-center duration-500 gap-4 w-36 h-20 ring-1 dark:ring-purple  ring-gray-200',
  variants: {
    bgColor: {
      easyblue: 'dark:bg-gradient-hero bg-gradient-light-hero',
      transparent: 'dark:bg-gradient-hero bg-gradient-light-hero'
    },
    cursor: {
      pointer: 'cursor-pointer hover:scale-105',
      default: 'cursor-default'
    }
  }
});

export const bestSellersPercentRootTv = tv({
  base: 'flex items-center bg-green-800 text-lime rounded-sm p-0.5'
});

export const bestSellersTitleTv = tv({
  base: 'text-xs md:text-md xl:text-lg'
});

export const bestSellersContentWrapperTv = tv({
  base: 'flex w-full gap-6 md:gap-9 justify-start'
});

export const bestSellersHeroTv = tv({
  base: 'absolute -top-4 -right-4'
});

export const bestSellersFooterTv = tv({
  base: 'flex items-center gap-2'
});
