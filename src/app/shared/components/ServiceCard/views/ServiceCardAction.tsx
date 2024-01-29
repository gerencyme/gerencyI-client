'use client';

import { APP_ROUTES } from '~utils/app-routes';
import { useTheme } from '~hooks/contexts/useTheme';
import { ButtonCollor } from '~types/ButtonCollor';
import { Button } from '../../Button';

interface ServiceCardActionProps {
  label: string;
}

export function ServiceCardAction({ label }: ServiceCardActionProps) {
  const { theme } = useTheme();

  const buttonCollor: ButtonCollor = theme === 'dark' ? 'primary' : 'tertiary';

  return (
    <Button.root size="small" color={buttonCollor}>
      <Button.link href={APP_ROUTES.public.products.name}>
        <Button.contentWrapper>
          <Button.label text={label} weight="bold" size="sm" color="white" />
        </Button.contentWrapper>
      </Button.link>
    </Button.root>
  );
}
