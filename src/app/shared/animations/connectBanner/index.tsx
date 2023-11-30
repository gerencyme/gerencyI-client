'use client';

import { useLottie, LottieOptions } from 'lottie-react';
import connectBanner from './connectBanner.json';
import { useEffect } from 'react';

export function ConnectBanner() {
  const options: LottieOptions = {
    animationData: connectBanner,
    autoplay: true
  };

  const { View, setSpeed } = useLottie(options);

  useEffect(() => {
    setSpeed(0.1);
  }, [setSpeed]);

  return (
    <div className="w-full">
      <div className="w-full">{View}</div>
    </div>
  );
}
