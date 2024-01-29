import { tv } from 'tailwind-variants';

export const contentTv = tv({
  base: 'py-1 px-2 rounded max-w-[200px] z-50',
  variants: {
    color: {
      black: 'bg-black',
      white: 'bg-white'
    },
    contentState: {
      withContent: 'bg-transparent',
      withoutContent: 'max-w-[200px]'
    }
  },
  defaultVariants: {
    color: 'black',
    content: 'withoutContent'
  }
});
