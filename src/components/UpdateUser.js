import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setDetails, setInputValue } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import {resetData} from '../actions/userActions'
import {Link} from 'react-router-dom'
import { handleBreakpoints } from '@mui/system';


const UpdateUser = () => {   
const [name, setName ] =  useState('');
const [email, setEmail ] =  useState('');
const [contact, setContact ] =  useState('');

  const dispatch = useDispatch();


  const navigate = useNavigate();
  let {userid}=useParams();  //userid from App.js (Router)

   //Need to give initial values for text fields. Using useState() 
  // const [state,setState]=useState({
  //     name:"",
  //     email:"",
  //     contact:"",

  // });



  const list = useSelector((state) => state.user.userDataHere);
  
  useEffect(() => {
    const userData = list.find(data => +data.id === +userid);
    setName(userData.name);
    setEmail(userData.email);
    setContact(userData.contact);
  } , []);

  //console.log('-------' , newUserDataHere);

  //Now destructure the useSelector() values
  // const {name,email,contact}=newUserDataHere;


  //const [error,setError]=useState("");
  
  //Now handle the inputs
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

export default UpdateUser;
