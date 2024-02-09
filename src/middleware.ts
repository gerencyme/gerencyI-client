/**
 * use /routePathName/:path* para validar todas a rotas a partir da routePathName
 */

import { NextRequest, NextResponse } from 'next/server';
import { TSessionCustomer } from '~/src/app/shared/types/TSessionCustomer';
import { sessionToken } from '~/src/app/shared/utils/constants/cookies';
import { APP_ROUTES } from '~utils/app-routes';

export default async function middlwware(nextRequest: NextRequest) {
  const stringfyiedSessionCustomer = nextRequest.cookies.get(sessionToken)?.value;
  const sessionCustomer: TSessionCustomer =
    stringfyiedSessionCustomer && JSON.parse(stringfyiedSessionCustomer);
  const token = sessionCustomer?.refreshToken;

  const signURL = new URL(APP_ROUTES.public.auth.name, nextRequest.url);

  if (!token) {
    if (nextRequest.nextUrl.pathname === APP_ROUTES.public.auth.name) {
      return NextResponse.next();
    }
    return NextResponse.redirect(signURL);
  }

  if (nextRequest.nextUrl.pathname === APP_ROUTES.public.auth.name) {
    const dashboardUrl = new URL(APP_ROUTES.private.dashboard.name, nextRequest.url);
    return NextResponse.redirect(dashboardUrl);
  }
}

export const config = {
  matcher: [
    '/auth',
    '/register',
    '/my-account',
    '/my-data',
    '/last-months',
    '/dashboard',
    '/new-order'
  ]
};
