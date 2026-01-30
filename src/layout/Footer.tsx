import { cn } from '../utils/cn';

export const Footer = () => {
  return (
    <footer
      className={cn(
        'shadow-sm text-sm py-4 text-center fixed bottom-0 left-0 w-full',
        'bg-light dark:bg-deep-dark text-dark dark:text-light',
        'dark:bg-deep-dark dark:text-light dark:border-t dark:border-dark',
      )}
    >
      <span>&copy; 2026 Cobalt Software Solutions Inc. All rights reserved.</span>
    </footer>
  );
};
