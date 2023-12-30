import { HtmlHTMLAttributes, ReactNode } from 'react';
import { avatarRootTv } from '../AvatarTV';
import { VariantProps } from 'tailwind-variants';

interface AvatarRootProps
  extends VariantProps<typeof avatarRootTv>,
    HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export function AvatarRoot({ children, size, className, ...props }: AvatarRootProps) {
  return (
    <div {...props} className={avatarRootTv({ size, className })}>
      {children}
    </div>
  );
}
