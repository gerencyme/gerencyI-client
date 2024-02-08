import { ProductCardActions } from '~types/ProductCardActions';
import { useCallback, useEffect, useState } from 'react';
import { updateFavorites } from '~/src/app/features/favorites/services';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';

export const useProductCardController = () => {
  const { company } = useCompanyInfo();

  const [isEditing, setIsEditing] = useState(false);
  const [indexModalOpen, setIndexModalOpen] = useState<string | null>(null);
  const [indexNFModalOpen, setIndexNFModalOpen] = useState<string | null>(null);
  const [indexCancelModalOpen, setIndexCancelModalOpen] = useState<string | null>(null);

  const handleLike = (orderId: string, isLiked: boolean) =>
    updateFavorites(orderId, isLiked, company?.cnpj);

  const closeModal = useCallback(() => {
    setIndexModalOpen(null);
  }, []);
  const closeNFModal = () => setIndexNFModalOpen(null);
  const closeCancelModal = () => setIndexCancelModalOpen(null);
  const toggleIsEditing = () => setIsEditing((prev) => !prev);

  const openRepeatPurchaseModal = (i: string) => setIndexModalOpen(i);
  const openNFModal = (i: string) => setIndexNFModalOpen(i);
  const openCancelModal = (i: string) => setIndexCancelModalOpen(i);

  const productCardActions = (i: string): ProductCardActions[] => [
    {
      id: 0,
      color: 'white',
      label: 'Visualizar NF',
      textColor: 'black',
      onClick: () => openNFModal(i)
    },
    {
      id: 1,
      color: 'primary',
      label: 'Repetir Compra',
      textColor: 'white',
      onClick: () => openRepeatPurchaseModal(i)
    }
  ];

  const closeOnEsc = useCallback(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        closeModal();
        closeNFModal();
        toggleIsEditing();
        setIsEditing(false);
        closeCancelModal();
      }
    };

    document.body.addEventListener('keydown', handler);
    return handler;
  }, [closeModal]);

  useEffect(() => {
    const handler = closeOnEsc();
    return () => {
      document.body.removeEventListener('keydown', handler);
    };
  }, [closeOnEsc]);

  return {
    isEditing,
    indexModalOpen,
    indexNFModalOpen,
    indexCancelModalOpen,
    openCancelModal,
    productCardActions,
    closeCancelModal,
    closeModal,
    closeNFModal,
    toggleIsEditing,
    openRepeatPurchaseModal,
    handleLike
  };
};
