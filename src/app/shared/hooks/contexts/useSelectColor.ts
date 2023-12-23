import { useContext } from 'react';
import { SelectColorContext } from '../../contexts/SelectColorContext';

export const useSelectColor = () => useContext(SelectColorContext);
