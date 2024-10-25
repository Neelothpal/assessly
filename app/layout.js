'use client'; // This should be the first line

import { SessionProvider } from 'next-auth/react';
import NavBar from '@/app/components/NavBar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
