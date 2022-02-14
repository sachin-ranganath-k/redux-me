const initialState={
    userDataHere:[],   //Initially no users. So blank array
    newUserDataHere:{  
        name:"",
        email:"",
        regno:"",
       city:"",
       gender:"",
    },
    cities:[]
};

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case "FETCH_USERS":
            return{
                ...state,                       // Takes previous state
                userDataHere:action.payload,     /*Initially blank array. Now filled with user details
                                                 payload from Home.js */
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
                    newUserDataHere:initialState.newUserDataHere, //newUserDataHere is blank. So resets the previous data
            };


        case "UPDATE_SET_DETAIL":
            return{
                ...state,
                newUserDataHere:action.payload,
            };


            case "GET_CITIES":
                return{
                    ...state,
                    cities:action.payload
                };


                default: return state;
             }
           
         }

       export default reducer;
