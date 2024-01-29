import { ReactNode, createContext, useState } from 'react';

interface UploadImageContextProps {
  preview: string;
  isEditing: boolean;
  onClose: () => void;
  editToggle: () => void;
  onCrop: (view: string) => void;
}

interface UploadImageProviderProps {
  children: ReactNode;
}

export const UploadImageContext = createContext({} as UploadImageContextProps);

export const UploadImageProvider = ({ children }: UploadImageProviderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState('');

  const editToggle = () => setIsEditing((prev) => !prev);

  const onClose = () => {
    setPreview('');
  };

  const onCrop = (view: string) => {
    setPreview(view);
  };
  return (
    <UploadImageContext.Provider value={{ preview, isEditing, onClose, onCrop, editToggle }}>
      {children}
    </UploadImageContext.Provider>
  );
};
