import React ,{ useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {setUserData} from '../actions/userActions'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {USER_ID} from '../constants/constants'
import Navbar from '../Navbar/Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
  


const HomeCard=()=>{
    const allUsers=useSelector((state)=>state.user.userDataHere);  //Selects all data stored in store.
//allUsers returns array. Will display data using map()

 const dispatch=useDispatch();

    const navigate=useNavigate();

//To get all users
    const getAllUsers=()=>{                   //To display all users
        axios.get('http://localhost:3001/users')
        .then((res)=>{
            
            dispatch(setUserData(res.data));  //FETCH_USERS in reducer
           // console.log(res.data)
            
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

<> 
<Navbar />
   <Grid style={{marginLeft:"100pt"}}>
  
      <br /><br />

    {/* <Button variant="contained" onClick={()=>navigate('/AddUser')}>ADD NEW</Button>  */}
      <h3 style={{align:"center"}}>Students List</h3>  
     
    {allUsers.map(dataa=>(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {dataa.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    ))
}
        


    </Grid>
   
    </>
    )
}

export default HomeCard;

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
