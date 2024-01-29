'use client';

import AvatarEdit from 'react-avatar-edit';
import { useUploadAvatar } from './controller';
import { Modal } from '~shared/components/Modal';
import { useUploadImage } from '~hooks/contexts/useUploadImage';
import { Text } from '~shared/components/Text';
import { useTheme } from '~shared/hooks/contexts/useTheme';

export function UploadAvatar() {
  const { theme } = useTheme();
  const { isEditing, preview, onClose, onCrop } = useUploadImage();
  const {
    modalContentActions,
    splicedHeaderActionsByImageExist,
    isRemovingImage,
    modalRemoveImageAction
  } = useUploadAvatar();

  const labelColor = theme === 'dark' ? '#FFFFFF' : '#000000';

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
                color: labelColor
              }}
            />
          )}
          {preview && <Modal.contentActions actions={modalContentActions} />}
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
