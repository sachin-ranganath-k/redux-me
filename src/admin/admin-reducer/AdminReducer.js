const initialCityState={
    citiesHere:[],
    newCitiesHere:{
        cityName:""
    },
};

const cityReducer=(states=initialCityState,action)=>{
    switch(action.type){
        case "INSERT_CITIES":
            const {name,value}=action.payload
            return{
                ...states,
                newCitiesHere:{
                    ...states.newCitiesHere,
                    [name]:value
                },
            }
           default:  return states;
    }
    
}

export default cityReducer