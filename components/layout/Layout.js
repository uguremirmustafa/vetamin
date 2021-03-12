import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      {/* <Navbar /> */}
      <main className="w-full mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
