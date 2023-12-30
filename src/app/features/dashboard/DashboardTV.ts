import { tv } from 'tailwind-variants';

export const dashboardHeaderRootTv = tv({
  base: 'flex flex-col w-full max-w-7xl m-auto gap-2 md:gap-4'
});

// HEADER
export const dashboardHeaderWrapperTv = tv({
  base: 'relative w-full h-full max-h-[540px] p-2 md:p-4 flex flex-col gap-2 md:gap-4 mt-4 overflow-hidden'
});

export const dashboardHeaderProfileTv = tv({
  base: 'flex gap-2 md:gap-4 items-center justify-between flex-wrap md:flex-wrap sm:pt-24'
});

export const dashboardHeaderDailyProfitTv = tv({
  base: 'flex w-full h-full items-center justify-between flex-wrap'
});

//GRAPHICS
export const DashboardGraphicsWrapperTv = tv({
  base: 'flex gap-2 md:gap-4 h-[480px] mt-4 pb-4'
});

export const DashboardGraphicsLeftSideTv = tv({
  base: 'flex w-full md:w-[73%] md:h-full flex-col gap-2 md:gap-4'
});

export const DashboardGraphicsBestSellersTv = tv({
  base: 'h-72 w-full md:w-[83%] m-auto'
});

//TABLE
export const DashboardTableTv = tv({
  base: 'flex flex-col gap-2 md:gap-4 pb-4'
});

export const DashboardTableFiltersTv = tv({
  base: 'flex gap-2 md:gap-4 justify-between items-center'
});
