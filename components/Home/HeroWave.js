import React from 'react';
import Wave from 'react-wavify';

export default function HeroWave() {
  return (
    <Wave
      fill="rgba(255,255,255, 0.3)"
      paused={false}
      options={{
        height: 20,
        amplitude: 40,
        speed: 0.15,
        points: 3,
      }}
      className="absolute bottom-0 h-0 md:h-auto z-50"
    />
  );
}
