import { cn } from '../utils/cn';

const Footer = () => {
  return (
    <footer
      className={cn(
        'shadow-sm text-sm py-4 text-center',
        'bg-light dark:bg-deep-dark text-dark dark:text-light',
        'dark:bg-deep-dark dark:text-light dark:border-t dark:border-dark',
      )}
    >
      <span>&copy; 2026 Cobalt Software Solutions Inc. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
