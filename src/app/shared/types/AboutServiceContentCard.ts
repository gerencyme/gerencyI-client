import { LegacyRef } from 'react';

export type AboutServiceContentCard = {
  blockSize: 'big' | 'medium' | 'small';
  icon: string;
  ref: LegacyRef<HTMLDivElement> | undefined;
  isBigVisible?: boolean;
  isMediumVisible?: boolean;
  isSmallVisible?: boolean;
  side?: 'right' | 'bottom' | 'left';
};
