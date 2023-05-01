import { Fragment, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import type { MenuItemLinkT } from './MenuItemLink';

export interface DropdownMenuProps {
  links: MenuItemLinkT[]
}

const DropdownMenu = ({ links }: DropdownMenuProps) => {
  links = links.flatMap(link => link.type === 'dropdownLinks' ? link.items : [link]);
  return (
    <Menu as="div" className="relative inline-block text-left md:hidden">
      <Menu.Button className="inline-flex justify-center rounded-md border border-white px-2 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:text-white focus:bg-teal-400 dark:focus:bg-sky-900 transition-all">
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
              <>
                {link.type === 'link' && <DropdownMenuLink key={link.href} href={link.href} label={link.label} icon={link.icon} target={link.target} />}
                {link.type === 'moveToLink' && <MoveToDropdownMenuLink key={link.label} label={link.label} elementId={link.elementId} icon={link.icon} />}
              </>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

interface DropdownMenuLinkProps {
  href: string;
  target?: string;
  icon?: ReactNode;
  label: string;
}

export const DropdownMenuLink = ({ href, target, icon, label}: DropdownMenuLinkProps) => (
  <Menu.Item
    as="a"
    key={href}
    href={href}
    target={target}
    className="px-4 py-2 text-zinc-900 font-semibold"
  >
    {icon}
    {label}
  </Menu.Item>
);

interface MoveToDropdownMenuLinkProps {
  elementId: string;
  icon?: ReactNode;
  label: string;
}

export const MoveToDropdownMenuLink = ({ elementId, icon, label }: MoveToDropdownMenuLinkProps) => {
  const moveToElement = () => {
    const htmlElement = document.querySelector(`#${elementId}`);
    if (htmlElement) {
      htmlElement.scrollIntoView();
    }
  }; 
  return (
    <Menu.Item
      as="a"
      onClick={moveToElement}
      key={label}
      className="px-4 py-2 text-zinc-900 font-semibold"
    >
      {icon}
      {label}
    </Menu.Item>
  );
}

export default DropdownMenu;
