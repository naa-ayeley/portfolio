import { OWNER } from '@/lib/constants';
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import ModalProvider from '@/providers/modal-provider';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';

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
      <body className='flex flex-col'>

        <ModalProvider />
        <Navbar />
        <main className='container flex flex-col text-[#484A56] mx-auto '>

          {children}
        </main>
        <Footer  />
      </body>
    </html>
  );
}
