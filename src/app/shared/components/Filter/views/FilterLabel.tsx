import { Text, TextProps } from '../../Text';
import { filterLabelTv } from '../FilterTV';

interface FilterLabelProps extends TextProps {}

export function FilterLabel({ text, ...props }: FilterLabelProps) {
  return <Text {...props} text={text} weight="light" size="sm" className={filterLabelTv()} />;
}
