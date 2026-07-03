import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Tisdale Properties LLC — Rentals in Jackson, MS',
    template: '%s | Tisdale Properties',
  },
  description:
    'Quality single-family homes, duplexes, and apartments for rent in Jackson, Mississippi. Rooted in Jackson. Built for You.',
  openGraph: {
    siteName: 'Tisdale Properties LLC',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/apple-touch-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/images/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
