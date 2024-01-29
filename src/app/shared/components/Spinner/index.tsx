import { Icon } from '../Icon';
import { AiOutlineLoading } from 'react-icons/ai';
import { spinnerTv } from './SpinnerTV';

export function Spinner() {
  return <Icon icon={AiOutlineLoading} color="white" size="small" className={spinnerTv()} />;
}
