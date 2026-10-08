import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Xntrova — Growth that moves your business forward',
  description: 'Strategy, creative and technology for brands ready to grow. Meet Xntrova, a digital growth agency based in New Delhi.',
  openGraph: { title: 'Xntrova — Growth that moves your business forward', description: 'A digital growth partner for ambitious brands.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
