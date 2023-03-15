import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Confirm = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { name,email,password,age,sex } = location.state;

  const createAccount = () => {
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Store user info
        const userCollectionRef = collection(db, 'users');
        return addDoc(userCollectionRef, {
          name: name,
          age: age,
          sex: sex,
        });
      }).then(() => {
        navigate('/sign_in');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("すでにメールアドレスが使用されているか、入力にエラーがあります。");
      });
  }

  return (
    <div className="p-10 bg-[#4ed1a3] min-h-screen">
      <h1>Create an Account</h1>
      <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{age}</td>
        </tr>
        <tr>
          <td>Sex</td>
          <td>{sex}</td>
        </tr>
      </tbody>
      </Table>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={createAccount}>
          Create an Account
        </Button>
        <Button variant="secondary" size="lg" onClick={()=> navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default Confirm