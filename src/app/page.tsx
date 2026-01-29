import { ThemeToggle } from '../components/ThemeToggle';
import { cn } from '../utils/cn';

export default function Home() {
  return (
    <div className={cn('flex min-h-screen items-center justify-center bg-red font-sans dark:bg-deep-dark')}>
      <ThemeToggle className={cn('absolute top-15 right-15 text-2xl')} />
      <main
        className={cn(
          'flex min-h-screen w-full max-w-3xl flex-col items-center justify-between',
          'py-32 px-16 bg-red dark:bg-deep-dark sm:items-start',
        )}
      ></main>
    </div>
  );
}
