export const setUserData=(payload)=>{
    return{
        type:"FETCH_USERS",
        payload    //From Home.js to Reducer
    };  
};

export const setInputValue=(name,value)=>{
    return{
        type:"INSERT_USERS",
        payload:{name,value}
    }
}

export const resetData=(payload)=>{    //
    return{
        type:"RESET_DATA",
        payload
    }
}

export const setDetails=(payload)=>{
    return{
        type: "UPDATE_SET_DETAIL",  
        payload
    };
};
