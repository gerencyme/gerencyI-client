import { Navbar } from '~/src/app/shared/components/Navbar';
import { actions } from '../NavbarUtils';
import { NavbarAction } from '~/src/app/shared/types/NavbarActions';

interface MenuProps {
  newActions?: NavbarAction[];
}

export function Menu({ newActions }: MenuProps) {
  return (
    <Navbar.root>
      <Navbar.logo />
      <Navbar.actions actions={newActions ?? actions} />
    </Navbar.root>
  );
}
