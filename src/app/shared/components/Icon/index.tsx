import { ElementType } from 'react';
import { iconTv } from './IconTV';
import { VariantProps } from 'tailwind-variants';
import { Tooltip } from '../Tooltip';

interface IconProps extends VariantProps<typeof iconTv> {
  icon: ElementType;
  className?: string;
  tooltip?: boolean;
  tooltipText?: string;
  onClick?: () => void;
}

export function Icon({
  icon: Icon,
  color,
  size,
  type,
  button,
  tooltip,
  tooltipText,
  collapsableState,
  className,
  ...props
}: IconProps) {
  const icon = (
    <Icon
      className={iconTv({ color, size, type, button, collapsableState, className })}
      {...props}
    />
  );

  const renderIconWithTooltip = (
    <Tooltip isArrow={false} color="white" text={tooltipText!}>
      {icon}
    </Tooltip>
  );

  return tooltip ? renderIconWithTooltip : icon;
}
