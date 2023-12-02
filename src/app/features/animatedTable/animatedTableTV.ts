import { tv } from 'tailwind-variants';

export const animatedTableRootTv = tv({
  base: 'duration-1000 pointer-events-none w-full h-64 sm:h-full flex justify-center items-center z-0',
  variants: {
    state: {
      isVisible:
        '-translate-y-36 sm:-translate-y-80 lg:-translate-y-56 xl:-translate-72 2xl:-translate-96',
      notVisible: 'translate-y-0'
    }
  }
});

export const animatedTableContentWrapperTv = tv({
  base: 'relative shadow-2xl shadow-easyblue delay-1000 w-full max-w-7xl h-full max-h-[450px] bg-darkblue px-1 m-auto overflow-x-hidden overflow-y-scroll rounded-2xl',
  variants: {
    state: {
      isVisible: 'animate-crawl',
      notVisible: ''
    }
  }
});

export const animatedTableTv = tv({
  base: 'relative w-full pointer-events-auto sm:max-w-7xl h-full max-h-[450px] m-auto overflow-x-auto overflow-y-scroll rounded-2xl duration-300',
  variants: {
    state: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const animatedTableContentTv = tv({
  base: 'h-6 sm:h-20 flex items-center pl-3 pr-1 w-full bg-easydark sm:px-8 truncate overflow-hidden text-xxs md:text-md',
  variants: {
    position: {
      first: 'sm:pl-16 rounded-tl-2xl rounded-bl-2xl relative',
      last: 'rounded-br-2xl rounded-tr-2xl'
    }
  }
});

export const animatedTableColorIdentifyRootTv = tv({
  base: 'bg-darkblue flex items-center justify-center absolute w-2 sm:w-3 h-4 sm:h-10 rounded-2xl left-0'
});

export const animatedTableBasementTv = tv({
  base: 'table w-full p-1 sm:p-6 text-white bg-darkblue'
});

export const animatedTableHeaderGroupTv = tv({
  base: 'table-header-group border-purple'
});

export const animatedTableHeaderCellGroupTv = tv({
  base: 'table-cell text-left text-xxs md:text-md py-3 pl-3 sm:px-8'
});

export const animatedTablePurpleDividerTv = tv({
  base: 'absolute w-full h-0.5 sm:top-14 top-8 -left-1 bg-purple'
});

export const animatedTableContentRootTv = tv({
  base: 'table-row h-10 sm:hover:-translate-y-2 sm:hover:translate-x-2 duration-300'
});
