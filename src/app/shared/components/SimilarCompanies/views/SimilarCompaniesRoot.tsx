import { ReactNode } from 'react';
import { Template, TemplateProps } from '../../Template';

interface SimilarCompaniesRootProps {
  children: ReactNode;
  className?: string;
  bgColor?: Partial<TemplateProps['bgColor']>;
}

export function SimilarCompaniesRoot({ children, bgColor, className }: SimilarCompaniesRootProps) {
  return (
    <Template className={className} bgColor={bgColor} overflow="scroll-y">
      {children}
    </Template>
  );
}
