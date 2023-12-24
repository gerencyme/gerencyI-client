import { Button } from '~shared/components/Button';
import { useNewOrderController } from '../controller';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';

interface NewOrderActionProps {
  discartDraft: () => void;
}

export function NewOrderAction({ discartDraft }: NewOrderActionProps) {
  const { showLocationGuide, isSubmitting } = useNewOrderController();
  const { isDraftMode } = useDraftMode();

  const isDisabled = showLocationGuide || isSubmitting;

  return (
    <div className="flex gap-2 md:gap-4 items-center justify-evenly">
      <Button.root
        onClick={discartDraft}
        size="huge"
        disabled={isDisabled}
        type="button"
        color="error"
        className={`duration-300 ${isDraftMode ? 'translate-x-0 w-full' : '-translate-x-96 w-0'}`}
      >
        <Button.contentWrapper>
          <Button.label text="Descartar Rascunho" color="white" weight="light" size="sm" />
        </Button.contentWrapper>
      </Button.root>

      <Button.root
        size="huge"
        disabled={isDisabled}
        type="submit"
        className={`duration-300 ${
          isDraftMode ? 'translate-x-0' : '-translate-x-5 sm:-translate-x-6'
        }`}
      >
        <Button.contentWrapper>
          <Button.label text="Enviar" color="white" weight="light" size="sm" />
        </Button.contentWrapper>
      </Button.root>
    </div>
  );
}
