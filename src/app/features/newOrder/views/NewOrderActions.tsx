import { Button } from '~shared/components/Button';
import { useNewOrderController } from '../controller';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';
import * as tv from '../NewOrderTV';
import { VariantProps } from 'tailwind-variants';

interface NewOrderActionProps extends VariantProps<typeof tv.newOrderClearActionTv> {
  discartDraft: () => void;
}

export function NewOrderActions({ discartDraft, draftMode }: NewOrderActionProps) {
  const { showLocationGuide, isSubmitting } = useNewOrderController();
  const { isDraftMode } = useDraftMode();

  const hasDraft: typeof draftMode = isDraftMode ? 'hasDraft' : 'haventDraft';

  const isDisabled = showLocationGuide || isSubmitting;

  return (
    <div className={tv.newOrderActionsWrapperTv()}>
      {!showLocationGuide && (
        <Button.root
          onClick={discartDraft}
          size="huge"
          disabled={isDisabled}
          type="button"
          color="error"
          className={tv.newOrderClearActionTv({ draftMode: hasDraft })}
        >
          <Button.contentWrapper>
            <Button.label text="Descartar Rascunho" color="white" weight="light" size="sm" />
          </Button.contentWrapper>
        </Button.root>
      )}

      <Button.root
        size="huge"
        disabled={isDisabled}
        type="submit"
        className={tv.newOrderSubmitActionTv({ draftMode: hasDraft })}
      >
        <Button.contentWrapper>
          <Button.label
            text={showLocationGuide ? 'Ative a Localização' : 'Enviar'}
            color="white"
            weight="light"
            size="sm"
          />
        </Button.contentWrapper>
      </Button.root>
    </div>
  );
}
