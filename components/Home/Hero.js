import React from 'react';
import HeroWave from './HeroWave';
import { Link as Scroller } from 'react-scroll';

import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
function Hero() {
  return (
    <>
      <div className="h-screen bg-hero-bg bg-cover bg-center">
        <motion.h2
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          className="text-xl font-bold text-center text-white font-bold absolute top-24 w-full left-0 lg:text-3xl z-10"
        >
          Your friend doesn't feel good?
        </motion.h2>

        <div className="text-center rounded-xl h-min z-10 mx-auto w-full absolute bottom-20 md:bottom-52">
          <h2 className="text-4xl font-bold px-4 pb-2 font-bold lg:text-7xl text-white">
            We can help!
          </h2>
          <div className="p-4 text-gray-100 font-medium">
            <p className="text-md md:text-3xl font-bold pb-4 underline">
              Best veterinary services in the town!
            </p>
            {/* <div className="h-px bg-white max-w-xl mx-auto mb-2"></div> */}
            <p className="text-sm">We care your pets just like you do, with love!</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Scroller to="services" smooth={true} duration={1000}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                className="my-2 py-3 rounded-full font-bold bg-red-400 text-white z-10 outline-none hover:text-red-400 hover:bg-white transition duration-500 flex justify-between items-center px-4 gap-2"
              >
                Reach Us!
              </motion.button>
            </Scroller>
            <Scroller to="testimonials" smooth={true} duration={1000}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                className="md:ml-4 my-2 py-3 rounded-full font-bold bg-white text-red-400 w-60 z-10 outline-none hover:text-white hover:bg-red-400 transition duration-500"
              >
                Meet Happy Customers
              </motion.button>
            </Scroller>
          </div>
        </div>
        <HeroWave />
      </div>
      <div className="h-screen bg-black bg-opacity-60 absolute top-0 w-full"></div>
    </>
  );
}

export default Hero;
