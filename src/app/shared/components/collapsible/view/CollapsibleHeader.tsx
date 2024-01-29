import { ReactNode } from 'react';
import { Title } from '../../Title';
import { CollapsibleHeaderTv } from '../CollapsableTV';

interface CollapsibleHeaderProps {
  title: string;
  children: ReactNode;
}

export function CollapsibleHeader({ title, children: icon }: CollapsibleHeaderProps) {
  return (
    <div className="flex justify-between">
      <Title
        as="h3"
        title={title}
        color="secondary"
        size="md"
        weight="bold"
        className={CollapsibleHeaderTv()}
      />
      {icon}
    </div>
  );
}
