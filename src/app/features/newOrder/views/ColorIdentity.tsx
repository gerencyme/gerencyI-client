'use client';

import { Text } from '~shared/components/Text';
import { Tooltip } from '~shared/components/Tooltip';
import { ColorSelector } from '~shared/components/ColorSelector';
import { useNewOrderController } from '../controller';
import { Theme } from 'react-pick-color';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';

interface ColorIdentityProps {
  theme?: Partial<Theme>;
}

export const ColorIdentity = ({ theme }: ColorIdentityProps) => {
  const { replacedColor, choisedColor } = useNewOrderController();
  const { isDraftMode } = useDraftMode();

  const renderColorSelector = () => <ColorSelector theme={theme} />;

  return (
    <div
      className={`${
        isDraftMode ? 'flex flex-col' : 'hidden'
      } gap-2 max-[480px]:translate-y-6 md:translate-y-6`}
    >
      <Text
        color="white"
        text="Escolha uma cor de identificação"
        weight="light"
        className="text-xs md:text-sm"
      />

      <div className="flex items-center gap-2">
        <Tooltip content={renderColorSelector} text="">
          <div style={{ backgroundColor: choisedColor ?? '#FFFFFF' }} className="w-4 h-4" />
        </Tooltip>
        <Text color="white" text={replacedColor} weight="light" className="text-xs md:text-sm" />
      </div>
    </div>
  );
};
