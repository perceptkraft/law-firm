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
  return (<div id="location">
    <h5 className='d-flex justify-content-center h1 mt-5'>Location</h5>

    <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />

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
  </div>
  )

}

export default Location