import React from 'react';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
function Slide({ data }) {
  const { human, animal, comment, name } = data;
  return (
    <div
      className="bg-gradient-to-br from-indigo-200 to-pink-200 w-full rounded-xl flex flex-col items-center justify-around p-8"
      style={{ height: '600px' }}
    >
      <div>
        <div className="relative w-60 h-60 md:right-16 hover:scale-110 transform transition duration-700">
          <Image
            alt="cat"
            src={human}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-full shadow-md"
          />
        </div>
        <div className="relative w-32 h-32 left-20 md:left-28 rounded-full border-2 border-white bottom-20">
          <Image
            alt="cat"
            src={animal}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex w-full justify-center text-yellow-500 mb-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h3 className="text-lg font-bold text-center p-2">{name}</h3>
        <div className="px-2 h-24 py-2 overflow-ellipsis overflow-hidden max-w-lg">{comment}</div>
      </div>
    </div>
  );
}

export default Slide;
