import { Icon } from '../Icon';
import { AiOutlineLoading } from 'react-icons/ai';

export function Spinner() {
  return (
    <Icon
      icon={AiOutlineLoading}
      color="white"
      size="small"
      className="animate-spin absolute left-1/2"
    />
  );
}
