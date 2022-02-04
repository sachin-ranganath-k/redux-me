import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setInputValue } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {resetData} from '../actions/userActions'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

   //Need to give initial values for text fields. Using useState() 
  // const [state,setState]=useState({
  //     name:"ffyf",
  //     email:"",
  //     contact:"",
  //     gender:""

  // });

  useEffect(()=>{
    dispatch(resetData());   //RESET_DATA in reducer, Clears previous data in textbox 
  },[])

  const newUserDataHere = useSelector((state) => state.user.newUserDataHere);

  //Now destructure the reducer values
  const {name,email,regno,gender}=newUserDataHere;

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
        label="Enter Name"
        placeholder="Required"
        name="name"
        value={name}
        onChange={(e)=>onInputChange(e.target.name,e.target.value)}
      />
    <br /><br />
<TextField
        required
        id="outlined-required"
        label="Enter Email"
        placeholder="Required"
        name="email"
        value={email}
        onChange={(e)=>onInputChange(e.target.name,e.target.value)}
      />
    <br /><br />
    

      <TextField
        required
        id="outlined-required"
        label="Enter Contact No."
        placeholder="Required"
        name="regno"
        value={regno}
        onChange={(e)=>onInputChange(e.target.name,e.target.value)}
      />

      <br /><br />
    
     <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{minWidth:220}}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='gender'
          value={gender}          
          label="Gender"
          onChange={(e)=>onInputChange(e.target.name,e.target.value)}
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <br />
    <Button variant="contained" 
      onClick={(e)=>handleFormSubmit()}
     >Submit</Button>
     <br /><br />

     <Link to="/">Home</Link>
    </>
  )
};

export default AddUser;
