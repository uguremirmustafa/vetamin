import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const data = [
  {
    q: 'Lorem ipsum dolor sit amet.',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt',
  },
  {
    q: 'Lorem ipsum dolor sit amet ipsum dolor sit amet..',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt',
  },
  {
    q: 'Lorem ipsum dolor amet.',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt',
  },
  {
    q: 'Lorem ipsum dolor sit amet.',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt',
  },
  {
    q: 'Lorem ipsum dolor sit amet ipsum dolor sit amet..',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt',
  },
  {
    q: 'Lorem ipsum dolor amet.',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt',
  },
];

function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <div className="bg-red-200 rounded overflow-hidden max-w-lg mx-auto">
      {data.map((item, index) => (
        <div key={index}>
          <div
            className="w-full p-4 flex justify-between items-center border-b-2 border-red-300  cursor-pointer hover:bg-red-300 transition duration-300"
            onClick={() => toggle(index)}
          >
            <h1 className="font-medium">{item.q}</h1>
            <span className="text-red-500">
              {clicked === index ? <FiMinus size="20px" /> : <FiPlus size="20px" />}
            </span>
          </div>
          {clicked === index ? (
            <motion.div
              className="py-4 pl-8 bg-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>{item.a}</p>
            </motion.div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
