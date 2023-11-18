'use client';

import { ElementType } from 'react';
import { iconTv } from './IconTV';
import { VariantProps } from 'tailwind-variants';

interface IconProps extends VariantProps<typeof iconTv> {
  icon: ElementType;
  onClick?: () => void;
}

export function Icon({
  icon: Icon,
  color,
  size,
  type,
  button,
  collapsableState,
  ...props
}: IconProps) {
  return <Icon className={iconTv({ color, size, type, button, collapsableState })} {...props} />;
}
