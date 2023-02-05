import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Home = () => {
  return (
    <div className='bg-[#4ed1a3] px-[15px] py-[25px] flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-white text-[20px] w-[100%]'>MAP</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}>
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Home