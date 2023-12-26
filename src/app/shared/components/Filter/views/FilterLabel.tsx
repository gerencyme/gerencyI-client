import { Text, TextProps } from '../../Text';

interface FilterLabelProps extends TextProps {}

export function FilterLabel({ text, ...props }: FilterLabelProps) {
  return <Text {...props} text={text} weight="light" color="white" size="sm" />;
}
