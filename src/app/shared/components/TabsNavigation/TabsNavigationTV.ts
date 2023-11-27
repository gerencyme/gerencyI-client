import { tv } from 'tailwind-variants';

export const tabsNavigationRootTv = tv({
  base: 'flex items-center overflow-x-scroll gap-2 lg:gap-4 items-center pr-4 overflow-y-hidden',
  variants: {
    state: {
      isOpen: 'w-full list-group overflow-x-auto scroll-snap',
      isClose: 'w-fit'
    }
  },
  defaultVariants: {
    state: 'isClose'
  }
});

export const tabsNavigationItemsTv = tv({
  base: 'relative',
  variants: {
    state: {
      isOpen: 'flex flex-shrink-0 items-center gap-2 lg:gap-4',
      isClosed: 'w-fit'
    }
  },
  defaultVariants: {
    state: 'isClosed'
  }
});

export const tabsNavigationLinkTv = tv({
  base: 'snap-center',
  variants: {
    state: {
      isActive: 'pointer-events-none',
      notActive: 'pointer-events-auto'
    }
  },
  defaultVariants: {
    state: 'isActive'
  }
});

export const tabsNavigationLabelTv = tv({
  base: 'sm:text-lg lg:text-xl',
  variants: {
    state: {
      isActive: 'text-white',
      notActive: 'text-white/75 hover:text-white'
    }
  },
  defaultVariants: {
    state: 'isActive'
  }
});

export const tabsNavigationIconTv = tv({
  base: 'transition-all duration-700 lg:mt-2 cursor-pointer',
  variants: {
    state: {
      isOpen: 'rotate-180 hover:-translate-x-1',
      isClosed: 'trotate-0 hover:translate-x-1'
    }
  },
  defaultVariants: {
    state: 'isClosed'
  }
});
