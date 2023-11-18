import { ElementType } from 'react';
import { Icon } from '~shared/components/Icon';

interface IconRepresentationProps {
  icon: ElementType;
}

export function IconRepresentation({ icon }: IconRepresentationProps) {
  return <Icon icon={icon} type="representation" />;
}
