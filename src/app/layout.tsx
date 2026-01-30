import type { Metadata } from 'next';
import '../styles/globals.css';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { ThemeToggle } from '../components/ThemeToggle';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { cn } from '../utils/cn';
import { SetTheme } from './scripts/setTheme';

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source',
});

export const metadata: Metadata = {
  title: 'Cobalt Template',
  description: 'by Cobalt Software Solutions Inc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SetTheme />
      </head>
      <body className={`${sans.variable} ${serif.variable} antialiased bg-light dark:bg-deep-dark`}>
        <Header />
        <main className={cn('min-h-screen flex flex-col items-center', 'bg-white dark:bg-dark')}>
          {children}
        </main>
        <ThemeToggle className="fixed bottom-15 right-15 text-3xl" />
        <Footer />
      </body>
    </html>
  );
}
