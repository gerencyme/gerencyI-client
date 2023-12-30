import { useUploadImage } from '~hooks/contexts/useUploadImage';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { sessionUserLocalStorage } from '~utils/constants/userLocalStorage';
import { useCompanyInfo } from '~hooks/useCompanyInfo';
import { ModalContentAction } from '~types/ModalContentAction';
import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

export const useUploadAvatar = () => {
  const { company } = useCompanyInfo();
  const { preview, onClose, handleSaveImage, editToggle } = useUploadImage();
  const { setLocalStorage } = useLocalStorage();

  const handleSave = () => {
    onClose();

    const updatedCompany = {
      ...company,
      src: preview
    };

    setLocalStorage(sessionUserLocalStorage, updatedCompany);
    handleSaveImage();
    toast.info('Falta conectar à api!');
  };

  const handleCancel = () => {
    onClose();
    editToggle();
  };

  const modalContentActions: ModalContentAction[] = [
    {
      id: 0,
      color: 'error',
      label: 'Cancelar',
      onClick: handleCancel
    },
    {
      id: 1,
      color: 'primary',
      label: 'Salvar',
      onClick: handleSave
    }
  ];

  const modalHeaderAction: ModalHeaderAction[] = [
    {
      id: 2,
      icon: IoCloseCircleOutline,
      label: 'Cancelar',
      onClick: handleCancel
    }
  ];

  return {
    modalContentActions,
    modalHeaderAction
  };
};
