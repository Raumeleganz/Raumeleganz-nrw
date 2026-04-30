import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import dynamicImport from "next/dynamic";
const TrackingManager = dynamicImport(
  () => import("@/components/TrackingManager"),
  { ssr: false }
);

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Raumeleganz Spanndecken | Modernes Handwerk mit Leidenschaft',
  description: 'Professionelle Spanndecken-Installation für Ihr Zuhause. Kreativ, zuverlässig, hochwertig.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <TrackingManager />
      </body>
    </html>
  );
}

