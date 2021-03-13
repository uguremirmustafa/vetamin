import React from 'react';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
function Slide({ data }) {
  const { human, animal, comment, name } = data;
  return (
    <div
      className="bg-yellow-200 border-2 border-white w-full rounded-xl flex flex-col items-center justify-around p-8"
      style={{ height: '630px' }}
    >
      <div className="pt-8">
        <div className="relative w-60 h-60 md:right-8 hover:scale-110 transform transition duration-700 border-2 border-white rounded-full">
          <Image
            alt="cat"
            src={human}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-full shadow-md"
          />
        </div>
        <div className="relative w-24 h-24 md:w-32 md:h-32 left-40 md:left-28 rounded-full border-2 border-white bottom-20">
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

      <div className="mb-8 bg-white w-full text-center p-4 rounded-lg">
        <div className="flex w-full justify-center text-yellow-500 mb-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h3 className="text-lg font-bold text-center p-2 ">{name}</h3>
        <div className="px-2 h-24 py-2 overflow-ellipsis mx-auto overflow-hidden max-w-lg">
          {comment}
        </div>
      </div>
    </div>
  );
}

export default Slide;
