import { ReactNode, createContext, useState } from 'react';
import { Color, ColorObject } from 'react-pick-color';
import { localStorageOrderSketch } from '../utils/constants/localStorageOrderSketch';
import { useCookie } from '../hooks/useCookies';
import { parseCookies } from 'nookies';

interface SelectColorContextProps {
  onChange: (color: ColorObject) => void;
  resetColor: () => void;
  color: Color;
}

interface SelectColorProviderProps {
  children: ReactNode;
}

export const SelectColorContext = createContext({} as SelectColorContextProps);

const cookies = parseCookies();

export const SelectColorProvider = ({ children }: SelectColorProviderProps) => {
  const { createSession } = useCookie();

  const cookedColor = `#${cookies.productSketch}`;

  const defaultValue = cookies.productSketch ? cookedColor : '#FFFFFF';

  const [color, setColor] = useState<Color>(defaultValue);

  const resetColor = () => {
    setColor('#FFFFFF');
  };

  const onChange = (color: ColorObject) => {
    setColor(color.hex);

    createSession({
      cookieName: localStorageOrderSketch,
      value: `${color.hex.replace('#', '')}`
    });
  };

  return (
    <SelectColorContext.Provider
      value={{
        color,
        onChange,
        resetColor
      }}
    >
      {children}
    </SelectColorContext.Provider>
  );
};
