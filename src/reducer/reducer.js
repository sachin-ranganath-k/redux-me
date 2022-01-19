import { createStore } from 'redux';
import {getUserData} from '../action/action'

const initialState={
    userDataHere:[],   //Initiall no users. So blank array
    newUserDataHere:{
        category:""
    }
};

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case "FETCH_USERS":
            return{
                ...state,
                userDataHere:action.payload
           }
           default: return state;
        }
        
}

const store=createStore(reducer);
export default store;