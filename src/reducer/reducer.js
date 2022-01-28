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

        // case "SET_INPUT_VALUES":
        //     const {name,value}=action.payload;
        //     return{
        //         ...state,
        //         newUserDataHere:{
        //             ...state.newUserDataHere,
        //             [name]:value,
        //         },
        //     }
        default: 
        return state;
        };
       
}

//const store=createStore(reducer);
export default reducer;