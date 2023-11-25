'use client';

import { Text } from '~/src/app/shared/components/Text';
import { useRouter } from 'next/navigation';
import { registerRedirectBackTv } from '../RegisterTV';

interface RegisterRedirectLinkProps {
  text: string;
  textLink: string;
}

export function RegisterRedirectBack({ text, textLink }: RegisterRedirectLinkProps) {
  const { back } = useRouter();

  return (
    <div className={registerRedirectBackTv()}>
      <Text text={text} color="white" weigth="semi-bold" size="md" />
      <Text
        onClick={back}
        className="hover:brightness-110 cursor-pointer ml-1"
        text={textLink}
        color="tertiary"
        weigth="bold"
        size="md"
      />
    </div>
  );
}
