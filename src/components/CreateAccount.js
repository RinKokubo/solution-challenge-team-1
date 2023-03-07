import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CreateAccount = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    navigate('/sign_up/confirm', {state: {email: email.value, password: password.value}});
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Form.Group className="mb-3" controlId="formSex">
        <Form.Label>Sex</Form.Label>
        <DropdownButton id="sex" title="Sex">
          <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Ohter</Dropdown.Item>
        </DropdownButton>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control name= "country" type="text" placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CreateAccount