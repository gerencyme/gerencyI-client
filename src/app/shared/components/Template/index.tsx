import { ReactNode } from 'react';
import { templateTv } from './TemplateTV';
import { VariantProps } from 'tailwind-variants';

interface TemplateProps extends VariantProps<typeof templateTv> {
  children: ReactNode;
  className?: string;
}

export function Template({ children, overflow, direction, className }: TemplateProps) {
  return <div className={templateTv({ className, overflow, direction })}>{children}</div>;
}
