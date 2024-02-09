'use client';

import '~global/styles/globals.css';
import '~global/styles/scrollbar.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../providers';
import { MainContainer } from '../shared/components/MainContainer';
import { usePathname } from 'next/navigation';
import { APP_ROUTES } from '../shared/utils/app-routes';
import { Navbar } from '../features/navbar';
import { Toast } from '../shared/components/Toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <title>GerencyI</title>

      <body>
        <Providers>
          <MainContainer>
            {pathName === APP_ROUTES.public.home.name && <Navbar.menu />}
            {children}
            <Toast />
            <SpeedInsights />
            <Analytics />
          </MainContainer>
        </Providers>
      </body>
    </html>
  );
}
