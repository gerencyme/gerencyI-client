'use client';

import '~global/styles/globals.css';
import '../global/styles/scrollbar.css';
import { Providers } from './providers';
import { MainContainer } from './shared/components/MainContainer';
import { checkPublickRoute } from './shared/utils/checkPublickRoute';
import { usePathname } from 'next/navigation';
import { RouteValidation } from './shared/components/RouteValidation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const isPublicPage = checkPublickRoute(pathName!);
  return (
    <html lang="pt-BR">
      <title>GerencyI</title>

      <body>
        <Providers>
          <MainContainer>
            {isPublicPage && <RouteValidation.PublicRoute>{children}</RouteValidation.PublicRoute>}
            {!isPublicPage && (
              <RouteValidation.PrivateRoute>{children}</RouteValidation.PrivateRoute>
            )}
          </MainContainer>
        </Providers>
      </body>
    </html>
  );
}
