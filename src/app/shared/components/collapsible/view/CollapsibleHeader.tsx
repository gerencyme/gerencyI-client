import { ReactNode } from 'react';
import { Title } from '../../Title';
import { CollapsibleHeaderTv } from '../CollapsableTV';

interface CollapsibleHeaderProps {
  title: string;
  children: ReactNode;
}

export function CollapsibleHeader({ title, children: icon }: CollapsibleHeaderProps) {
  return (
    <div className="flex justify-between fixed backdrop-blur-lg z-10">
      <Title
        as="h3"
        title={title}
        color="tertiary"
        size="lg"
        weigth="semi-bold"
        className={CollapsibleHeaderTv()}
      />
      {icon}
    </div>
  );
}
