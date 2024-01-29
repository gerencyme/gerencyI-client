import { tv } from 'tailwind-variants';

export const dropdawnRootTv = tv({
  base: 'relative inline-block text-left z-50'
});

export const dropdawnMenuButtonTv = tv({
  base: 'w-fit h-fit bg-transparent transition-transform duration-300 hover:translate-y-1 translate-y-0.5 cursor-pointer'
});

export const dropdawnMenuItemsTv = tv({
  base: 'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
});
