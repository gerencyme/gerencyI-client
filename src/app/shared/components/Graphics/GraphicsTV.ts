import { tv } from 'tailwind-variants';

export const areaChartCompTv = tv({
  base: 'duration-300 pointer-events-auto',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const pieChartCompTv = tv({
  base: 'absolute top-0 right-0 z-50 duration-300 pointer-events-auto',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const bestSellersTv = tv({
  base: 'w-fit h-fit absolute right-10 top-80 flex flex-col gap-4 duration-300 z-50',
  variants: {
    pressableState: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const bestSellersContent = tv({
  base: 'bg-easydark rounded-md p-2 relative flex flex-col items-start justify-center gap-4 w-36 h-20 ring-1 ring-purple'
});

export const bestSellersPercentRoot = tv({
  base: 'flex items-center bg-green-800 text-lime rounded-sm p-0.5'
});
