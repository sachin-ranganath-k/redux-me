export const setCityValues = (name, value) => {
  return {
    type: "INSERT_CITIES",
    payload: { name, value }
  }
}

export const resetData=(payload)=>{
  return{
    type: "RESET_DATA",
    payload

  }
}
