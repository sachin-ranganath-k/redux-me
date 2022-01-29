import { createStore } from 'redux';

const initialState={
    userDataHere:[],   //Initiall no users. So blank array
    newUserDataHere:{
        name:"",
        email:"",
        contact:"",
    }
};

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case "FETCH_USERS":
            return{
                ...state,
                userDataHere:action.payload,
            }
      

        case "INSERT_USERS":
           const {name,value}=action.payload; //Destructure name and value from action.payload
           return{
                ...state,
                newUserDataHere:{
                    ...state.newUserDataHere,
                    [name]:value,
                },
            };

                case "RESET_DATA":
                   return{
                    ...state,
                    newUserDataHere:initialState.newUserDataHere,
                
                   
            };
            default: return state;

           
       }
    }
       export default reducer;
