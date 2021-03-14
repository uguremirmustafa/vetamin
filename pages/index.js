import Contact from '@components/Home/Contact/Contact';
import Hero from '@components/Home/Hero';
import Services from '@components/Home/Services';
import Testimonials from '@components/Home/Testimonials/Testimonials';

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
