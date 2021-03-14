import React from 'react';
import MobileTapMenu from './MobileTapMenu';
import Navbar from './Navbar';
import ToTopButton from './ToTopButton/ToTopButton';

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full mx-auto">{children}</main>
      <MobileTapMenu />
      <ToTopButton />
    </div>
  );
}

export default Layout;
