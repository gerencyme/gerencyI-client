'use client';

import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number;
}

export const useWindow = () => {
  const [width, setWidth] = useState(1024);
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    setWindowSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    windowSize
  };
};
