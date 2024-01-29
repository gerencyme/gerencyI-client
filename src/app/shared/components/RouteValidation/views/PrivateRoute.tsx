import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { APP_ROUTES } from '~utils/app-routes';
import { checkPublickRoute } from '~utils/checkPublickRoute';
import { sessionUserLocalStorage } from '~utils/constants/userLocalStorage';

interface PublicRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PublicRouteProps) {
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

  return <>{!isPublicPage && children}</>;
}
