import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCityValues } from "../actions/adminActions";

const AddCities = () => {
  const newCitiesHere = useSelector((states) => states.cities.newCitiesHere);
  const { cityName } = newCitiesHere;

  const dispatch = useDispatch();

  const onCityInputChange = (name, value) => {
   dispatch(setCityValues(name, value));
  };

  const handleFormSubmit = () => {
    axios.post("http://localhost:3002/cities", newCitiesHere)
    .then((res) => {
      console.log(res)
      .catch((err) => {
        console.log(err);
      });
    });
  };

  return (
    <div>
      <Grid item xs={6}>
        <TextField
          required
          id="outlined-required"
          label="Enter City"
          placeholder="Required"
          name="cityName"
          size="100"
          value={cityName}
          fullWidth
          onChange={(e) => onCityInputChange(e.target.name, e.target.value)}
        />
      </Grid>

      <Button variant="contained" onClick={handleFormSubmit}>
        Add City
      </Button>
    </div>
  );
};

export default AddCities;
