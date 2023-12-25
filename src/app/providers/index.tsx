// Provedores devem ser adicionados aqui
'use client';

import { ReactNode } from 'react';
import { AppThemeProvider } from '~contexts/ThemeProvider';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../shared/services/reactQuery';
import { SelectColorProvider } from '../shared/contexts/SelectColorContext';
import { DraftModeProvider } from '../shared/contexts/DraftModeContext';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const composeProviders =
    (
      ...providers: {
        ({ children }: any): JSX.Element;
      }[]
    ) =>
    (props: { children: any }) =>
      providers.reduceRight(
        (children, Provider) => <Provider {...props}>{children}</Provider>,
        props.children
      );

  const AllProviders = composeProviders(AppThemeProvider, DraftModeProvider, SelectColorProvider);

  return (
    <QueryClientProvider client={queryClient}>
      <AllProviders>{children}</AllProviders>
    </QueryClientProvider>
  );
}
