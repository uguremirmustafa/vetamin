import React from 'react';

function SectionHeader({ children, color }) {
  return (
    <div className="bg-white mx-auto rounded-xl bg-opacity-60 w-min">
      <h2 className={`py-3 px-6 font-black capitalize text-3xl text-center ${color}`}>
        {children}
      </h2>
    </div>
  );
}

export default SectionHeader;
