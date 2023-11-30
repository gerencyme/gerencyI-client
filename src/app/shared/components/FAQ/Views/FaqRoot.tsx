import { ReactNode } from 'react';
import { faqRootTv } from '../FaqTV';
import { usePathname } from 'next/navigation';
import { APP_ROUTES } from '../../../utils/app-routes';
import { VariantProps } from 'tailwind-variants';

interface FaqRootProps extends VariantProps<typeof faqRootTv> {
  children: ReactNode;
}

export function FaqRoot({ children, page }: FaqRootProps) {
  const pathName = usePathname();

  const pageFaqPosition: typeof page =
    pathName === APP_ROUTES.public.register.name ? 'register' : 'home';

  return <div className={faqRootTv({ page: pageFaqPosition })}>{children}</div>;
}
