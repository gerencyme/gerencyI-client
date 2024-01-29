import { tv } from 'tailwind-variants';

export const tableRootTv = tv({
  base: 'relative w-full pointer-events-auto sm:max-w-7xl h-full max-h-[450px] m-auto overflow-x-auto overflow-y-scroll rounded-2xl duration-300',
  variants: {
    state: {
      isPressable: 'scale-95',
      notPressable: 'scale-100'
    }
  }
});

export const tableWrapperTv = tv({
  base: 'w-fit overflow-hidden dark:bg-private bg-gray-50 rounded-2xl'
});

export const tableBasementTv = tv({
  base: 'table min-h-[180px] w-full p-1 sm:p-6 duration-500 dark:text-white text-black dark:bg-darkblue bg-gray-50'
});

export const tableHeaderGroupTv = tv({
  base: 'table-header-group border-purple'
});

export const tableHeaderCellGroupTv = tv({
  base: 'table-cell text-left text-xxs md:text-md py-3 pl-3 sm:px-8'
});

export const tablePurpleDividerTv = tv({
  base: 'absolute w-full h-0.5 sm:top-14 top-8 -left-1 bg-purple md:top-16'
});

export const tableContentRootTv = tv({
  base: 'table-row h-10 sm:hover:-translate-y-2 sm:hover:translate-x-2 duration-300'
});

export const tableContentTv = tv({
  base: 'h-6 sm:h-20 flex items-center pl-3 pr-1 w-full duration-500 dark:bg-easydark bg-gray-200 sm:px-8 truncate overflow-hidden text-xxs md:text-md',
  variants: {
    position: {
      first: 'sm:pl-16 rounded-tl-2xl rounded-bl-2xl relative',
      last: 'rounded-br-2xl rounded-tr-2xl'
    }
  }
});

export const tableColorIdentifyRootTv = tv({
  base: 'duration-500 dark:bg-darkblue bg-gray-50 flex items-center justify-center absolute w-2 sm:w-3 h-4 sm:h-10 rounded-2xl left-0'
});

export const tableFallbackWrapperTv = tv({
  base: 'absolute w-full left-0'
});

export const tableFallbackTextTv = tv({
  base: 'text-white font-bold text-lg md:text-xl text-center'
});

export const tableCellTv = tv({
  base: 'table-cell py-1 sm:py-4 sm:w-72'
});

export const tableColorIdentityTv = tv({
  base: 'w-0.5 sm:w-1 h-2 sm:h-6 rounded-2xl'
});
