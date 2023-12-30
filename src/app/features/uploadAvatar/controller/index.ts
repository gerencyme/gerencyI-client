import { useUploadImage } from '~hooks/contexts/useUploadImage';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { sessionUserLocalStorage } from '~utils/constants/userLocalStorage';
import { useCompanyInfo } from '~hooks/useCompanyInfo';
import { ModalContentAction } from '~types/ModalContentAction';
import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const useUploadAvatar = () => {
  const [isRemovingImage, setIsRemovingImage] = useState(false);
  const { company } = useCompanyInfo();
  const { preview, onClose, editToggle } = useUploadImage();
  const { setLocalStorage } = useLocalStorage();

  const handleSave = () => {
    onClose();

    const updatedCompany = {
      ...company,
      src: preview
    };

    setLocalStorage(sessionUserLocalStorage, updatedCompany);
    editToggle();
    toast.info('Falta conectar à api!');
  };

  const handleClear = () => {
    onClose();

    const updatedCompany = {
      ...company,
      src: ''
    };

    setLocalStorage(sessionUserLocalStorage, updatedCompany);
    editToggle();
    toast.info('Falta conectar à api!');
  };

  const handleCancel = () => {
    onClose();
    editToggle();
  };

  const toggleRemovingImage = () => setIsRemovingImage((prev) => !prev);

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

  const modalRemoveImageAction: ModalContentAction[] = [
    {
      id: 0,
      color: 'easydark',
      label: 'Não',
      onClick: toggleRemovingImage
    },
    {
      id: 1,
      color: 'error',
      label: 'Sim',
      onClick: handleClear
    }
  ];

  const modalHeaderAction: ModalHeaderAction[] = [
    {
      id: 2,
      icon: IoCloseCircleOutline,
      label: 'Cancelar',
      onClick: handleCancel
    },
    {
      id: 3,
      icon: IoTrashOutline,
      label: 'Limpar',
      onClick: toggleRemovingImage
    }
  ];

  const splicedHeaderActionsByImageExist =
    company.src !== '' && !isRemovingImage ? modalHeaderAction : modalHeaderAction.splice(0, 1);

  return {
    modalContentActions,
    splicedHeaderActionsByImageExist,
    isRemovingImage,
    modalRemoveImageAction
  };
};
