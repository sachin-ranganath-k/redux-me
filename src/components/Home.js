import React ,{ useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const Home = () => {

const store=useSelector((state)=>state.newUserDataHere);
const dispatch=useDispatch();

const [category,setCategory]=useState({});
console.log(store);

useEffect(()=>{
    getDataCall();
},[])

const getDataCall=()=>{
    axios.get('https://logibricks.com/api/blogs/logistics-management')
    .then(res=>{
        setCategory(res.data);
        dispatch({
            type: "FETCH_USERS",
            payload:res.data.category
        });
    }).catch(err=>console.log(err));
}
    return (
        <div>
            <h1>
                {Object.keys(category).length!==0 && <>{
                    category.blogs.data.map(data=><>
                    <p>{data.title}</p></>)
                }
                
                </>}
            </h1>
        </div>
    )
}

export default Home
