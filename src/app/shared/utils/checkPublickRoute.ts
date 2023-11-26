import { APP_ROUTES } from './app-routes';

/**
 * @param asPath string
 * @returns boolean
 */

export const checkPublickRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.publicPaths);

  return appPublicRoutes.includes(asPath);
};
