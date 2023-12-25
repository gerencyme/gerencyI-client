import { Text, TextProps } from '~shared/components/Text';

interface ButtonLabelProps extends TextProps {}

export function ButtonLabel({ text, color, size, weight }: ButtonLabelProps) {
  return <Text text={text} size={size} color={color} weight={weight} />;
}
