'use client';

import { ReactNode, useRef } from 'react';
import { serviceCardRootTV } from '../ServiceCardTV';
import ParallaxTilt from 'react-parallax-tilt';
import { useObserver } from '~hooks/useObserver';
import { VariantProps } from 'tailwind-variants';

interface ServiceCardRootProps extends VariantProps<typeof serviceCardRootTV> {
  children: ReactNode;
}

export function ServiceCardRoot({ children, state }: ServiceCardRootProps) {
  const serviceCard = useRef(null);

  const { isVisible } = useObserver(serviceCard);

  const isVisibeState: typeof state = isVisible ? 'isVisible' : 'notVisible';

  return (
    <div ref={serviceCard}>
      <ParallaxTilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className={serviceCardRootTV({ state: isVisibeState })}
      >
        {children}
      </ParallaxTilt>
    </div>
  );
}
