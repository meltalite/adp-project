import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map-marker';
import simpleMapOptions from './simple-map-options';

export default function SimpleMap({ coordinates, target, zoom}) {
  const markers = coordinates.locations.map((item, index) => {
    return (
      <MapMarker
        lat={item.lat}
        lng={item.lng}
        key={index}
      />
    )
  })

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: 'AIzaSyCrjCKH1GMWolAFEMoW9m_fIiOsphubESU' }}
        defaultCenter={coordinates.center}
        center={target}
        zoom={zoom}
        options={simpleMapOptions}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}