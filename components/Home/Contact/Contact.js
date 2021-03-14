import React from 'react';
import SectionHeader from '../SectionHeader';
import Form from './Form';

function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-red-300 pt-8 pb-16">
      <div className="pb-8">
        <SectionHeader>Contact</SectionHeader>
      </div>
      <p className="px-4 max-w-lg mx-auto my-8 text-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga recusandae minus ratione
        harum quod odit ducimus omnis alias nostrum mollitia.
      </p>
      <div className="m-4">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
