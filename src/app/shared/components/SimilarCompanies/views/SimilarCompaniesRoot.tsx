import { ReactNode } from 'react';
import { Template } from '../../Template';

interface SimilarCompaniesRootProps {
  children: ReactNode;
}

export function SimilarCompaniesRoot({ children }: SimilarCompaniesRootProps) {
  return <Template overflow="scroll-y">{children}</Template>;
}
