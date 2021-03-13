import React from 'react';
import SectionHeader from '../SectionHeader';
import Form from './Form';

function Contact() {
  return (
    <div className="min-h-screen bg-red-200 py-8">
      <div className="pb-8">
        <SectionHeader>Contact</SectionHeader>
      </div>
      <div className="px-4 max-w-lg mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga recusandae minus ratione
        harum quod odit ducimus omnis alias nostrum mollitia.
      </div>
      <div className="m-4">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
