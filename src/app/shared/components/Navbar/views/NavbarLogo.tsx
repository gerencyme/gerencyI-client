import { Text } from '../../Text';
import { APP_ROUTES } from '~utils/app-routes';
import Image from 'next/image';
import Logo from '~assets/svg/logo.svg';
import Link from 'next/link';

export function NavbarLogo() {
  return (
    <Link
      href={APP_ROUTES.public.home.name}
      className="flex gap-4 items-center hover:brightness-110"
    >
      <Image alt="GerencyI logo" width={50} height={50} src={Logo} />
      <Text text="GerencyI" size="md" weight="bold" color="secondary" className="hidden sm:flex" />
    </Link>
  );
}
