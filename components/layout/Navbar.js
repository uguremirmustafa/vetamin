import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
// import { signIn, signOut, useSession } from 'next-auth/client';
import { ActiveLink } from './ActiveLink';
import { motion } from 'framer-motion';
import { FaBars, FaCheck, FaTimesCircle, FaWhatsapp } from 'react-icons/fa';
import useOnClickOutside from 'hooks/useOnClickOutside';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const normalRoutes = [
    // { route: '/', label: 'Home' },
    { route: '/contact', label: 'contact' },
  ];
  const hamburgerRoutes = [
    { route: '/', label: 'Home' },
    { route: '/services', label: 'services' },
    { route: '/contact', label: 'contact' },
  ];

  const normalLinks = normalRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <a className="nav-btn featured-nav-btn">{i.label}</a>
    </ActiveLink>
  ));
  const hamburgerLinks = hamburgerRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <a className="nav-btn w-full" onClick={() => setMenuOpen(false)}>
        {i.label}
      </a>
    </ActiveLink>
  ));

  const ref = useRef();
  useOnClickOutside(ref, () => setMenuOpen(false));

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const hamburgerMenu = () => (
    <motion.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      ref={ref}
      className="bg-white text-red-500 fixed rounded z-50 top-4 right-4 xl:right-28 2xl:right-52 shadow-lg"
    >
      <ul className="p-4 flex flex-col justify-center items-end">{hamburgerLinks}</ul>
    </motion.nav>
  );
  return (
    <>
      {isScrolled ? (
        <>
          {!menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-40 cursor-pointer fixed right-4 xl:right-28 2xl:right-52 top-4 hover:-rotate-45 transform transition duration-300"
              style={{ zIndex: 1000 }}
              onClick={handleMenuOpen}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-full w-10 h-10 shadow-lg flex justify-center items-center hamburger"
              >
                <FaBars color="#f87171" size="24px" />
              </motion.div>
            </motion.div>
          )}
          <div>{menuOpen && hamburgerMenu()}</div>
        </>
      ) : (
        <nav
          className={`bg-white  ${
            !isScrolled ? 'bg-opacity-0' : 'bg-opacity-100'
          }  shadow-sm h-16 font-bold fixed w-full flex z-20
      transition duration-1000 px-4
      `}
        >
          <div className="w-full max-w-4xl mx-auto flex justify-between flex-row items-center ">
            <Link href="/">
              <div className="text-2xl">
                <span className="text-red-500">Vet</span>
                <span>amin</span>
              </div>
            </Link>
            <div className="flex">{normalLinks}</div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
