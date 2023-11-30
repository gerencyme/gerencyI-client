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
  weigth,
  color,
  className = '',
  fontFamily,
  ...props
}: TextProps) {
  const Comp = as ?? 'p';

  return (
    <Comp {...props} className={textTv({ size, weigth, color, fontFamily, className })}>
      {text}
    </Comp>
  );
}
