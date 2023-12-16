import { Tooltip } from '../../Tooltip';
import { Icon } from '../../Icon';
import { ModalHeaderAction } from '~types/ModalHeaderAction';
import { modalHeaderActionsContentTv, modalHeaderActionsRootTv } from '../ModalTV';

interface ModalHeaderActionsProps {
  actions?: ModalHeaderAction[];
}

export function ModalHeaderActions({ actions = [] }: ModalHeaderActionsProps) {
  return (
    <div className={modalHeaderActionsRootTv()}>
      {actions.map((action) => (
        <Tooltip color="black" key={action.id} text={action.label}>
          <div onClick={action.onClick} className={modalHeaderActionsContentTv()}>
            <Icon icon={action.icon} color="primary" size="small" className="cursor-pointer" />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
