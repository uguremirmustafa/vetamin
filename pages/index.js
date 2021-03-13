import Contact from '@components/Home/Contact/Contact';
import Hero from '@components/Home/Hero';
import Services from '@components/Home/Services';
import Testimonials from '@components/Home/Testimonials/Testimonials';
import Navbar from '@components/layout/Navbar';
import Head from 'next/head';
import Link from 'next/link';

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
