'use client';

import { useState } from 'react';
import { TabsNavigation } from '~/src/app/shared/components/TabsNavigation';
import { links } from '../TabsNavigationUtils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTabds = () => setIsOpen((prev) => !prev);

  return (
    <TabsNavigation.root isOpen={isOpen}>
      <TabsNavigation.items isOpen={isOpen} links={links} />
      <TabsNavigation.icon isOpen={isOpen} onClick={toggleTabds} />
    </TabsNavigation.root>
  );
}
