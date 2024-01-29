'use client';

import { Text } from '~/src/app/shared/components/Text';
import { useRouter } from 'next/navigation';
import { registerRedirectBackLinkTv, registerRedirectBackTv } from '../RegisterTV';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';

interface RegisterRedirectLinkProps {
  text: string;
  textLink: string;
}

export function RegisterRedirectBack({ text, textLink }: RegisterRedirectLinkProps) {
  const { push } = useRouter();

  const href = APP_ROUTES.public.auth.name;

  return (
    <div className={registerRedirectBackTv()}>
      <Text text={text} weight="semi-bold" className="text-xs md:text-md" />
      <Text
        onClick={() => push(href)}
        className={registerRedirectBackLinkTv()}
        text={textLink}
        color="lightPurple"
        weight="bold"
        size="md"
      />
    </div>
  );
}
