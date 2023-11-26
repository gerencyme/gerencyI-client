'use client';

import { Text } from '~/src/app/shared/components/Text';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { authRedirectBackTv } from '../AuthTV';

interface AuthRedirectBackProps {
  text: string;
  textLink: string;
}

export function AuthRedirectBack({ text, textLink }: AuthRedirectBackProps) {
  const { push } = useRouter();

  const href = APP_ROUTES.public.register.name;

  return (
    <div className={authRedirectBackTv()}>
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
