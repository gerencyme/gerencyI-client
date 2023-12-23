'use client';

import { Text } from '~/src/app/shared/components/Text';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';

export function NewOrderDraft() {
  const { isDraftMode } = useDraftMode();

  return (
    <Text
      text="Rascunho"
      as="span"
      fontFamily="rosarivo"
      size="xs"
      color="lime"
      className={`duration-300 ${isDraftMode ? 'translate-x-0' : '-translate-x-72'}`}
    />
  );
}
