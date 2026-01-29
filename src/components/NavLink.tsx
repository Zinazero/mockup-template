'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { cn } from '../utils/cn';

type NavLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  activeClass?: string;
};

export const NavLink = ({ children, href, className, activeClass }: NavLinkProps) => {
  const pathname = usePathname();

  const homeChecker = (href: string) => {
    if (href === '/') {
      if (pathname === href) {
        return true;
      }

      return false;
    } else if (pathname?.includes(href)) {
      return true;
    }

    return false;
  };

  return (
    <Link href={href} className={cn('relative', className, homeChecker(href) ? activeClass : '')}>
      {children}
      {homeChecker(href) && <hr className="absolute w-full top-full mt-2 text-brand" />}
    </Link>
  );
};
