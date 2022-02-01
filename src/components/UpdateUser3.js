import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import {resetData} from '../actions/userActions'
import {Link} from 'react-router-dom'
import { handleBreakpoints } from '@mui/system';
import { useSelector,useDispatch } from 'react-redux';


const UpdateUser2 = () => {   

  let {userid}=useParams();
  const dispatch=useDispatch();
  const newUserDataHere=useSelector((state)=>state.user.newUserDataHere);



const getSingleUser=()=>{
  axios.get(`http://localhost:3001/users/${userid}`)
  .then((res)=>{
    dispatch()
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

      {/* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
      <br /><br />
      <Button variant="contained" 
      onClick={handleUpdate}
     >Submit</Button>
     <br />

     <Link to="/">Home</Link>
    </>
  )
};

export default UpdateUser2;
