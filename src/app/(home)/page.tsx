import { cn } from '../../utils/cn';

export default function Home() {
  return (
    <div className={cn('flex min-h-screen items-center justify-center bg-white font-sans dark:bg-deep-dark')}>
      <main
        className={cn(
          'flex min-h-screen w-full max-w-3xl flex-col items-center justify-between',
          'py-32 px-16 bg-white dark:bg-deep-dark sm:items-start',
        )}
      ></main>
    </div>
  );
}
