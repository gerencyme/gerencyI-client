import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { Modal } from '~shared/components/Modal';
import { ModalContentAction } from '~types/ModalContentAction';
import { Text } from '~shared/components/Text';
import { CiEdit } from 'react-icons/ci';
import { BsArrowLeft } from 'react-icons/bs';
import { formatPrice } from '~/src/app/shared/utils/transformers';
import { useState } from 'react';
import { ProductCard } from '~types/ProductCard';
import { NewOrderRequest } from '~types/requests/NewOrderRequest';
import { editPurchaseContentTv } from '~/src/app/features/Productcards/ProductCardsTV';
import { FavoritesRequest } from '~/src/app/shared/types/requests/FavoritesRequest';

interface PurshaseModalProps {
  isModalOpen: boolean;
  isEditing: boolean;
  productName: string;
  quantity?: string | number;
  unitPrice?: string | number;
  product: ProductCard | FavoritesRequest;
  closeModal: () => void;
  toggleIsEditing: () => void;
  sendNewOrder: (
    order: NewOrderRequest,
    newQuantity?: number
  ) => Promise<NewOrderRequest | undefined>;
}

export function PurshaseModal({
  isModalOpen,
  isEditing,
  productName,
  quantity,
  product,
  unitPrice,
  closeModal,
  toggleIsEditing,
  sendNewOrder
}: PurshaseModalProps) {
  const [value, setValue] = useState(quantity || 0);
  const totalByLastPurchaseWithNewAmount = unitPrice ? +value * +unitPrice : 0;

  const repeatPurchaseContentActions: ModalContentAction[] = [
    {
      id: 0,
      color: 'easydark',
      label: 'Não',
      onClick: closeModal
    },
    {
      id: 1,
      color: 'primary',
      label: 'Sim',
      onClick: () => {
        sendNewOrder(product as unknown as NewOrderRequest);
        closeModal();
      }
    }
  ];

  const editPurchaseContentActions: ModalContentAction[] = [
    {
      id: 0,
      color: 'easydark',
      label: 'Cancelar',
      onClick: toggleIsEditing
    },
    {
      id: 1,
      color: 'primary',
      label: 'Enviar',
      onClick: () => {
        sendNewOrder(product as unknown as NewOrderRequest, +value);
        toggleIsEditing();
        closeModal();
      }
    }
  ];

  const repeatPurchaseContent = (
    <Text text="Deseja procurar por outros pedidos semelhantes a este?" weight="light" size="xs" />
  );
  const editPurchaseContent = (
    <>
      <Text text="Quantos deseja comprar?" weight="light" size="xs" />
      <input
        type="number"
        className={editPurchaseContentTv({ opacity: '50%' })}
        placeholder={String(quantity)}
        defaultValue={quantity}
        min={0}
        onChange={(e) => setValue(e.target.value)}
      />
      <Text text="Com base na última compra" weight="light" size="xs" />
      <input
        type="number"
        readOnly
        className={editPurchaseContentTv({ opacity: '100%' })}
        placeholder={formatPrice(totalByLastPurchaseWithNewAmount)}
      />
    </>
  );

  const editHeaderActions: ModalHeaderAction[] = [
    {
      id: 0,
      label: 'Voltar',
      icon: BsArrowLeft,
      onClick: toggleIsEditing
    }
  ];

  const purshaseHeaderActions: ModalHeaderAction[] = [
    {
      id: 0,
      label: 'Editar',
      icon: CiEdit,
      onClick: toggleIsEditing
    }
  ];

  const contentActions = isEditing ? editPurchaseContentActions : repeatPurchaseContentActions;
  const content = isEditing ? editPurchaseContent : repeatPurchaseContent;
  const headerActions = isEditing ? editHeaderActions : purshaseHeaderActions;

  return (
    <Modal.root isModalOpen={isModalOpen}>
      <Modal.contentWrapper>
        <Modal.header modalTitle={productName}>
          <Modal.headerActions actions={headerActions} />
        </Modal.header>
        <Modal.content>
          {content}
          <Modal.contentActions actions={contentActions} />
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
