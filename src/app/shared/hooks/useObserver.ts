import { MutableRefObject, useEffect, useState } from 'react';

/**
 *
 * @param ref reference to object that needs observation
 * @returns isVisible is the state active of visible object referencied
 */

export function useObserver<T extends Element>(ref: MutableRefObject<T | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return {
    isVisible
  };
}
