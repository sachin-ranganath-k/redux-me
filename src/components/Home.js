import React ,{ useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {setUserData} from '../actions/userActions'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const allUsers = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Home=()=>{
    const allUsers=useSelector((state)=>state.user.userDataHere);  //Selects all data stored in store.
//allUsers returns array. Will display data using map()

    const dispatch=useDispatch();

    const navigate=useNavigate();

//To get all users
    const getAllUsers=()=>{                   //To display all users
        axios.get('http://localhost:3001/users')
        .then((res)=>{
            
            dispatch(setUserData(res.data));  //FETCH_USERS in reducer
            console.log(res.data)
            
        })
        .catch((err)=>{
            dispatch(setUserData(err));
        });
    }

    const deleteUser = (id) => {
      axios.delete(`http://localhost:3001/users/${id}`)
        .then((res) => {
          getAllUsers();
        })
        .catch((err) => {
          console.log("deleted fail");
        });
    };

 //Runs first once the page renders  
    useEffect(()=>{
        getAllUsers();    
    },[])

//Update call. (Executes once UPDATE button clicked)

const editUser=(id)=>{
  // dispatch(setUserData({name: }))
  
  navigate(`/UpdateUser/${id}`)

}
    

//JSX Form Elements
    return(
    <div className="container">
    
      <br /><br />

    <Button variant="contained" onClick={()=>navigate('/AddUser')}>ADD NEW</Button> 
      <h3 style={{align:"center"}}>Users List</h3>  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell>Action</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((userr) => (
            <TableRow
              key={userr.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                    {/* <TableCell component="th" scope="row">
                        {userr.id}
                    </TableCell>  */}
                        <TableCell align="center">{userr.id}</TableCell> 
                    <TableCell align="center">{userr.name}</TableCell>
                    <TableCell align="center">{userr.email}</TableCell>
                    <TableCell align="center">{userr.contact}</TableCell>
                    <TableCell align="center">   
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" onClick={(e)=>editUser(userr.id)}>Update</Button>
                            <Button variant="contained" onClick={(e)=>deleteUser(userr.id)} >Delete</Button>
                            {/* <Button variant="outlined">Outlined</Button> */}
                        </Stack>
                    </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>

    );
   

    
}

export default Home

// const Home = () => {

// const store=useSelector((state)=>state.newUserDataHere);
// const dispatch=useDispatch();

// const [categories,setCategory]=useState({});
// console.log(store);

// useEffect(()=>{
//     getDataCall();
// },[])

// const getDataCall=()=>{
//     axios.get('https://logibricks.com/api/blogs/logistics-management')
//     .then(res=>{
//        // console.log(res)
//         setCategory(res.data);
//         dispatch({
//             type: "FETCH_USERS",
//             payload:res.data.categories
//         });
//     }).catch(err=>console.log(err));
// }
//     return (
//         <div>
//             <h1>
//                 {Object.keys(categories).length!==0 && <>{
//                     categories.blogs.data.map(data=><>
//                     <p>{data.title}</p></>)
//                 }
                
//                 </>}
//             </h1>
//         </div>
//     )
// }

// export default Home
