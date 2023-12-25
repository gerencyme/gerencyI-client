'use client';

import { NavbarAction } from '~types/NavbarActions';
import { Button } from '../../Button';
import { useNavbarController } from '~/src/app/features/navbar/controller';
import { DropdownComp } from '../../Dropdown';
import { checkPublickRoute } from '~utils/checkPublickRoute';
import { dropDownOptions } from '~/src/app/features/navbar/NavbarUtils';

interface NavbarActionsProps {
  actions: NavbarAction[];
}
export function NavbarActions({ actions = [] }: NavbarActionsProps) {
  const { pathName, user, choiseIcon, choiseLink, choiseLabel } = useNavbarController();
  const isPublicPage = checkPublickRoute(pathName);

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
      <Text
        text={helloUser}
        size="md"
        color="white"
        weight="semi-bold"
        className="hidden md:flex"
      />
      <DropdownComp.Dropdown />
    </div>
  );

  return (
    <div className="flex gap-4">{user && !isPublicPage ? renderDropdown() : renderButtons()}</div>
  );
}
