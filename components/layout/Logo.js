import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
function Logo() {
  return (
    <Link href="/">
      <div className="text-md cursor-pointer bg-white rounded-3xl shadow-lg z-50 overflow-hidden flex items-center justify-center font-bold bg-red-400">
        <motion.p
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 1, stiffness: 100, type: 'spring', delay: 0.4 }}
          className="text-white bg-red-300 px-4 py-1 rounded-3xl h-10 leading-8"
        >
          Vet
        </motion.p>
        <p className="text-white bg-red-400 pr-2 py-1 pl-1 h-10 leading-8">amin</p>
      </div>
    </Link>
  );
}

export default Logo;
