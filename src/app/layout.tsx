import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Progressbar, Footer, Header } from 'src/components';
import FooterP from './pages/footer/page';
import 'nprogress/nprogress.css';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Welcome to HollywayGlobal, your friendly and well trusted Agro E-Commerce website',
  description: 'Website created by Ilesanmi Erioluwa Victor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white`}>
        <div className='container-custom'>
          <div className='overall-layout'>
            <Header />
            {children}
            <Suspense fallback={null}>
              <Progressbar />
            </Suspense>
            <FooterP />
          </div>
        </div>
      </body>
    </html>
  );
}
