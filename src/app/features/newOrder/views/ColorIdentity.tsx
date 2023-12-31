// usado style na linha 36 para atualizar em tempo real a cor do bloco ilustrativo
'use client';

import { Text } from '~shared/components/Text';
import { Tooltip } from '~shared/components/Tooltip';
import { ColorSelector } from '~shared/components/ColorSelector';
import { useNewOrderController } from '../controller';
import { Theme } from 'react-pick-color';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';
import { colorIdentityTv, renderTextElementTv } from '../NewOrderTV';
import { VariantProps } from 'tailwind-variants';

interface ColorIdentityProps extends VariantProps<typeof colorIdentityTv> {
  theme?: Partial<Theme>;
}

export const ColorIdentity = ({ theme, visibleState }: ColorIdentityProps) => {
  const { replacedColor, choisedColor } = useNewOrderController();
  const { isDraftMode } = useDraftMode();

  const isVisible: typeof visibleState = isDraftMode ? 'visible' : 'hidden';

  const renderColorSelector = () => <ColorSelector theme={theme} />;

  const renderTextElement = (text: string) => (
    <Text color="white" text={text} weight="light" className={renderTextElementTv()} />
  );

  return (
    <div className={colorIdentityTv({ visibleState: isVisible })}>
      {renderTextElement('Escolha uma cor de identificação')}

      <div className="flex items-center gap-2">
        <Tooltip isArrow={false} content={renderColorSelector}>
          <div style={{ backgroundColor: choisedColor ?? '#FFFFFF' }} className="w-4 h-4" />
        </Tooltip>
        {renderTextElement(replacedColor)}
      </div>
    </div>
  );
};
