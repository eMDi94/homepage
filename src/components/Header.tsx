import { useEffect, useState } from 'react';
import HeaderLink from './HeaderLink';
import ThemeToggle from './ThemeToggleButton';
import DropdownMenu from './DropdownMenu';
import { IoLogoGithub } from 'react-icons/io5';
import { FaHome, FaMicrochip, FaRobot, FaProjectDiagram } from 'react-icons/fa';
import { basePath } from '../config';
import type { MenuItemLinkT } from './MenuItemLink';

const links: MenuItemLinkT[] = [
  { type: 'link', href: basePath, label: 'Home', icon: <FaHome /> },
  { type: 'moveToLink', elementId: 'technology', label: 'Techs', icon: <FaMicrochip /> },
  { type: 'moveToLink', elementId: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { type: 'link', href: 'https://github.com/eMDi94', label: 'GitHub', icon: <IoLogoGithub /> }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [yOffset, setYOffset] = useState(window.innerWidth <= 400 ? 10 : 400);

  // Add window size listener
  useEffect(() => {
    const listener = () => {
      if (window.innerWidth <= 400) {
        setYOffset(10);
      } else {
        setYOffset(400);
      }
    }

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [window.innerWidth]);

  // Add scroll listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listener = () => setScrolled(window.scrollY > yOffset);
      window.addEventListener('scroll', listener);
      return () => window.removeEventListener('scroll', listener);
    }
  }, []);

  return (
    <header className={`fixed w-full p-2 z-20 ${scrolled ? 'bg-teal-400 dark:bg-sky-900' : 'bg-transparent'}`}>
      <div className="mx-auto">
        <nav className="flex items-center gap-3 text-base">
          <a href={`${basePath}/`} className="group">
            <h2 className="font-semibold tracking-tighter p-2 font-mplus text-lg">
              <FaRobot className="w-5 inline-block transition-transform group-hover:rotate-[20deg]" />
              Marco Dalai
            </h2>
          </a>
          <div className="flex-1" />
          <div className="items-center gap-6 hidden md:flex">
            {links.map(link => (
              <HeaderLink link={link} key={link.label}>
                {link.icon}
                {link.label}
              </HeaderLink>
            ))}
          </div>
          <ThemeToggle />
          <DropdownMenu links={links} />
        </nav>
      </div>
    </header>
  );
}

export default Header;