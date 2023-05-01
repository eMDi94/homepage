import type { ReactNode } from 'react';
import type { MenuItemLinkT } from './MenuItemLink';
import { Menu } from '@headlessui/react';
import { DropdownMenuLink, MoveToDropdownMenuLink } from './DropdownMenu';
import '../styles/HeaderLink.css';

interface Props {
  className?: string;
  children: ReactNode;
  link: MenuItemLinkT;
}

type anchorProps = { href?: string, target?: string, onClick?: () => void };

const HeaderLink = ({ className, children, link }: Props) => {
  const aProps: anchorProps = { href: undefined, target: undefined };
  if (link.type === 'link') {
    aProps.href = link.href;
    aProps.target = link.target;
  } else if (link.type === 'moveToLink') {
    aProps.onClick = () => {
      const htmlElement = document.querySelector(`#${link.elementId}`);
      if (htmlElement) {
        htmlElement.scrollIntoView();
      }
    };
    className += ' cursor-pointer';
  }

  return (
    <>
      { link.type === 'dropdownLinks' && (
        <Menu as="div" className="inline-block">
          <Menu.Button className="inline-flex justify-center items-center">
            {link.icon}
            {link.label}
          </Menu.Button>
          <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md border bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col">
              {link.items.map(link => (
                <>
                  {link.type === 'link' && <DropdownMenuLink key={link.href} href={link.href} label={link.label} icon={link.icon} target={link.target} />}
                  {link.type === 'moveToLink' && <MoveToDropdownMenuLink key={link.label} label={link.label} elementId={link.elementId} icon={link.icon} />}
                </>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      )}
      { ['link', 'moveToLink'].includes(link.type) && (
        <a className={className} {...aProps}>
          {children}
        </a>
      )}
    </>
  );
}

export default HeaderLink;