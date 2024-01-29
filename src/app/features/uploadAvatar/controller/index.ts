import { useUploadImage } from '~hooks/contexts/useUploadImage';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { sessionUserLocalStorage } from '~utils/constants/userLocalStorage';
import { useCompanyInfo } from '~hooks/useCompanyInfo';
import { ModalContentAction } from '~types/ModalContentAction';
import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import { useState } from 'react';
import { updateImageProfile } from '../services';
import { useAuthController } from '../../auth/controller';

export const useUploadAvatar = () => {
  const { logout } = useAuthController();
  const { company } = useCompanyInfo();
  const { preview, onClose, editToggle } = useUploadImage();
  const { setLocalStorage } = useLocalStorage();

  const [isRemovingImage, setIsRemovingImage] = useState(false);

  const callUpdateImage = async (companyImg: string, toastMessage?: string) => {
    const updatedCompany = {
      ...company,
      supplier: {
        cnpj: company?.supplier.cnpj ?? '',
        email: company?.supplier.email ?? '',
        endereco: company?.supplier.endereco ?? '',
        nome: company?.supplier.nome ?? '',
        supplierId: company?.supplier.supplierId ?? '',
        telephone: company?.supplier.telephone ?? ''
      },
      companyImg
    };

    const resolver = () => {
      onClose();
      setLocalStorage(sessionUserLocalStorage, updatedCompany);
      editToggle();
    };

    return await updateImageProfile(updatedCompany, resolver, logout, toastMessage);
  };

  const handleSave = async () => callUpdateImage(preview.replace('data:image/png;base64,', ''));
  const handleClear = async () => callUpdateImage('', 'Imagem deletada com sucesso!');

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
    company.companyImg && !isRemovingImage ? modalHeaderAction : modalHeaderAction.splice(0, 1);

  return {
    modalContentActions,
    splicedHeaderActionsByImageExist,
    isRemovingImage,
    modalRemoveImageAction
  };
};
