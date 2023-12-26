import { tv } from 'tailwind-variants';

export const dropdownMenuContentTv = tv({
  base: 'min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
});

export const dropdownMenuRadioItemTv = tv({
  base: 'text-sm transition-colors leading-none rounded-md flex items-center h-6 px-1 relative pl-6 select-none outline-none data-[disabled]:text-gray-600 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary/25'
});

export const dropdownMenuItemIndicatorTv = tv({
  base: 'absolute left-0 w-[25px] inline-flex items-center justify-center'
});
