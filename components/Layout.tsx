import Head from 'next/head';
import React from 'react';
import Header from './Header';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
      <Head>
        <title>Plant-for-the-planet</title>
        <meta name="description" content="Plant for the planet task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
