import React from 'react'
import GoogleMapReact from 'google-map-react';

const LocationPin = ({ text }) => {
  <div>
    <p >{text}</p>
  </div>
}

const Location = () => {
  const locationprops = {
    center: {
      lat: 10.98835602,
      lng: 77.01502627
    },
    zoom: 5
  };
  return (
    <div className='locationSetter mt-5' style={{ height: '50vh', width: '100%' }}>

      <GoogleMapReact
        defaultCenter={locationprops.center}
        defaultZoom={locationprops.zoom}
      >
        <LocationPin
          lat={59.955413}
          lng={30.337844}
          text='Marker'
          
        />
      </GoogleMapReact>

    </div>
  )

}

export default Location