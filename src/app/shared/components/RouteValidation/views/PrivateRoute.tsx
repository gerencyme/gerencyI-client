'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';
import { checkPublickRoute } from '~/src/app/shared/utils/checkPublickRoute';
import { APP_ROUTES } from '~utils/app-routes';
import { sessionUserLocalStorage } from '~utils/constants/userLocalStorage';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { push } = useRouter();
  const { getLocalStorage } = useLocalStorage();

  const session = sessionUserLocalStorage;

  const pathName = usePathname();
  const hasToken = getLocalStorage(session);
  const isPublicPage = checkPublickRoute(pathName!);

  useEffect(() => {
    if (!hasToken) {
      return push(APP_ROUTES.public.home.name);
    }
  }, [hasToken, isPublicPage, push]);

  return (
    <>
      {!hasToken && isPublicPage && null}
      {hasToken && !isPublicPage && children}
    </>
  );
}
