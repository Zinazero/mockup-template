'use client';
import { useEffect } from 'react';

export default function ScrollPaddingSetter() {
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const setPadding = () => {
      document.documentElement.style.scrollPaddingTop = `${header.clientHeight}px`;
    };

    setPadding();
    window.addEventListener('resize', setPadding);
    return () => window.removeEventListener('resize', setPadding);
  }, []);

  return null;
}
