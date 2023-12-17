'use client';

import '~global/styles/globals.css';
import '~global/styles/scrollbar.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../providers';
import { MainContainer } from '../shared/components/MainContainer';
import { checkPublickRoute } from '../shared/utils/checkPublickRoute';
import { usePathname } from 'next/navigation';
import { RouteValidation } from '../shared/components/RouteValidation';
import { APP_ROUTES } from '../shared/utils/app-routes';
import { Navbar } from '../features/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const isPublicPage = checkPublickRoute(pathName!);

  return (
    <html lang="pt-BR" className="bg-private">
      <title>GerencyI</title>

      <body>
        <Providers>
          <MainContainer>
            {pathName === APP_ROUTES.public.home.name && <Navbar.menu />}
            {isPublicPage && <RouteValidation.PublicRoute>{children}</RouteValidation.PublicRoute>}
            {!isPublicPage && (
              <RouteValidation.PrivateRoute>{children}</RouteValidation.PrivateRoute>
            )}
            <SpeedInsights />
            <Analytics />
          </MainContainer>
        </Providers>
      </body>
    </html>
  );
}
