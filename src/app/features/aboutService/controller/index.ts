import { useRef } from 'react';
import { useObserver } from '~shared/hooks/useObserver';
import { AboutServiceContentCard } from '~shared/types/AboutServiceContentCard';
import Paper from '~assets/svg/paper.svg';
import Database from '~assets/svg/database.svg';
import G from '~assets/svg/G.svg';

export const useAboutServiceController = () => {
  const bigBlockIconRef = useRef(null);
  const mediumBlockIconRef = useRef(null);
  const smallBlockIconRef = useRef(null);

  const { isVisible: isBigVisible } = useObserver(bigBlockIconRef);
  const { isVisible: isMediumVisible } = useObserver(mediumBlockIconRef);
  const { isVisible: isSmallVisible } = useObserver(smallBlockIconRef);

  const cards: AboutServiceContentCard[] = [
    {
      blockSize: 'big',
      icon: Paper,
      ref: bigBlockIconRef,
      isBigVisible,
      side: 'left'
    },
    {
      blockSize: 'medium',
      icon: Database,
      ref: mediumBlockIconRef,
      isMediumVisible,
      side: 'right'
    },
    {
      blockSize: 'small',
      icon: G,
      ref: smallBlockIconRef,
      isSmallVisible,
      side: 'bottom'
    }
  ];

  return { cards };
};
