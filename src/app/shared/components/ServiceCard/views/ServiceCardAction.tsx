import { APP_ROUTES } from '../../../utils/app-routes';
import { Button } from '../../Button';

interface ServiceCardActionProps {
  label: string;
}

export function ServiceCardAction({ label }: ServiceCardActionProps) {
  return (
    <Button.root size="small" color="secondary">
      <Button.link href={APP_ROUTES.public.products.name}>
        <Button.contentWrapper>
          <Button.label text={label} weigth="bold" size="sm" color="primary" />
        </Button.contentWrapper>
      </Button.link>
    </Button.root>
  );
}
