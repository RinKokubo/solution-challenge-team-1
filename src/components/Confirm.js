import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useLocation } from 'react-router-dom';

const Confirm = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { email,password } = location.state;
  console.log(email, password);

  useEffect(() => {
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        navigate('/sign_in');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }, []);

  return (
    <p>hello</p>
  )
}

export default Confirm