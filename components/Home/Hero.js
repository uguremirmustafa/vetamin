import React from 'react';
import HeroWave from './HeroWave';

function Hero() {
  return (
    <>
      <div className="h-screen bg-hero-bg bg-cover bg-center flex flex-col justify-center items-center ">
        <div className="absolute top-0 p-4 font-black text-4xl z-40 w-full bg-white bg-opacity-10 text-center">
          <span className="text-red-500">Vet</span>
          <span>amin</span>
        </div>
        <div className="text-center rounded-xl h-min z-10 mx-4 mt-52">
          <h2 className="text-xl font-bold text-center text-white font-bold absolute top-24 w-full left-0 lg:text-3xl">
            Your friend doesn't feel good?
          </h2>
          <h2 className="text-4xl font-bold px-4 pb-4 text-white font-bold lg:text-5xl">
            We can help!
          </h2>
          <div className="bg-white bg-opacity-60 h-px"></div>
          <p className="p-4 text-gray-100 font-medium">
            We care your pets just like you do, with love!
          </p>
        </div>
        <button className="my-4 py-3 rounded-md font-bold bg-red-500 text-white w-40 z-10">
          Reach Us!
        </button>
        <HeroWave />
      </div>
      <div className="h-screen bg-black bg-opacity-60 absolute top-0 w-full"></div>
    </>
  );
}

export default Hero;
