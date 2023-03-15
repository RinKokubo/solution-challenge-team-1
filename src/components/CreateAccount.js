import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, age, gender } = event.target.elements;
    console.log(email.value, password.value);
    navigate('/create_account/confirm', {state: {name:name.value, email:email.value, password:password.value, age:age.value, gender:gender.value}});
  };

  return (
      <Form onSubmit={handleSubmit} className="p-10 bg-[#4ed1a3] min-h-screen">
      <h1>Create an Account</h1>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control name= "name" type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name= "email" type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name= "password" type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control name= "age" type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Select name="gender" aria-label="Default select example">
          <option></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          Conform
        </Button>
        <Button variant="secondary" size="lg" onClick={()=> navigate(-1)}>
          Back
        </Button>
      </div>
    </Form>
  )
}

export default CreateAccount