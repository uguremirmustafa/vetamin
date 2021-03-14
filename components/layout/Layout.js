import Head from 'next/head';
import React from 'react';
import MobileTapMenu from './MobileTapMenu';
import Navbar from './Navbar';
import ToTopButton from './ToTopButton/ToTopButton';

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Vetamin</title>
      </Head>
      <Navbar />
      <main className="w-full mx-auto">{children}</main>
      <MobileTapMenu />
      <ToTopButton />
    </div>
  );
}

export default Layout;
