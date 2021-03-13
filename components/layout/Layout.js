import React from 'react';
import MobileTapMenu from './MobileTapMenu';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full mx-auto">{children}</main>
      <MobileTapMenu />
    </div>
  );
}

export default Layout;
