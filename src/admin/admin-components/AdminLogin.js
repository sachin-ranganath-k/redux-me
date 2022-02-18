import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [resetState, setResetState]=useState("");
  const navigate = useNavigate();

  const loginValidation = () => {
    if (adminEmail === "admin" && adminPassword === "admin") {
      navigate("/AdminHome");
    }
    else{
      alert('Invalid');
     // return false;
    }
  };

  // const reset=()=>{
  //   setResetState("");
  // }

  // // useEffect(()=>{
  // //   reset();
  // // },[])
  return (
    <div style={{ marginTop: "100px" }}>
      <h4>Admin Login</h4>
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Enter Email"
              placeholder="Required"
              name="adminEmail"
              size="100"
              value={adminEmail}
              fullWidth
              onChange={(e) => setAdminEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Enter Password"
              placeholder="Required"
              name="adminPassword"
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
      <br />
      <Button variant="contained" onClick={loginValidation}>LOGIN</Button>
    </div>
  );
};

export default AdminLogin;
