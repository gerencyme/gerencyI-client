'use client';

import ColorPicker, { Theme } from 'react-pick-color';
import { useSelectColor } from '../../hooks/contexts/useSelectColor';

export interface ColorSelectorProps {
  theme?: Partial<Theme>;
}

export const ColorSelector = ({ theme }: ColorSelectorProps) => {
  const { color, onChange } = useSelectColor();

  return <ColorPicker color={color} hideAlpha onChange={onChange} theme={theme} />;
};
