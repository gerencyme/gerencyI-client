'use client';

import AvatarEdit from 'react-avatar-edit';
import { Modal } from '~shared/components/Modal';
import { useUploadImage } from '../../shared/hooks/contexts/useUploadImage';
import { useUploadAvatar } from './controller';

export function UploadAvatar() {
  const { isEditing, preview, onClose, onCrop } = useUploadImage();
  const { modalContentActions, modalHeaderAction } = useUploadAvatar();

  return (
    <Modal.root isModalOpen={isEditing}>
      <Modal.contentWrapper>
        <Modal.header modalTitle="Edite seu perfil">
          <Modal.headerActions actions={modalHeaderAction} />
        </Modal.header>
        <Modal.content>
          <AvatarEdit
            closeIconColor="#FFFFFF"
            width={160}
            height={160}
            onClose={onClose}
            onCrop={onCrop}
            label=".png"
            labelStyle={{
              color: '#FFFFFF'
            }}
          />
          {preview && <Modal.contentActions actions={modalContentActions} />}
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
