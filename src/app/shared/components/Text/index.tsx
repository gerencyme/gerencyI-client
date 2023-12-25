import { ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { textTv } from './TextTV';

export interface TextProps extends VariantProps<typeof textTv> {
  text: ReactNode;
  className?: string;
  as?: 'span';
  onClick?: () => void;
}

export function Text({
  as,
  text = '',
  size = 'sm',
  weight,
  color,
  className = '',
  fontFamily,
  ...props
}: TextProps) {
  const Comp = as ?? 'p';

  return (
    <Comp {...props} className={textTv({ size, weight, color, fontFamily, className })}>
      {text}
    </Comp>
  );
}
