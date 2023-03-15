import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import MyIcon from '../images/icon_me.svg'
import IconBlue from '../images/icon_blue.svg'
///import IconGreen from '../images/icon_green.svg'
//import IconPink from '../images/icon_pink.svg'
//import IconPurple from '../images/icon_purple.svg'
//import IconYellow from '../images/icon_yellow.svg'

const containerStyle = {
  width: '80vw',
  height: '60vh'
};

const Map = () => {

  //　マップの中央をユーザの現在地に設定
  const [center,setCenter] = useState({lat: 0, lng: 0});
  navigator.geolocation.getCurrentPosition((position) => {
    setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    console.log(center);
  });

  // ユーザの位置情報のスタイルを指定
  const myStyles = {
    position: 'absolute',
    left: '38vw',
    top: '28vh',
    width: '32px',
  };

  // ユーザの位置情報を更新して登録
  const [userLocation,setUserLocation] = useState(null);
  useEffect(() => {
    // 3分毎に位置情報を取得するためのタイマーをセットする
    const timer = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }, 180000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (userLocation) {
      const userCollectionRef = collection(db, 'users')
      return addDoc(userCollectionRef, {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      });
    }
  }, [userLocation]);


  // 他のユーザの座標を取得する
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Firebaseのデータベースから位置情報を取得する
    const userCollectionRef = collection(db, 'users')
    userCollectionRef.collection('locations')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setUsers({
          x: data.latitude,
          y: data.longitude,
          src: IconBlue,
          alt: 'user Icon',
          age: data.age, 
          gender: data.gender,
        });
      }); 
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
}, []);
  

  // アイコンホバー時にユーザの情報を表示する
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState({ gender: '', age: '' });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (gender, age, e) => {
    setInfo({ gender, age });
    setShowInfo(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='bg-[#4ed1a3] px-[15px] py-[25px] flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-white text-[30px] w-[80%] mb-[15px]'>MAP</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}>
          <img src={MyIcon} style={myStyles} alt='myIcon'></img>
          { users.map(({ x, y, src, alt, age, gender }, index) => (
            <img key={index} src={src} alt={alt} style={{ position: 'absolute', left: x, top: y, width: 32 }} 
            onMouseEnter={(e) =>handleMouseEnter(gender, age, e)}
            onMouseLeave={handleMouseLeave} />
          ))}
          {showInfo && (
            <div style={{
              position: 'fixed',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              padding: '10px',
              left: `${position.x + 10}px`,
              top: `${position.y + 10}px`,
            }}>
              <p>gender: {info.gender}</p>
              <p>age: {info.age}</p>
            </div>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map