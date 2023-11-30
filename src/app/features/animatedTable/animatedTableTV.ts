import { tv } from 'tailwind-variants';

export const animatedTableRootTv = tv({
  base: 'duration-1000 pointer-events-none w-full h-full flex justify-center items-center',
  variants: {
    state: {
      isVisible: '-translate-y-96',
      notVisible: 'translate-y-0'
    }
  }
});

export const animatedTableContentWrapperTv = tv({
  base: 'relative shadow-2xl shadow-darkblue delay-1000 w-full max-w-7xl h-full max-h-[450px] bg-darkblue px-1 m-auto overflow-hidden rounded-2xl',
  variants: {
    state: {
      isVisible: 'animate-crawl',
      notVisible: ''
    }
  }
});

export const animatedTableTv = tv({
  base: 'relative w-full pointer-events-auto max-w-7xl h-full max-h-[450px] m-auto overflow-x-auto overflow-y-scroll rounded-2xl duration-300',
  variants: {
    state: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const animatedTableContentTv = tv({
  base: 'h-20 flex items-center bg-easydark px-8 truncate',
  variants: {
    position: {
      first: 'pl-16 rounded-tl-2xl rounded-bl-2xl relative',
      last: 'rounded-br-2xl rounded-tr-2xl'
    }
  }
});

export const animatedTableColorIdentifyRootTv = tv({
  base: 'bg-darkblue flex items-center justify-center absolute w-3 h-10 rounded-2xl left-0'
});

export const animatedTableBasementTv = tv({
  base: 'table w-full p-6 text-white bg-darkblue'
});

export const animatedTableHeaderGroupTv = tv({
  base: 'table-header-group border-purple'
});

export const animatedTableHeaderCellGroupTv = tv({
  base: 'table-cell text-left pb-6 px-8'
});

export const animatedTablePurpleDividerTv = tv({
  base: 'absolute w-full h-0.5 top-14 -left-1 bg-purple'
});

export const animatedTableContentRootTv = tv({
  base: 'table-row h-10 hover:-translate-y-2 hover:translate-x-2 duration-300'
});
