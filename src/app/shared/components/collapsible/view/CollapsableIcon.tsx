import { Icon } from '../../Icon';
import { GoPlus } from 'react-icons/go';

interface CollapsableIconProps {
  isOpen: boolean;
}

export function CollapsableIcon({ isOpen }: CollapsableIconProps) {
  const collapsableStates = isOpen ? 'open' : 'close';

  return <Icon icon={GoPlus} size="medium" color="white" collapsableState={collapsableStates} />;
}
