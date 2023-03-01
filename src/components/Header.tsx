import { useEffect, useState } from 'react';
import HeaderLink from './HeaderLink';
import ThemeToggle from './ThemeToggleButton';
import { IoLogoGithub } from 'react-icons/io5';
import { FaHome, FaMicrochip, FaRobot } from 'react-icons/fa';

interface Props {
  pathname: string;
}

const Header = ({ pathname }: Props) => {
  const cleanedPathname = pathname.replace(/\/$/, '');

  const [scrolled, setScrolled] = useState(false);
  const isHome = !cleanedPathname.length;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScrolled(window.scrollY > 400));
    }
  }, []);

  return (
    <header className={`fixed bg-transparent w-full p-2 z-20 ${scrolled || !isHome ? 'bg-teal-400 dark:bg-violet-900' : ''}`}>
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
            <HeaderLink href="/" isActive={isHome}>
              <FaHome />
              Home
            </HeaderLink>
            <HeaderLink href="/techs" isActive={cleanedPathname.includes('/techs')}>
              <FaMicrochip />
              Technologies
            </HeaderLink>
            <HeaderLink href="https://github.com/eMDi94" target="_blank">
              <IoLogoGithub />
              GitHub
            </HeaderLink>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
