'use client';

import { ElementType } from 'react';
import { iconTv } from './IconTV';
import { VariantProps } from 'tailwind-variants';

interface IconProps extends VariantProps<typeof iconTv> {
  icon: ElementType;
  className?: string;
  onClick?: () => void;
}

export function Icon({
  icon: Icon,
  color,
  size,
  type,
  button,
  collapsableState,
  className,
  ...props
}: IconProps) {
  return (
    <Icon
      data-testid="input-icon"
      className={iconTv({ color, size, type, button, collapsableState, className })}
      {...props}
    />
  );
}
