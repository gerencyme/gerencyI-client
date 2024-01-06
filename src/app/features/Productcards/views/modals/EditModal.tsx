import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { Modal } from '~shared/components/Modal';
import { ModalContentAction } from '~types/ModalContentAction';
import { Text } from '~shared/components/Text';
import { CiEdit } from 'react-icons/ci';
import { BsArrowLeft } from 'react-icons/bs';
import { formatPrice } from '~/src/app/shared/utils/transformers';
import { useState } from 'react';
import { editPurchaseContentTv } from '../../ProductCardsTV';

interface PurshaseModalProps {
  isModalOpen: boolean;
  isEditing: boolean;
  productName: string;
  quantity: string | number;
  unitPrice: string | number;
  closeModal: () => void;
  toggleIsEditing: () => void;
}

export function PurshaseModal({
  isModalOpen,
  isEditing,
  productName,
  quantity,
  unitPrice,
  closeModal,
  toggleIsEditing
}: PurshaseModalProps) {
  const [value, setValue] = useState(quantity);
  const totalByLastPurchaseWithNewAmount = +value * +unitPrice;

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
        console.log('envia o produto para análise de busca de preços');
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
        console.log('chama a api enviando o produto para análise');
        toggleIsEditing();
        closeModal();
      }
    }
  ];

  const repeatPurchaseContent = (
    <Text
      text="Deseja procurar por outros pedidos semelhantes a este?"
      weight="light"
      size="xs"
      color="white"
    />
  );
  const editPurchaseContent = (
    <>
      <Text text="Quantos deseja comprar?" weight="light" size="xs" color="white" />
      <input
        type="number"
        className={editPurchaseContentTv({ opacity: '50%' })}
        placeholder={String(quantity)}
        defaultValue={quantity}
        min={0}
        onChange={(e) => setValue(e.target.value)}
      />
      <Text text="Com base na última compra" weight="light" size="xs" color="white" />
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
