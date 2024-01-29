/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Icon } from '../../Icon';
import Link from 'next/link';
import { useAuthController } from '~features/auth/controller';
import { DropDownOptions } from '~types/DropDownOptions';
import { dropdawnMenuButtonTv, dropdawnMenuItemsTv, dropdawnRootTv } from '../DropdownTV';

interface DropdownRootProps {
  options?: DropDownOptions[];
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function Dropdown({ options = [] }: DropdownRootProps) {
  const { logout } = useAuthController();

  return (
    <Menu as="div" className={dropdawnRootTv()}>
      <Menu.Button className={dropdawnMenuButtonTv()}>
        <Icon
          icon={IoMdArrowDropdown}
          color="white"
          aria-hidden="true"
          size="medium"
          dropdown="base"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={dropdawnMenuItemsTv()}>
          {options.map((option, i) => (
            <Menu.Item key={`menu-item-${i}`}>
              {({ active }) => (
                <Link
                  href={option.href}
                  className={classNames(
                    active ? 'bg-white text-purple rounded-md' : 'text-purple/70',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {option.label}
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'bg-white/70 rounded-md text-purple' : 'text-purple/70',
                  'block px-4 py-2 text-sm w-full text-start'
                )}
                onClick={logout}
              >
                Sair
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
