'use client';

import { HtmlHTMLAttributes, ReactNode } from 'react';
import { backButtonTv, templateTv } from './TemplateTV';
import { VariantProps } from 'tailwind-variants';
import { useRouter } from 'next/navigation';
import { Icon } from '../Icon';
import { FaArrowCircleLeft } from 'react-icons/fa';

export interface TemplateProps
  extends VariantProps<typeof templateTv>,
    HtmlHTMLAttributes<HTMLDivElement> {
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
  bgColor,
  goBackState,
  goBack = false,
  ...props
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
    <div
      {...props}
      className={templateTv({
        className,
        overflow,
        direction,
        height,
        goBackState: backState,
        bgColor
      })}
    >
      {goBack && backButton}
      {children}
    </div>
  );
}
