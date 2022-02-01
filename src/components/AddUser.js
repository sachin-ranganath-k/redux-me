import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setInputValue } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {resetData} from '../actions/userActions'
import {Link} from 'react-router-dom'


const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

   //Need to give initial values for text fields. Using useState() 
  const [state,setState]=useState({
      name:"",
      email:"",
      contact:"",

  });

  useEffect(()=>{
    dispatch(resetData());
  },[])

  const newUserDataHere = useSelector((state) => state.user.newUserDataHere);

  //Now destructure the useState() values
  const {name,email,contact}=newUserDataHere;

  //const [error,setError]=useState("");
  
  //Now handle the inputs
  const onInputChange=(name,value)=>{
    dispatch(setInputValue(name,value));
  }

//Now define form submit
const handleFormSubmit=(e)=>{
    // e.preventDefault();
    // if(!name || !email || !contact){
    //   setError("Please enter all the details");
    // 
    axios.post('http://localhost:3001/users', newUserDataHere)
    .then((res)=>{
      console.log(res.data)
      navigate("/");
    }).catch((error)=>{
      console.log('Error ',error)
    })
  }


//Update Handling
// const handleUpdate=()=>{
//   axios.put(`http://localhost:3001/users/${userId}`,newUserDataHere)
//   .then((res)=>{
//     navigate("/");
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

// }


  return (
    <>
      <h3>Add New User</h3>
      <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={(e)=>onInputChange(e.target.name,e.target.value)}
      />
    <br /><br />
<TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={(e)=>onInputChange(e.target.name,e.target.value)}
      />
    <br /><br />
    

      <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter Contact No."
        name="contact"
        value={contact}
        onChange={(e)=>onInputChange(e.target.name,e.target.value)}
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
      onClick={(e)=>handleFormSubmit()}
     >Submit</Button>
     <br />

     <Link to="/">Home</Link>
    </>
  )
};

export default AddUser;