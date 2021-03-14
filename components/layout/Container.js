import React from 'react';

function Container({ bg, children }) {
  return (
    <div className={`${bg} min-h-screen `}>
      <div className="max-w-5xl px-4 lg:px-0 pt-20 mx-auto">{children}</div>
    </div>
  );
}

export default Container;
