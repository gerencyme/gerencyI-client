import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { Modal } from '~shared/components/Modal';
import { Text } from '~shared/components/Text';
import { BsDownload } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { ModalContentAction } from '~/src/app/shared/types/ModalContentAction';

interface NFModalProps {
  isNFModalOpen: boolean;
  closeNFModal: () => void;
}

export function NFModal({ isNFModalOpen, closeNFModal }: NFModalProps) {
  const headerActions: ModalHeaderAction[] = [
    {
      id: 0,
      label: 'Baixar',
      icon: BsDownload,
      onClick: () => {
        console.log('Mostrar um toast com o download sendo baixado');
        closeNFModal();
      }
    },
    {
      id: 1,
      label: 'Enviar por E-mail',
      icon: MdOutlineMail,
      onClick: () => {
        console.log('Enviando e-mail para o usuário');
        closeNFModal();
      }
    }
  ];

  const contentActions: ModalContentAction[] = [
    {
      id: 0,
      color: 'easydark',
      label: 'Fechar',
      onClick: () => closeNFModal()
    }
  ];

  return (
    <Modal.root isModalOpen={isNFModalOpen}>
      <Modal.contentWrapper>
        <Modal.header modalTitle="Nota Fiscal">
          <Modal.headerActions actions={headerActions} />
        </Modal.header>
        <Modal.content>
          <Text color="white" text="Nota Fiscal vem aqui" />
          <Modal.contentActions actions={contentActions} />
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
