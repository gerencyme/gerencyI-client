'use client';
import { useLottie } from 'lottie-react';
import buttonLoadAnimation from './buttonLoad.json';

export function ButtonLoad() {
  const options = {
    animationData: buttonLoadAnimation,
    autoplay: true
  };

  const { View } = useLottie(options);

  return <span className="w-16 relative -top-6 h-4">{View}</span>;
}
