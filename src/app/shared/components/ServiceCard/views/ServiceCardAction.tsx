import { Button } from '../../Button';

interface ServiceCardActionProps {
  label: string;
  onClick: () => void;
}

export function ServiceCardAction({ label, onClick }: ServiceCardActionProps) {
  return (
    <Button.root size="small" color="secondary" onClick={onClick}>
      <Button.contentWrapper>
        <Button.label text={label} weigth="bold" size="sm" color="primary" />
      </Button.contentWrapper>
    </Button.root>
  );
}
