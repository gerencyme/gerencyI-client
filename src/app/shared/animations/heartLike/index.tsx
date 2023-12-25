'use client';

import { useLottie, LottieOptions } from 'lottie-react';
import heartLike from './heartLike.json';
import { useState } from 'react';
import UnfilledHeart from '~assets/svg/unfilledHeart.svg';
import Image from 'next/image';
import { VariantProps } from 'tailwind-variants';
import { filledHeartTv, unfilledHeartTv } from './HeartLikeTV';

export interface HeartLikeProps extends VariantProps<typeof filledHeartTv> {
  isLiked: boolean;
  handleLike: () => void;
}

export function HeartLike({ isLiked = true, state, handleLike }: HeartLikeProps) {
  const [isHeartFilled, setIsHeartFilled] = useState(isLiked);

  const filledHeartState: typeof state = isHeartFilled ? 'isHeartFilled' : 'isNotHeartFilled';

  const options: LottieOptions = {
    animationData: heartLike,
    autoplay: true,
    loop: 1
  };

  const { View } = useLottie(options);

  const handleClick = () => {
    handleLike();
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <>
      <Image
        className={unfilledHeartTv({ state: filledHeartState })}
        onClick={handleClick}
        alt="decalque do coração de curtir"
        src={UnfilledHeart}
      />
      <button onClick={handleClick} className={filledHeartTv({ state: filledHeartState })}>
        {View}
      </button>
    </>
  );
}
