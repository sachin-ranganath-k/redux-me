import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCityValues, resetData } from "../actions/adminActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AddCities = () => {
  const newCitiesHere = useSelector((states) => states.cities.newCitiesHere);
  const { cityName } = newCitiesHere;
  const [message, setMessage] = useState("");
  const [showCities, setShowCities] = useState([]);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    viewCities();
  }, []);

  const onCityInputChange = (name, value) => {
    dispatch(setCityValues(name, value));
  };

  const handleFormSubmit = () => {
    axios
      .post("http://localhost:3002/cities", newCitiesHere)
      .then((res) => {
        setMessage("Added Successfully");
        viewCities();
        resetPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewCities = () => {
    axios
      .get("http://localhost:3002/cities")
      .then((res) => {
        setShowCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCity = (cityId) => {
    axios
      .delete(`http://localhost:3002/cities/${cityId}`)
      .then((res) => {
        viewCities();
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  const resetPage = (payload) => {
    dispatch(resetData());
  };

  return (
  <Container>
    <Grid container>
      <Grid item lg={6} sx={{ mt: 5 }}>
        <TextField
          required
          id="outlined-required"
          label="Enter City"
          placeholder="Required"
          name="cityName"
          size="500"
          value={cityName}
          fullWidth
          onChange={(e) => onCityInputChange(e.target.name, e.target.value)}
        />
        <Button variant="contained" onClick={handleFormSubmit}>
          Add City
        </Button>
        {/* <p>{message}</p> */}
      </Grid>
     

      <Grid item lg={4} spacing={2} sx={{ m: 5 }}>
        {showCities.map((c) => (
          <Card
            sx={{ maxWidth: 500 }}
            style={{ backgroundColor: "black", color: "white" }}
            sx={{ m: 1 }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {c.cityName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p style={{ color: "white" }}>ID : {c.id}</p>
                </Typography>
                <Button onClick={(e) => deleteCity(c.id)}>Delete</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Grid>
    </Container>
  );
};

export default AddCities;
