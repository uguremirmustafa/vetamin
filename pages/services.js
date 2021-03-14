import Accordion from '@components/layout/Accordion/Accordion';
import Container from '@components/layout/Container';
import Image from 'next/image';
import React from 'react';

function ServicesPage() {
  return (
    <Container bg="bg-white">
      <div className="rounded bg-red-100 flex md:justify-between flex-col md:flex-row justify-center items-center mt-4 md:mt-8">
        <h2 className="text-3xl font-bold text-left mt-4 md:my-4 mx-auto max-w-md md:max-w-lg p-4">
          Lorem ipsum dolor, sit amet sit amet sit amet consectetur adipisicing.
        </h2>
        <div className="bg-white relative mx-8 h-80 w-80 rounded overflow-hidden transform -rotate-3 shadow-xl relative top-10 md:top-10">
          <Image
            layout="fill"
            src="/assets/services-cat.jpg"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
      <div className="rounded bg-blue-100 flex md:justify-between flex-col md:flex-row justify-center items-center mt-4 md:mt-8 ">
        <div className="bg-white relative mx-8 h-80 w-80 rounded-full overflow-hidden transform rotate-3 shadow-xl relative top-10 md:top-10">
          <Image
            layout="fill"
            src="/assets/services-dog.jpg"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <h2 className="text-3xl font-bold text-left mt-4 md:my-4 mx-auto max-w-md md:max-w-lg p-4 order-first md:order-last pt-20 md:pt-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error tempora
          blanditiis.
        </h2>
      </div>
      <div className="my-16" style={{ minHeight: '500px' }}>
        <h3 className="text-2xl font-bold text-center my-4">Frequently asked questions</h3>
        <Accordion />
      </div>
      <div className="rounded bg-green-100 flex md:justify-between flex-col md:flex-row justify-center items-center mt-4 md:mt-8 mb-32">
        <h2 className="text-3xl font-bold text-left mt-4 md:my-4 mx-auto max-w-md md:max-w-lg p-4">
          Lorem ipsum dolor, sit amet sit amet sit amet consectetur adipisicing.
        </h2>
        <div className="bg-white relative mx-8 h-80 w-80 rounded overflow-hidden transform -rotate-3 shadow-xl relative top-10 md:top-10">
          <Image
            layout="fill"
            src="/assets/services-rabbit.jpg"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </Container>
  );
}

export default ServicesPage;
