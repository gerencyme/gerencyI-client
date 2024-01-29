'use client';

import { useLottie, LottieOptions } from 'lottie-react';
import pageLoader from './pageLoader.json';

export function PageLoader() {
  const options: LottieOptions = {
    animationData: pageLoader,
    autoplay: true
  };

  const { View } = useLottie(options);

  return (
    <div className="absolute inset-0 bg-[#3B2C67] overflow-hidden z-50">
      <div className="absolute w-full max-w-7xl m-auto top-44 lg:top-0 inset-0">{View}</div>
    </div>
  );
}
