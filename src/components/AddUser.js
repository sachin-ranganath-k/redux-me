import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddUser = () => {
  return(
<>
<h3>Add New User</h3>

      
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Enter Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Enter Contact No."
        />
        
        {/* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <br /><br />
 <Button variant="contained">Submit</Button>
</>
  )
};

export default AddUser;
