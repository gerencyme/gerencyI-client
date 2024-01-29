import { Icon } from '../../Icon';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { VariantProps } from 'tailwind-variants';
import { searchIconTV } from '../SearchTV';

interface SearchIconProps extends VariantProps<typeof searchIconTV> {
  isLoading: boolean;
}

export function SearchIcon({ isLoading, loadState }: SearchIconProps) {
  const currentIcon = isLoading ? AiOutlineLoading3Quarters : IoSearchOutline;
  const isLoadState: typeof loadState = isLoading ? 'isLoading' : 'notLoading';

  return (
    <Icon
      icon={currentIcon}
      size="medium"
      color="white"
      className={searchIconTV({ loadState: isLoadState })}
    />
  );
}
