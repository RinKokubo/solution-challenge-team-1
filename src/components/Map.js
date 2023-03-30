import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useLocation } from "react-router-dom";
import MyIcon from '../images/icon_me.svg'
import IconBlue from '../images/icon_blue.svg'
import IconGreen from '../images/icon_green.svg'
import IconPink from '../images/icon_pink.svg'
import IconPurple from '../images/icon_purple.svg'
import IconYellow from '../images/icon_yellow.svg'
import { db, collection, where, query, getDocs, updateDoc } from '../firebase';

const containerStyle = {
  width: '80vw',
  height: '60vh'
};

const Map = () => {

  // sign inからユーザ名の受け取り
  const location = useLocation();
  const username = location.state?.username || "";

  //　マップの中央をユーザの現在地に設定
  const [center,setCenter] = useState({lat: 0, lng: 0});
  let myLatitude = 49;
  let myLongitude = 5;
  navigator.geolocation.getCurrentPosition((position) => {
    setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    saveLocationIfMatch(username, position.coords.latitude, position.coords.longitude)
    myLatitude = position.coords.latitude
    myLongitude = position.coords.longitude
  });

  const userCollectionRef = collection(db, 'users');
  const saveLocationIfMatch = (username, latitude, longitude) => {
  // ユーザー名を検索してマッチした場合、位置情報をFirebaseに保存する
  const queryRef = query(userCollectionRef, where("email", "==", username));
  getDocs(queryRef)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
          latitude: latitude,
          longitude: longitude
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };
  

  // ユーザの位置情報のスタイルを指定
  const myStyles = {
    position: 'absolute',
    left: '38vw',
    top: '28vh',
    width: '32px',
  };

  // 他のユーザの座標とアイコン
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const usersRef = collection(db, 'users');
      const q = query(usersRef);
      const querySnapshot = await getDocs(q);
      const userList = [];
      querySnapshot.forEach((doc) => {
        const latitude = doc.data().latitude;
        const longitude = doc.data().longitude;
        if ((latitude >= myLatitude - 0.1 || latitude <= myLatitude + 0.1) && (longitude >= myLongitude - 0.1 || longitude <= myLongitude + 0.1)) {
          userList.push({
            age: doc.data().age,
            gender: doc.data().gender,
            latitude: doc.data().latitude - myLatitude,
            longitude: doc.data().longitude - myLongitude,
          });
        }
      });
      setUsers(userList);
    }
    getUsers();
  }, [myLatitude, myLongitude]);



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
          { users.map(({ latitude, longitude, age, gender }, index) => (
            <div>
              <img key={index} src={IconBlue} alt="userIcon" style={{ position: 'absolute', left: `${38 + longitude}vw`, top: `${28 + latitude}vh`, width: 32 }} 
            onMouseEnter={(e) =>handleMouseEnter(gender, age, e)}
            onMouseLeave={handleMouseLeave} />
            <p>{latitude}{longitude}</p>
            </div>
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