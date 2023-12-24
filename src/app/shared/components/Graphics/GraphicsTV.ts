import { tv } from 'tailwind-variants';

export const areaChartCompTv = tv({
  base: 'duration-300 pointer-events-auto bg-easyblue rounded-2xl sm:hover:translate-x-2 sm:hover:-translate-y-2 ring-2 ring-purple',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const pieChartCompTv = tv({
  base: 'z-50 ring-2 mt-4 ring-purple duration-300 pointer-events-auto bg-easyblue rounded-2xl sm:hover:translate-x-2 sm:hover:-translate-y-2',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const bestSellersTv = tv({
  base: 'w-full h-fit mt-4 top-[360px] flex flex-col gap-4 duration-300 pointer-events-auto z-50 p-4 items-center justify-center overflow-x-scroll rounded-2xl',
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
      easyblue: 'bg-easyblue ring-2 ring-purple',
      easydark: 'bg-easydark'
    }
  },
  defaultVariants: {
    hoverState: 'notHovered',
    bgColor: 'easyblue',
    cursor: 'default'
  }
});

export const simpleAreaChartTv = tv({
  base: 'z-50 ring-2 mt-4 ring-purple duration-300 pointer-events-auto bg-easyblue rounded-2xl sm:hover:translate-x-2 sm:hover:-translate-y-2 hidden md:block',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const bestSellersContent = tv({
  base: 'rounded-md p-2 relative flex flex-col items-start justify-center gap-4 w-36 h-20 ring-1 ring-purple',
  variants: {
    bgColor: {
      easyblue: 'bg-easydark',
      easydark: 'bg-darkblue'
    },
    cursor: {
      pointer: 'cursor-pointer hover:scale-105',
      default: 'cursor-default'
    }
  }
});

export const bestSellersPercentRoot = tv({
  base: 'flex items-center bg-green-800 text-lime rounded-sm p-0.5'
});
