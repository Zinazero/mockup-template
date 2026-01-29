import type { Metadata } from 'next';
import '../styles/globals.css';
import { SetTheme } from './scripts/setTheme';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Inter, Source_Serif_4 } from 'next/font/google';

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
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
