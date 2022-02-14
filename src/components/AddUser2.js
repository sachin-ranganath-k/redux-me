import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getCities, setInputValue } from '../actions/userActions';
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
import Navbar from '../Navbar/Navbar';
import { GENDER_FEMALE, GENDER_MALE } from '../constants/constants';


const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Need to give initial values for States(Raajyagalu) Dropdown. Using useState() 
  //const [cities,setCities]=useState([]);


  useEffect(()=>{
    dispatch(resetData());   //RESET_DATA in reducer, Clears previous data in textbox 
    loadCities();
  },[])

  const newUserDataHere = useSelector((state) => state.user.newUserDataHere);
 // console.log(newUserDataHere);

  
const {cities}=useSelector((state)=>state.user);


  //Now destructure the reducer values
  const {name,email,regno,gender,city}=newUserDataHere;

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


  const loadCities=(name,value)=>{
    axios.get('http://localhost:3002/cities')
    .then((res)=>{
     dispatch(getCities(res.data))
     //console.log(res)
 })
    .catch((err)=>{
      console.log("Error:", err)
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
  <Navbar />
      <h3>Add New User</h3>
  {/* Name and value of each field should be same as used in reducer (useSelector destructuring)     */}
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
          <MenuItem value="M">{GENDER_MALE}</MenuItem>
          <MenuItem value="F">{GENDER_FEMALE}</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br />


    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{minWidth:220}}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          name="city"        
          label="City"
          onChange={(e)=>onInputChange(e.target.name,e.target.value)}
        >
          {/* <MenuItem value="">Select City</MenuItem> */}
      {
        cities.map((city)=>(
          <MenuItem value={city.id}>{city.name}</MenuItem>
        )
      )
      }
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
