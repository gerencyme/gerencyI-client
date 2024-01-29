import { Modal } from '~/src/app/shared/components/Modal';
import { Text } from '~/src/app/shared/components/Text';
import { ModalContentAction } from '~/src/app/shared/types/ModalContentAction';

interface CancelPurshaseModalProps {
  isCancelPurshaseModalOpen: boolean;
  productName: string;
  closeCancelModal: () => void;
}

export function CancelPurshaseModal({
  isCancelPurshaseModalOpen,
  productName,
  closeCancelModal
}: CancelPurshaseModalProps) {
  const cancelPurshaseModalContentActions: ModalContentAction[] = [
    {
      id: 0,
      color: 'easydark',
      label: 'Não',
      onClick: closeCancelModal
    },
    {
      id: 1,
      color: 'error',
      label: 'Sim',
      onClick: () => {
        console.log('tira o produto da base de análise');
        closeCancelModal();
      }
    }
  ];

  return (
    <Modal.root isModalOpen={isCancelPurshaseModalOpen}>
      <Modal.contentWrapper>
        <Modal.header modalTitle={productName} isCancel>
          <Modal.headerActions />
        </Modal.header>
        <Modal.content>
          <Text
            weight="light"
            text="Deseja realmente sair da busca por grupos de compra? A GerencyI recomenda que espere até o final do dia antes do cancelamento."
          />
          <Modal.contentActions actions={cancelPurshaseModalContentActions} />
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
