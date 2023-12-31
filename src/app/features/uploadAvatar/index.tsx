'use client';

import AvatarEdit from 'react-avatar-edit';
import { Modal } from '~shared/components/Modal';
import { useUploadImage } from '~hooks/contexts/useUploadImage';
import { useUploadAvatar } from './controller';
import { Text } from '~shared/components/Text';

export function UploadAvatar() {
  const { isEditing, preview, onClose, onCrop } = useUploadImage();
  const {
    modalContentActions,
    splicedHeaderActionsByImageExist,
    isRemovingImage,
    modalRemoveImageAction
  } = useUploadAvatar();

  return (
    <Modal.root isModalOpen={isEditing}>
      <Modal.contentWrapper>
        <Modal.header modalTitle="Edite seu perfil">
          <Modal.headerActions actions={splicedHeaderActionsByImageExist} />
        </Modal.header>
        <Modal.content>
          {isRemovingImage ? (
            <>
              <Text
                color="white"
                weight="light"
                text="Deseja realmente excluir sua imagem? Ter uma imagem facilita o reconhecimento da sua marca dentro da rede da GerencyI."
              />
              <Modal.contentActions actions={modalRemoveImageAction} />
            </>
          ) : (
            <AvatarEdit
              closeIconColor="#FFFFFF"
              width={160}
              height={160}
              onClose={onClose}
              onCrop={onCrop}
              label="png ou jpeg"
              labelStyle={{
                color: '#FFFFFF'
              }}
            />
          )}
          {preview && <Modal.contentActions actions={modalContentActions} />}
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
