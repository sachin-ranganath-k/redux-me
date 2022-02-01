import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {  useSelector } from 'react-redux';

import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UpdateUser = () => {   
const [name, setName ] =  useState('');
const [email, setEmail ] =  useState('');
const [contact, setContact ] =  useState('');


  const navigate = useNavigate();
  let {userid}=useParams();  //userid from App.js (Router)

  const list = useSelector((state) => state.user.userDataHere);
  
  useEffect(() => {
    const userData = list.find(data => +data.id === +userid);
    setName(userData.name);
    setEmail(userData.email);
    setContact(userData.contact);
  } , []);


  // Handle the inputs
  const onNameChange=(e)=>{
    setName(e.target.value)
  }

  const onEmailChange=(e)=>{
    setEmail(e.target.value)
  }

  const onContactChange=(e)=>{
    setContact(e.target.value)
  }
  
//Update Handling
const handleUpdate=()=>{
  axios.put(`http://localhost:3001/users/${userid}` ,{name,email,contact})
  .then((res)=>{
    console.log('-----', res.data)
    navigate("/");
  })
  .catch((err)=>{
    console.log(err);
  })
  console.log(name,email,contact);
}

return (
    <>
      <h3>Update User Details</h3>
      <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={onNameChange}
      />
    <br /><br />

<TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={onEmailChange}
      />
    <br /><br />
    
   <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter Contact No."
        name="contact"
        value={contact}
        onChange={onContactChange}
      />

      <br /><br />
      <Button variant="contained" 
      onClick={handleUpdate}
     >Submit</Button>
     <br />

     <Link to="/">Home</Link>
    </>
  )
};

export default UpdateUser;
