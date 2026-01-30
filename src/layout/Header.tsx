import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from '../components/NavLink';
import brandData from '../data/brand.json';
import navData from '../data/nav.json';
import { cn } from '../utils/cn';
import ScrollPaddingSetter from './ScrollPaddingSetter';
import ctaData from '../data/cta.json';
import logoData from '../data/logo.json';

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
        'bg-light dark:bg-deep-dark text-dark dark:text-light',
        'dark:bg-deep-dark dark:text-light dark:border-b dark:border-brand',
      )}
    >
      <div id="header-div" className="px-4 flex items-center justify-between w-full h-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image
              src={`logo${logoData.fileExtension}`}
              alt="Logo"
              width={logoData.width}
              height={logoData.height}
              className="cursor-pointer w-8 md:w-11 lg:w-15"
              draggable={false}
            />
          <span className="font-bold hidden lg:block">{brandData.name}</span>
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            'hidden absolute left-1/2 -translate-x-1/2 xl:flex space-x-20 text-xl xl:text-2xl font-medium',
          )}
        >
          {navLinks.map((link) => (
            <NavLink key={link.text} href={link.href}>
              <span className="hover:text-brand">{link.text}</span>
            </NavLink>
          ))}
        </nav>

        {/* Call to action */}
        <button
          type="button"
          className={cn(
            'mt-4 rounded-lg p-4 bg-brand text-light font-semibold w-60 text-center',
            'hover:bg-brand-hover transition text-xl',
          )}
        >
          {ctaData.text}
        </button>
      </div>
      <ScrollPaddingSetter />
    </header>
  );
};
