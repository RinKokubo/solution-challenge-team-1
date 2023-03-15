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
    <Form onSubmit={handleSubmit} className="p-10 bg-[#4ed1a3] justify-center min-h-screen">
      <h1 className="text-white">Sign In</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-white">Email address</Form.Label>
        <Form.Control name= "email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control name= "password" type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          Sign in
        </Button>
        <Button variant="secondary" size="lg" onClick={()=> navigate(-1)}>
          Back
        </Button>
      </div>
    </Form>
  )
}

export default SignIn