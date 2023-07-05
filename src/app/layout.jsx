'use client'
import { firebaseConfig } from './firebase/FireabaseConfig';
import { FirebaseAppProvider } from 'reactfire';
import { ContextProvider } from "./context/ContextProvider";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ContextProvider>
          <html lang="en">
            <head>
              <title>MicroEconAI</title>
            </head>
            <body className={inter.className}>
              {children}
            </body>
          </html>
        </ContextProvider>
      </FirebaseAppProvider>
    </>
  )
}