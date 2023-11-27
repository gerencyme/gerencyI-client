import { ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { tabsNavigationRootTv } from '../TabsNavigationTV';

interface TabsNavigationRootProps extends VariantProps<typeof tabsNavigationRootTv> {
  children: ReactNode;
  isOpen: boolean;
}

export function TabsNavigationRoot({ children, isOpen, state }: TabsNavigationRootProps) {
  const activeState: typeof state = isOpen ? 'isOpen' : 'isClose';

  return <ul className={tabsNavigationRootTv({ state: activeState })}>{children}</ul>;
}
