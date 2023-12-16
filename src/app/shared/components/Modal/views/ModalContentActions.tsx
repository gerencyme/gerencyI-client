import { ModalContentAction } from '~types/ModalContentAction';
import { Button } from '../../Button';
import { modalContentActionsTv } from '../ModalTV';

interface ModalContentActionsProps {
  actions: ModalContentAction[];
}

export function ModalContentActions({ actions }: ModalContentActionsProps) {
  return (
    <div className={modalContentActionsTv()}>
      {actions.map((action) => (
        <Button.root size="small" color={action.color} key={action.id} onClick={action.onClick}>
          <Button.contentWrapper>
            <Button.label text={action.label} size="xxs" />
          </Button.contentWrapper>
        </Button.root>
      ))}
    </div>
  );
}
