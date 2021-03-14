import OwnerCard from '@components/About/OwnerCard';
import HeroWave from '@components/Home/HeroWave';
import SectionHeader from '@components/Home/SectionHeader';
import Container from '@components/layout/Container';
import React from 'react';

function AboutPage() {
  const owners = [
    {
      name: 'My name is Elizabeth Elson and I love helping our cute friends!',
      image: '/assets/avatar-5.jpg',
      role: 'Chief Veterinary',
    },
    {
      name: 'Hello, I am John and I am a full time veterianary assistant.',
      image: '/assets/avatar-6.jpg',
      role: 'Assistant',
    },
  ];
  return (
    <div className="min-h-screen">
      <Container bg="bg-pink-100">
        <div className="mt-4 text-pink-300">
          <SectionHeader>Our Crew</SectionHeader>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center px-4 my-auto md:my-8 pb-16">
          {owners.map((i, ind) => (
            <OwnerCard owner={i} key={ind} />
          ))}
        </div>
      </Container>
      <HeroWave />
      <div className="h-px">{/* this is just for making the scroll bar available */}</div>
    </div>
  );
}

export default AboutPage;
