import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'slick-carousel/slick/slick.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'The best game store in the world',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
