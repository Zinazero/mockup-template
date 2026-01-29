'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

type ThemeToggleProps = {
  className?: string;
};
export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDark = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;

    root.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleDark}
      className={cn(
        'text-2xl text-gray-500/50 dark:text-light/70 hover:text-brand dark:hover:text-brand-light active:scale-95 transition',
        className,
      )}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </button>
  );
};
