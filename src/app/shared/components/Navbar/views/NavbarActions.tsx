'use client';

import { NavbarAction } from '~types/NavbarActions';
import { Button } from '../../Button';
import { useNavbarController } from '~features/navbar/controller';
import { DropdownComp } from '../../Dropdown';
import { checkPublickRoute } from '~utils/checkPublickRoute';
import { dropDownOptions } from '~features/navbar/NavbarUtils';
import { Icon } from '../../Icon';
import { MdInfo } from 'react-icons/md';
import { APP_ROUTES } from '~utils/app-routes';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { draftMode } from '~utils/constants/draftMode';
import { navbarRenderDropdownIconTv, navbarRenderDropdownTv, navbarRootTv } from '../NavbarTV';

interface NavbarActionsProps {
  actions: NavbarAction[];
}
export function NavbarActions({ actions = [] }: NavbarActionsProps) {
  const { pathName, company, choiseIcon, choiseLink, choiseLabel } = useNavbarController();
  const { getLocalStorage } = useLocalStorage();

  const dragtModeFromLocalStorage = getLocalStorage(draftMode);

  const isPublicPage = checkPublickRoute(pathName);
  const shouldRenderDraftIcon =
    dragtModeFromLocalStorage && pathName !== APP_ROUTES.private['new-order'].name;

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
    <div className={navbarRenderDropdownTv()}>
      <Button.root color="primary" size="small">
        {shouldRenderDraftIcon && (
          <Icon
            tooltipText="Pedido em rascunho"
            tooltip
            icon={MdInfo}
            size="small"
            color="warning"
            className={navbarRenderDropdownIconTv()}
          />
        )}
        <Button.link href={choiseLink}>
          <Button.contentWrapper>
            <Button.icon icon={choiseIcon} color="white" />
            <Button.label text={choiseLabel} color="white" />
          </Button.contentWrapper>
        </Button.link>
      </Button.root>
      <DropdownComp.Dropdown options={dropDownOptions} />
    </div>
  );

  return (
    <div className={navbarRootTv()}>
      {company && !isPublicPage ? renderDropdown() : renderButtons()}
    </div>
  );
}
