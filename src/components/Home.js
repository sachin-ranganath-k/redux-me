import React ,{ useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {setUserData} from '../actions/userActions'


const Home=()=>{
    const allUsers=useSelector((state)=>state.userDataHere);
    const dispatch=useDispatch();


    const getAllUsers=()=>{
        axios.get('http://localhost:3001/users')
        .then((res)=>{
            
            dispatch(setUserData(res.data));
            console.log(res.data)
            
        })
        .catch((err)=>{
            dispatch(setUserData(err));
        });
    }
    useEffect(()=>{
        getAllUsers();
    },[])
    return(
    <div className="container">
      <table border="2">
          <tr>
              <th>Name</th>
          </tr>
          
                {allUsers.map((userr)=>(
            <tr>
                <td>{userr.name} </td>
            </tr>
                ) )
                }
         
    </table>
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
