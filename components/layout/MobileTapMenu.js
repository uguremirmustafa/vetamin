import Link from 'next/link';
import React from 'react';
import { FaMap, FaPhone, FaWhatsapp } from 'react-icons/fa';

function MobileTapMenu() {
  return (
    <nav className="w-full h-14 bg-red-400 text-white fixed bottom-0 z-30 flex justify-around items-center text-xs md:hidden">
      <a href="tel:+905415213549" className="flex flex-col justify-center items-center w-20">
        <FaPhone size="20px" />
        <span className="pt-1">call!</span>
      </a>

      <a
        href="https://wa.me/905415213549"
        className="flex flex-col justify-center items-center w-20"
      >
        <FaWhatsapp size="20px" />
        <span className="pt-1">whatsapp!</span>
      </a>

      <Link href="/contact">
        <a className="flex flex-col justify-center items-center w-20">
          <FaMap size="20px" />
          <span className="pt-1">visit!</span>
        </a>
      </Link>
    </nav>
  );
}

export default MobileTapMenu;
