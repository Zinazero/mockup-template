import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from '../components/NavLink';
import brandData from '../data/brand.json';
import ctaData from '../data/cta.json';
import logoData from '../data/logo.json';
import navData from '../data/nav.json';
import { cn } from '../utils/cn';
import ScrollPaddingSetter from './ScrollPaddingSetter';

type NavLinkType = {
  text: string;
  href: string;
};

export const Header = () => {
  const navLinks: NavLinkType[] = navData;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full shadow-lg h-24',
        'bg-deep-dark text-dark',
        'dark:bg-dark dark:text-light dark:border-b dark:border-brand',
      )}
    >
      <div id="header-div" className="px-4 flex items-center justify-between w-full h-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-4">
          <Image
            src={`/logo${logoData.fileExtension}`}
            alt="Logo"
            width={logoData.width}
            height={logoData.height}
            className="cursor-pointer w-18"
            draggable={false}
          />
          <span className="font-bold hidden lg:block">{brandData.name}</span>
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            'hidden absolute left-1/2 -translate-x-1/2 lg:flex lg:gap-10 xl:gap-16 text-xl xl:text-2xl font-medium',
          )}
        >
          {navLinks.map((link) => (
            <NavLink key={link.text} href={link.href}>
              <span className="text-light hover:text-brand">{link.text}</span>
            </NavLink>
          ))}
        </nav>

        {/* Call to action */}
        <Link
          href="/booking"
          className={cn(
            'rounded-lg p-4 bg-brand text-light font-semibold w-40 lg:w-50 xl:w-60 text-center',
            'hover:bg-brand-hover transition text-xl',
          )}
        >
          {ctaData.text}
        </Link>
      </div>
      <ScrollPaddingSetter />
    </header>
  );
};
