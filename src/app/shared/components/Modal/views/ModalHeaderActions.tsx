import { Tooltip } from '../../Tooltip';
import { Icon } from '../../Icon';
import { ModalHeaderAction } from '~types/ModalHeaderAction';

interface ModalHeaderActionsProps {
  actions?: ModalHeaderAction[];
}

export function ModalHeaderActions({ actions = [] }: ModalHeaderActionsProps) {
  return (
    <div className="flex gap-1 items-center cursor-pointer">
      {actions.map((action) => (
        <Tooltip color="black" key={action.id} text={action.label}>
          <div
            onClick={action.onClick}
            className="bg-white rounded flex items-center justify-center w-6 h-6"
          >
            <Icon icon={action.icon} color="primary" size="small" className="cursor-pointer" />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
