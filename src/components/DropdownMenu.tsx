import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaMicrochip } from 'react-icons/fa';

const links = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/techs', label: 'Technologies', icon: FaMicrochip }
];

const DropdownMenu = () => (
  <Menu as="div" className="relative inline-block text-left md:hidden">
    <Menu.Button className="inline-flex justify-center rounded-md border border-white px-2 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:text-white focus:bg-teal-400 dark:focus:bg-violet-900 transition-all">
      <GiHamburgerMenu className="w-5 h-5" />
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="flex flex-col">
          {links.map(link => (
            <Menu.Item
              as="a"
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-zinc-900 font-semibold"
            >
              {link.icon && <link.icon />}
              {link.label}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default DropdownMenu;
