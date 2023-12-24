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
      className={`duration-300 text-xxs md:text-sm text-lime max-[480px]:translate-y-8 md:translate-y-8 ${
        isDraftMode ? 'translate-x-0' : '-translate-x-72'
      }`}
    />
  );
}
