import Image from 'next/image';
import ScrollPaddingSetter from './ScrollPaddingSetter';
import { ThemeToggle } from '../components/ThemeToggle';
import { cn } from '../utils/cn';

export default function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full shadow-lg h-24',
        'bg-light dark:bg-deep-dark text-dark dark:text-light',
        'dark:bg-deep-dark dark:text-light dark:border-b dark:border-brand'
      )}
    >
      <div id="header-div" className="px-4 flex items-center justify-between w-full h-full relative">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <figure className="relative h-8 md:h-11 lg:h-15 w-8 md:w-11 lg:w-15">
            <Image src="logo.svg" alt="Logo" fill className="cursor-pointer" draggable={false} />
          </figure>
          <span className="font-bold hidden lg:block">Cobalt Software Solutions</span>
        </a>

        {/* Navigation */}
        <nav
          className={cn(
            'hidden absolute left-1/2 -translate-x-1/2 xl:flex space-x-20 text-xl xl:text-2xl font-medium'
          )}
        >
          <a href="#cobalt-axis" className="hover:text-cobalt-hover transition">
            Products
          </a>
          <a href="#consulting" className="hover:text-cobalt-hover transition">
            Services
          </a>
          <a href="#testimonials" className="hover:text-cobalt-hover transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-cobalt-hover transition">
            Contact
          </a>
        </nav>

        {/* Interactive part */}
        <div>
          <ThemeToggle className="" />
        </div>
      </div>
      <ScrollPaddingSetter />
    </header>
  );
}
