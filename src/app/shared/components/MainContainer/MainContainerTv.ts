import { tv } from 'tailwind-variants';

export const mainContainerTv = tv({
  base: 'relative p-4 lg:p-8 transition-colors w-screen min-h-screen h-full',
  variants: {
    bgTheme: {
      dark: 'bg-private',
      light: 'bg-gray-100'
    }
  }
});
