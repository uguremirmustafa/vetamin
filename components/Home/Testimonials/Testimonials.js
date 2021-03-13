import React from 'react';
import SectionHeader from '../SectionHeader';
import Slider from './Slider';

function Testimonials() {
  return (
    <div className="min-h-screen bg-yellow-300 py-8">
      <SectionHeader>Happy Customers</SectionHeader>
      <div className="max-w-5xl mx-auto pt-8 px-4">
        <Slider />
      </div>
    </div>
  );
}

export default Testimonials;
