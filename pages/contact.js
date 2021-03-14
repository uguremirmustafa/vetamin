import React from 'react';
import Contact from '@components/Home/Contact/Form';
import Map from '@components/Contact/Map';
import SectionHeader from '@components/Home/SectionHeader';
import { FaInstagram, FaMapSigns, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import HeroWave from '@components/Home/HeroWave';
function ContactPage() {
  const iconSize = '32px';
  return (
    <div className="pt-20 min-h-screen bg-indigo-200">
      <div className="max-w-5xl mx-auto lg:px-4 pt-4 md:grid  md:grid-cols-2 gap-4 flex flex-col">
        <div className="md:col-span-2 w-full rounded  px-4 mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-600">
            We are waiting for you!
          </h2>
          <h4 className="font-medium text-center mt-8 underline text-indigo-500">
            Address: Lorem street, Taksim avenue no:20, Istanbul
          </h4>
        </div>
        <div className="md:col-span-2 rounded bg-indigo-100 p-4 mb-4 flex  mx-auto items-center justify-center text-indigo-500 gap-4">
          <a
            className="cursor-pointer flex flex-col items-center mx-2 text-center text-xs rounded hover:text-red-400 transition"
            href="https://wa.me/905415213549"
          >
            <FaWhatsapp size={iconSize} />
            {/* <span className="font-bold mt-2">Message Now!</span> */}
          </a>
          <a
            className="cursor-pointer flex flex-col items-center mx-2 text-center text-xs rounded hover:text-red-400 transition"
            href="tel:+905415213549"
          >
            <FaPhoneAlt size={iconSize} />
            {/* <span className="font-bold mt-2">Call Now!</span> */}
          </a>
          <a
            href="https://instagram.com/uguremirmustafa"
            className="cursor-pointer flex flex-col items-center mx-2 text-center text-xs rounded hover:text-red-400 transition"
          >
            <FaInstagram size={iconSize} />
            {/* <span className="font-bold mt-2">DM on Instagram!</span> */}
          </a>
        </div>
        <div className="h-96 mx-4 md:mx-none shadow-xl rounded-xl overflow-hidden border-2 border-white">
          <Map />
        </div>
        <div className="mx-4 md:mx-none mb-20">
          <Contact />
        </div>
      </div>
      <HeroWave />
    </div>
  );
}

export default ContactPage;
