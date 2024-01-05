import { tv } from 'tailwind-variants';

export const animatedTableRootTv = tv({
  base: 'duration-1000 pointer-events-none w-full h-64 sm:h-[650px] flex justify-center items-center z-0',
  variants: {
    state: {
      isVisible:
        '-translate-y-36 sm:-translate-y-36 lg:-translate-y-56 xl:-translate-72 2xl:-translate-96',
      notVisible: 'translate-y-0'
    }
  }
});

export const animatedTableContentWrapperTv = tv({
  base: 'relative shadow-2xl pointer-events-auto shadow-easyblue delay-1000 w-full max-w-7xl h-full max-h-[450px] bg-darkblue px-1 m-auto overflow-x-hidden overflow-y-scroll rounded-2xl',
  variants: {
    state: {
      isVisible: 'animate-crawl',
      notVisible: ''
    }
  }
});

export const animatedTabledGraphicsTitletv = tv({
  base: 'text-center py-3 text-sm md:text-md xl:text-xl'
});

export const animatedTabledNiddleContenttv = tv({
  base: 'flex gap-4 w-full items-center justify-center h-72 py-4'
});
