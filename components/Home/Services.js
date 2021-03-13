import React from 'react';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import ServiceCardRight from './ServiceCardRight';
import Slider from './Slider';

function Services() {
  return (
    <div className="min-h-screen bg-indigo-500 bg-cover pb-16 px-4">
      <div className="mx-auto lg:max-w-5xl">
        <div className="pt-6 pb-2 md:py-6">
          <SectionHeader color={'text-gray-800'}>Services</SectionHeader>
        </div>
        <div className="text-center p-4 font-bold text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, qui.
        </div>
        {/* large screen services */}
        <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-4 mt-8 hidden sm:block">
          <ServiceCard bg={'cat.jpg'} />
          <ServiceCardRight bg={'dog-card.jpg'} />
          <ServiceCard bg={'hamster-card.jpg'} />
        </div>
        {/* small screen services */}
        <div className="sm:hidden">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Services;
