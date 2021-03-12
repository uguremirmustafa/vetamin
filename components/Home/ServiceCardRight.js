import Image from 'next/image';
import React from 'react';

function ServiceCard({ order, bg }) {
  return (
    <div className="w-full h-96 grid sm:grid-cols-5 ">
      <div className="relative row-span-1 w-full col-span-2 bg-red-300  bg-cover rounded-xl transform hover:-rotate-3 cursor-pointer transition delay-150 duration-300 ease-in-out shadow-xl">
        <Image
          alt="cat"
          src={`/assets/${bg}`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-xl"
        />
      </div>

      <div
        className="col-span-3 p-8 my-auto bg-gray-100 rounded-xl bg-opacity-100 order-first hover:shadow-xl transition delay-150 duration-300 ease-in-out
        text-sm lg:text-md
        relative -right-10 "
      >
        <h3 className="font-bold text-lg mb-2">Vaccination</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia perferendis
          atque assumenda! Fuga molestiae a accusantium, ex iste ut voluptatum doloremque sed
          eveniet laborum obcaecati repellendus voluptas modi tempore.
        </p>
        <button className="bg-red-400 w-40 mx-auto rounded-md font-bold text-white p-2 mt-6 shadow">
          Book a Session
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
