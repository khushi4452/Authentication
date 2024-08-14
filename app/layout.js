import React from 'react';
import { ClerkProvider } from '@clerk/nextjs'; 
import Header from './Header'; 
import inter from 'path-to-inter-class'; 

export default function Layout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}> 
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
} 
