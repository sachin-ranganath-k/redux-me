export const setCityValues = (name, value) => {
  return {
    type: "INSERT_CITIES",
    payload: { name, value }
  }
}
