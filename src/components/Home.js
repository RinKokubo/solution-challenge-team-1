import React, {useState} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const Home = () => {
  const [center,setCenter] = useState({lat: 0, lng: 0});
  navigator.geolocation.getCurrentPosition((position) => {
    setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    console.log(center);
  });
  return (
    <LoadScript googleMapsApiKey="AIzaSyCeNQPZSNTDWlBeTcZwsjjuBPYa2hBURMM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Home