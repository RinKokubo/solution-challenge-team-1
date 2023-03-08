import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    signInWithEmailAndPassword(auth,email.value, password.value)
      .then((userCredential) => {
        navigate('/map');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("メールアドレスかパスワードが間違っています。");
      });
  };

  return (
    <div className="bg-[#4ed1a3]">
      <h1 className="text-white">Sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Mail</Form.Label>
              <Form.Control name= "email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control name= "password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
    </div>
  )
}

export default SignIn