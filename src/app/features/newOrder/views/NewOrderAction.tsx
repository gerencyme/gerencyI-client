import { Button } from '~shared/components/Button';
import { useNewOrderController } from '../controller';

export function NewOrderAction() {
  const { showLocationGuide, isSubmitting } = useNewOrderController();

  const isDisabled = showLocationGuide || isSubmitting;

  return (
    <div className="flex gap-2 md:gap-4 items-center justify-evenly">
      <Button.root size="huge" disabled={isDisabled} type="submit" className="m-auto">
        <Button.contentWrapper>
          <Button.label text="Enviar" color="white" weight="light" size="sm" />
        </Button.contentWrapper>
      </Button.root>
    </div>
  );
}
