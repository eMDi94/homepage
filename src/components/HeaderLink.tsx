import type { ReactNode } from 'react';
import type { MenuItemLinkT } from './MenuItemLink';
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
  } else {
    aProps.onClick = () => {
      const htmlElement = document.querySelector(`#${link.elementId}`);
      if (htmlElement) {
        htmlElement.scrollIntoView();
      }
    };
    className += ' cursor-pointer';
  }

  return (
    <a className={className} {...aProps}>
      {children}
    </a>
  );
}

export default HeaderLink;