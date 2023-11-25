'use client';

import { Text } from '~/src/app/shared/components/Text';
import { useRouter } from 'next/navigation';
import { registerRedirectBackTv } from '../RegisterTV';
import { APP_ROUTES } from '~/src/app/shared/utils/constants/app-routes';

interface RegisterRedirectLinkProps {
  text: string;
  textLink: string;
}

export function RegisterRedirectBack({ text, textLink }: RegisterRedirectLinkProps) {
  const { push } = useRouter();

  const href = APP_ROUTES.public.auth.name;

  return (
    <div className={registerRedirectBackTv()}>
      <Text text={text} color="white" weigth="semi-bold" size="md" />
      <Text
        onClick={() => push(href)}
        className="hover:brightness-110 cursor-pointer ml-1"
        text={textLink}
        color="tertiary"
        weigth="bold"
        size="md"
      />
    </div>
  );
}
