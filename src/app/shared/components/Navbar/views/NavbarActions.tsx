'use client';

import { NavbarAction } from '~types/NavbarActions';
import { Button } from '../../Button';
import { Text } from '../../Text';
import { useNavbarController } from '~/src/app/features/navbar/controller';
import { DropdownComp } from '../../Dropdown';

interface NavbarActionsProps {
  actions: NavbarAction[];
}
export function NavbarActions({ actions = [] }: NavbarActionsProps) {
  const { pathName, helloUser, user } = useNavbarController();

  const renderButtons = () => (
    <>
      {actions.map((action, i) => {
        const isDisabled = pathName === action.href;

        return (
          <Button.root
            key={i}
            color={action.color}
            size="small"
            disabled={isDisabled}
            onClick={() => action.onClick?.() || {}}
          >
            <Button.contentWrapper>
              {isDisabled ? (
                <Button.label text={action.label} color="white" />
              ) : (
                <Button.link href={action.href}>
                  <Button.label text={action.label} color="white" />
                </Button.link>
              )}
            </Button.contentWrapper>
          </Button.root>
        );
      })}
    </>
  );

  const renderDropdown = () => (
    <div className="flex gap-4">
      <Text text={helloUser} size="md" color="white" weigth="semi-bold" />
      <DropdownComp.Dropdown />
    </div>
  );

  return <div className="flex gap-4">{!user ? renderButtons() : renderDropdown()}</div>;
}
