import React from 'react';
import Wave from 'react-wavify';

export default function HeroWave() {
  return (
    <Wave
      fill="rgba(255,255,255,0.4)"
      paused={false}
      options={{
        height: 20,
        amplitude: 10,
        speed: 0.15,
        points: 4,
      }}
      className="absolute bottom-0 h-0 md:h-auto"
    />
  );
}
