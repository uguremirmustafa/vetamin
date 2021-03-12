import React from 'react';

import Image from 'next/image';

function Slide({ data }) {
  const { image, service, desc } = data;
  return (
    <div
      className="bg-gray-100 rounded-xl grid grid-rows-2 gap-4 overflow-hidden"
      style={{ height: '500px' }}
    >
      <div className="relative row-span-1 w-full ">
        <Image
          alt="cat"
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-t-xl"
        />
      </div>
      <div className="flex justify-between flex-col pb-8">
        <div>
          <h3 className="text-lg font-bold text-center p-2">{service}</h3>
          <div className="px-6 py-2">{desc}</div>
        </div>
        <button className="bg-red-400 w-40 mx-auto rounded-lg font-bold text-white p-2 mb-2">
          Book a Session
        </button>
      </div>
    </div>
  );
}

export default Slide;
