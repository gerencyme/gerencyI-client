'use client';

import { ReactNode } from 'react';
import { backButtonTv, templateTv } from './TemplateTV';
import { VariantProps } from 'tailwind-variants';
import { useRouter } from 'next/navigation';
import { Icon } from '../Icon';
import { FaArrowCircleLeft } from 'react-icons/fa';

interface TemplateProps extends VariantProps<typeof templateTv> {
  children: ReactNode;
  className?: string;
  goBack?: boolean;
}

export function Template({
  children,
  overflow,
  direction,
  className,
  height,
  goBackState,
  goBack = false
}: TemplateProps) {
  const { back } = useRouter();

  const backState: typeof goBackState = goBack ? 'hasGoBack' : 'haventGoBack';

  const backButton = (
    <Icon
      className={backButtonTv()}
      onClick={back}
      icon={FaArrowCircleLeft}
      size="medium"
      color="white"
    />
  );

  return (
    <div className={templateTv({ className, overflow, direction, height, goBackState: backState })}>
      {goBack && backButton}
      {children}
    </div>
  );
}
