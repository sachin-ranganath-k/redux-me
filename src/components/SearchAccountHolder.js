import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserData } from "../actions/userActions";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  ACCOUNT_NUMBER,
  ACCOUNT_HOLDER,
  PAN,
  GENDER,
  EMAIL,
} from "../constants/constants";

function createData(number, name, pan, gender) {
  return { number, name, pan, gender };
}

const rows = [createData("Data", 0, 6.0, 24, 4.0)];

const SearchAccountHolder = () => {
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState("");
  const [result, setResult] = useState({});

  const allUsers = useSelector((state) => state.userss.userDataHere);

  const onAccountSearchInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const searchAccountNumber = () => {
    const temp = allUsers.find((user) => user.id === parseInt(accountNumber));
    if (temp !== undefined) {
      setResult(temp);
    } else {
      setResult({});
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => dispatch(setUserData(res.data)))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Grid container>
        <Grid item lg={12} sx={{ mt: 5 }}>
          <TextField
            required
            id="outlined-required"
            label="Enter Account Number"
            placeholder="Required"
            name="accountNumber"
            size="500"
            value={accountNumber}
            fullWidth
            onChange={onAccountSearchInputChange}
          />
          <Button variant="contained" onClick={searchAccountNumber}>
            Search
          </Button>

          {Object.keys(result).length > 0 && (
            <p>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">{ACCOUNT_NUMBER}</TableCell>
                      <TableCell align="center">{ACCOUNT_HOLDER}</TableCell>
                      <TableCell align="center">{EMAIL}</TableCell>
                      <TableCell align="center">{PAN}</TableCell>
                      <TableCell align="center">{GENDER}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow>
                        <TableCell align="center">{`ACC-${result.id}`}</TableCell>
                        <TableCell align="center">{result.name}</TableCell>
                        <TableCell align="center">{result.email}</TableCell>
                        <TableCell align="center">{result.regno}</TableCell>
                        <TableCell align="center">{result.gender}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </p>
          )}
          {Object.keys(result).length == 0 && <p>Not Found</p>}

          {/* <Grid item lg={4} spacing={2} sx={{ m: 5 }}>
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
                <Button>Delete</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchAccountHolder;
