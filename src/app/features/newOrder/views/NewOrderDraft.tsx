'use client';

import { VariantProps } from 'tailwind-variants';
import { Text } from '~/src/app/shared/components/Text';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';
import { newOrderDraftTv } from '../NewOrderTV';

interface NewOrderDraftMode extends VariantProps<typeof newOrderDraftTv> {}

export function NewOrderDraft({ draftMode }: NewOrderDraftMode) {
  const { isDraftMode } = useDraftMode();

  const isDraft: typeof draftMode = isDraftMode ? 'hasDraft' : 'haventDraft';

  return (
    <Text
      text="Rascunho"
      as="span"
      fontFamily="rosarivo"
      className={newOrderDraftTv({ draftMode: isDraft })}
    />
  );
}
