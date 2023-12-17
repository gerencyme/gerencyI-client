import { ReactNode } from 'react';
import { avatarRootTv } from '../AvatarTV';
import { VariantProps } from 'tailwind-variants';

interface AvatarRootProps extends VariantProps<typeof avatarRootTv> {
  children: ReactNode;
}

export function AvatarRoot({ children, size }: AvatarRootProps) {
  return <div className={avatarRootTv({ size })}>{children}</div>;
}
