import { VariantProps } from 'tailwind-variants';
import { Icon } from '../../Icon';
import { FaCaretRight } from 'react-icons/fa6';
import { tabsNavigationIconTv } from '../TabsNavigationTV';

interface TabsNavigationIconProps extends VariantProps<typeof tabsNavigationIconTv> {
  onClick: () => void;
  isOpen: boolean;
}

export function TabsNavigationIcon({ onClick, isOpen, state }: TabsNavigationIconProps) {
  const iconState: typeof state = isOpen ? 'isOpen' : 'isClosed';

  return (
    <Icon
      icon={FaCaretRight}
      onClick={onClick}
      color="white"
      className={tabsNavigationIconTv({ state: iconState })}
    />
  );
}
