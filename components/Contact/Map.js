import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactMapGL, { Marker, FullscreenControl, NavigationControl } from 'react-map-gl';
export default function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: 28.974074,
    latitude: 41.025636,
    zoom: 14,
  });
  //full screen toggle style
  const fullscreenControlStyle = {
    right: 10,
    top: 10,
  };
  //zoom buttons style
  const navControlStyle = {
    right: 10,
    top: 50,
  };
  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      minZoom={10}
      dragPan={false}
      touchAction="pan-y"
    >
      <NavigationControl style={navControlStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <Marker latitude={41.025636} longitude={28.974074}>
        <div>
          <FaMapMarkerAlt color="#f87171" size="32px" />
          <div className="text-2xl relative right-10 font-bold rounded p-1">
            <span className="text-red-500">Vet</span>
            <span>amin</span>
          </div>
        </div>
      </Marker>
    </ReactMapGL>
  );
}
