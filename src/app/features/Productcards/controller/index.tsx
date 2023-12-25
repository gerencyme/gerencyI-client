import { ProductCardActions } from '~types/ProductCardActions';
import { useCallback, useEffect, useState } from 'react';

export const useProductCardController = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [indexModalOpen, setIndexModalOpen] = useState<number | null>(null);
  const [indexNFModalOpen, setIndexNFModalOpen] = useState<number | null>(null);
  const [indexCancelModalOpen, setIndexCancelModalOpen] = useState<number | null>(null);

  const handleLike = () => console.log('atualiza estado de like do produto');

  const closeModal = useCallback(() => {
    setIndexModalOpen(null);
  }, []);
  const closeNFModal = () => setIndexNFModalOpen(null);
  const closeCancelModal = () => setIndexCancelModalOpen(null);
  const toggleIsEditing = () => setIsEditing((prev) => !prev);

  const openRepeatPurchaseModal = (i: number) => setIndexModalOpen(i);
  const openNFModal = (i: number) => setIndexNFModalOpen(i);
  const openCancelModal = (i: number) => setIndexCancelModalOpen(i);

  const productCardActions = (i: number): ProductCardActions[] => [
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
    handleLike
  };
};
