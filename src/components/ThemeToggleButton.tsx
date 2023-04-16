import { useEffect, useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5/index';
import { themes, DARK_THEME, LIGHT_THEME, THEME_KEY } from '../globals';


const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem(THEME_KEY)) {
      return localStorage.getItem(THEME_KEY);
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }
    return LIGHT_THEME;
  });
  const toggleTheme = () => {
    const t = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    localStorage.setItem(THEME_KEY, t);
    setTheme(t);
  }

  useEffect(() => {
    const root = document.documentElement;
    if (theme === LIGHT_THEME) {
      root.classList.remove(DARK_THEME);
    } else {
      root.classList.add(DARK_THEME);
    }
  }, [theme]);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-yellow-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${checked ? 'bg-white text-black' : ''} cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {t === LIGHT_THEME ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : <div />;
}

export default ThemeToggle;