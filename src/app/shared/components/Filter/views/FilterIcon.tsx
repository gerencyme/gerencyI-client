import { Icon } from '../../Icon';
import { IoMdArrowDropdown } from 'react-icons/io';
import { filterIconTv } from '../FilterTV';

export function FilterIcon() {
  return (
    <Icon
      icon={IoMdArrowDropdown}
      color="white"
      aria-hidden="true"
      size="medium"
      dropdown="base"
      className={filterIconTv()}
    />
  );
}
