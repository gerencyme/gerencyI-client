import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonLinkTv } from '../ButtonTV';
import { VariantProps } from 'tailwind-variants';

interface ButtonLinkProps extends VariantProps<typeof buttonLinkTv> {
  children: ReactNode;
  href: string;
}

export function ButtonLink({ children, href, color }: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonLinkTv({ color })}>
      {children}
    </Link>
  );
}
