import Link from 'next/link';
import React from 'react';
function Logo() {
  return (
    <Link href="/">
      <div className="text-md cursor-pointer bg-white rounded-3xl shadow-lg z-50 overflow-hidden flex items-center justify-center font-bold bg-red-400">
        <p className="text-white bg-red-300 px-4 py-1 rounded-3xl h-10 leading-8">Vet</p>
        <p className="text-white bg-red-400 pr-2 py-1 pl-1 h-10 leading-8">amin</p>
      </div>
    </Link>
  );
}

export default Logo;
