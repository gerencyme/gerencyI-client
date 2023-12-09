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
      id: 1,
      blockSize: 'big',
      icon: Paper,
      ref: bigBlockIconRef,
      isBigVisible,
      side: 'left',
      text: 'Nós anotamos o seu pedido e juntamos à outros semelhantes'
    },
    {
      id: 2,
      blockSize: 'medium',
      icon: Database,
      ref: mediumBlockIconRef,
      isMediumVisible,
      side: 'right',
      text: 'Investigamos na base de dados e criamos um único pedido'
    },
    {
      id: 3,
      blockSize: 'small',
      icon: G,
      ref: smallBlockIconRef,
      isSmallVisible,
      side: 'bottom',
      text: 'Te entregamos o melhor custo benefício disponível na sua localidade'
    }
  ];


  return { cards };
};
