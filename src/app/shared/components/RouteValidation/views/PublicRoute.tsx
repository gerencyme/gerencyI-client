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

export function PublicRoute({ children }: PrivateRouteProps) {
  const { push } = useRouter();
  const { getLocalStorage } = useLocalStorage();

  const session = sessionUserLocalStorage;

  const pathName = usePathname();
  const hasToken = getLocalStorage(session);
  const isPublicPage = checkPublickRoute(pathName!);

  useEffect(() => {
    if (hasToken) {
      return push(APP_ROUTES.private['my-account'].name);
    }
  }, [hasToken, isPublicPage, push]);

  return <>{isPublicPage && children}</>;
}
