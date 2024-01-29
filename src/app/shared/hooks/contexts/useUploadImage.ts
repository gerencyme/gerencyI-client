import { useContext } from 'react';
import { UploadImageContext } from '../../contexts/UploadImageContext';

export const useUploadImage = () => useContext(UploadImageContext);
