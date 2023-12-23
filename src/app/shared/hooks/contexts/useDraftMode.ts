import { useContext } from 'react';
import { DraftModeContext } from '../../contexts/DraftModeContext';

export const useDraftMode = () => useContext(DraftModeContext);
