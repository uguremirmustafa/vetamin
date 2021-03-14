import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { motion } from 'framer-motion';
function OwnerCard({ owner }) {
  const size = '24px';
  return (
    <div className=" mt-16 mb-48 md:my-8 ">
      <div className="bg-pink-200 h-96 md:w-96 w-80 rounded-xl flex flex-col items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
          className="relative w-60 h-60 -top-10 rounded-full shadow-xl"
        >
          <Image src={owner.image} layout="fill" objectFit="cover" className="rounded-full" />
        </motion.div>
        <div className="relative flex flex-col items-center">
          <div className="bg-white rounded-xl absolute p-6 w-72 md:w-80 text-center shadow-xl">
            <p className="font-bold text-lg">
              <span className="text-bold">{owner.name}</span>
            </p>
            <p className="pt-2 flex-col flex items-center justify-center">
              <span className="font-bold my-1">
                <MdPets size={size} />
              </span>
              <span className="text-sm">{owner.role}</span>
            </p>
            <div className="h-px bg-indigo-300 my-2"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              className="flex justify-center gap-2   cursor-pointer"
            >
              <FaTwitter size={size} className="text-indigo-400 hover:text-indigo-500" />
              <FaInstagram size={size} className="text-indigo-400 hover:text-indigo-500" />
              <FaEnvelope size={size} className="text-indigo-400 hover:text-indigo-500" />
            </motion.div>
            <div className="h-px bg-indigo-300 my-2"></div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerCard;
