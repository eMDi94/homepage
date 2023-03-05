import { useEffect, useState } from 'react';
import HeaderLink from './HeaderLink';
import ThemeToggle from './ThemeToggleButton';
import DropdownMenu from './DropdownMenu';
import { IoLogoGithub } from 'react-icons/io5';
import { FaHome, FaMicrochip, FaRobot } from 'react-icons/fa';
import { basePath } from '../config';

interface Props {
  pathname: string;
}

const Header = ({ pathname }: Props) => {
  const cleanedPathname = pathname.replace(/\/$/, '');

  const [scrolled, setScrolled] = useState(false);
  const [yOffset, setYOffset] = useState(window.innerWidth <= 400 ? 10 : 400);
  const isHome = cleanedPathname === basePath;

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
    <header className={`fixed w-full p-2 z-20 ${scrolled ? 'bg-teal-400 dark:bg-violet-900' : 'bg-transparent'}`}>
      <div className="mx-auto">
        <nav className="flex items-center gap-3 text-base">
          <a href="/" className="group">
            <h2 className="font-semibold tracking-tighter p-2 font-mplus text-lg">
              <FaRobot className="w-5 inline-block transition-transform group-hover:rotate-[20deg]" />
              Marco Dalai
            </h2>
          </a>
          <div className="flex-1" />
          <div className="items-center gap-6 hidden md:flex">
            <HeaderLink href={basePath} isActive={isHome}>
              <FaHome />
              Home
            </HeaderLink>
            <HeaderLink href={`${basePath}/techs`} isActive={cleanedPathname.includes('/techs')}>
              <FaMicrochip />
              Technologies
            </HeaderLink>
            <HeaderLink href="https://github.com/eMDi94" target="_blank">
              <IoLogoGithub />
              GitHub
            </HeaderLink>
          </div>
          <ThemeToggle />
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
