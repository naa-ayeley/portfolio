import { OWNER } from '@/lib/constants';
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import ModalProvider from '@/providers/modal-provider';
import Navbar from '@/components/navigation/navbar';

export const metadata: Metadata = {
  title: `${OWNER} | Home`,
  description: `A portfolio website for UI/UX Designer, ${OWNER}`,
  icons: { icon: '/images/logos/favicon.ico' }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container max-sm:px-4 mx-auto'>

        <ModalProvider />
        <Navbar />
        <main>

          {children}
        </main>

      </body>
    </html>
  );
}
