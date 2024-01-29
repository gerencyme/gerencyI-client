import { tv } from 'tailwind-variants';

export const darkModeRootTv = tv({
  base: 'w-10 h-6 duration-500 rounded-full flex items-center justify-center relative dark:bg-lightPurple bg-gray-50 active:scale-95'
});

export const darkModeIconTv = tv({
  base: 'flex items-center cursor-pointer justify-center w-5 h-5 ring-1 dark:ring-purple ring-gray-200 rounded-full dark:bg-purple bg-gray-50 transition-all duration-500 absolute',
  variants: {
    darkMode: {
      isDarkMode: 'translate-x-2',
      notDarkMode: '-translate-x-2'
    }
  }
});
