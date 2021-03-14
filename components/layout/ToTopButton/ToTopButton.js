/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

function ToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      const height = window.innerHeight;
      if (window.scrollY >= height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <>
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-40 cursor-pointer fixed right-4 xl:right-28 2xl:right-52 bottom-20 md:bottom-4 hover:-rotate-45 transform transition duration-300"
          style={{ zIndex: 1000 }}
          onClick={() => scroll.scrollToTop()}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-full w-10 h-10 shadow-lg flex justify-center items-center hamburger"
          >
            <a>
              <FaChevronUp color="#f87171" size="24px" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ToTopButton;
