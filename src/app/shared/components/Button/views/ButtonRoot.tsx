import { VariantProps } from 'tailwind-variants';
import { buttonRootTv } from '../ButtonTV';
import { ReactNode } from 'react';
import { ButtonLoad } from '~animations/buttonLoad';

interface ButtonRootProps extends VariantProps<typeof buttonRootTv> {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

export function ButtonRoot({
  children,
  disabled,
  isLoading,
  size,
  color,
  className,
  ...props
}: ButtonRootProps) {
  return (
    <button {...props} disabled={disabled} className={buttonRootTv({ size, color, className })}>
      {isLoading ? <ButtonLoad /> : children}
    </button>
  );
}
