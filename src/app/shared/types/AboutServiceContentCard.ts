import { LegacyRef } from 'react';

export type AboutServiceContentCard = {
  id: number;
  blockSize: 'big' | 'medium' | 'small';
  icon: string;
  text: string;
  ref: LegacyRef<HTMLDivElement> | undefined;
  isBigVisible?: boolean;
  isMediumVisible?: boolean;
  isSmallVisible?: boolean;
  side?: 'right' | 'bottom' | 'left';
};
