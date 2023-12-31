'use client';

import { Icon } from '~/src/app/shared/components/Icon';
import { MdLocationOff } from 'react-icons/md';
import { Text } from '~/src/app/shared/components/Text';
import { Modal } from '~/src/app/shared/components/Modal';
import { useNewOrderController } from '../controller';

export function ShowLocationGuide() {
  const { actions, showLocationGuide } = useNewOrderController();

  return (
    <Modal.root isModalOpen={showLocationGuide}>
      <Modal.contentWrapper>
        <Modal.header modalTitle="Localização Necessária!" />
        <Modal.content>
          <Icon icon={MdLocationOff} size="medium" color="white" className="m-auto" />
          <Text
            text="Para que seu produto seja enviado para análise, precisamos acessar sua localização para encontrarmos o melhor grupo possível para sua empresa"
            color="white"
            weight="light"
            size="xs"
          />
          <Text
            text="Encontre este simbolo ao fim de sua barra de navegação e ative-o"
            color="white"
            weight="light"
            size="xs"
          />
          <Text
            text="É possível que seja necessário recarregar a página"
            color="white"
            weight="light"
            size="xs"
          />
          <Modal.contentActions actions={actions} />
        </Modal.content>
      </Modal.contentWrapper>
    </Modal.root>
  );
}
