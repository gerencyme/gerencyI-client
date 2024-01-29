'use client';

import { Text } from '~/src/app/shared/components/Text';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { authRedirectBackLinkTv, authRedirectBackTv } from '../AuthTV';

interface AuthRedirectBackProps {
  text: string;
  textLink: string;
}

export function AuthRedirectBack({ text, textLink }: AuthRedirectBackProps) {
  const { push } = useRouter();

  const href = APP_ROUTES.public.register.name;

  return (
    <div className={authRedirectBackTv()}>
      <Text text={text} weight="semi-bold" className="text-xs md:text-md" />
      <Text
        onClick={() => push(href)}
        className={authRedirectBackLinkTv()}
        text={textLink}
        color="lightPurple"
        weight="bold"
      />
    </div>
  );
}
