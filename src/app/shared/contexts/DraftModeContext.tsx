import { ReactNode, createContext, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

interface DraftModeContextProps {
  debouncedDraftMode: () => void;
  debouncedDesableDraftMode: () => void;
  isDraftMode: boolean;
}

interface DraftModeProviderProps {
  children: ReactNode;
}

export const DraftModeContext = createContext({} as DraftModeContextProps);

export const DraftModeProvider = ({ children }: DraftModeProviderProps) => {
  const { debounced } = useDebounce();

  const [isDraftMode, setIsDraftMode] = useState(false);

  const enableDraftmode = () => setIsDraftMode(true);

  const desableDraftmode = () => setIsDraftMode(false);

  const debouncedDraftMode = () => debounced(enableDraftmode, 500);
  const debouncedDesableDraftMode = () => debounced(desableDraftmode, 500);

  return (
    <DraftModeContext.Provider
      value={{
        debouncedDraftMode,
        debouncedDesableDraftMode,
        isDraftMode
      }}
    >
      {children}
    </DraftModeContext.Provider>
  );
};
