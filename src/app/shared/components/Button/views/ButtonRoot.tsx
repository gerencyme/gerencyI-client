import { VariantProps } from 'tailwind-variants';
import { buttonRootTv } from '../ButtonTV';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonLoad } from '~animations/buttonLoad';

type ButtonRootProps = {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
} & VariantProps<typeof buttonRootTv> &
  ButtonHTMLAttributes<HTMLButtonElement>;

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
