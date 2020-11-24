import React from "react";
import { Button, TextField } from "@material-ui/core";

export default function Signup() {
  return (
    <div>
      <TextField id="outlined-basic" label="Display Name" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
      <Button variant="contained" color="primary">
        Google
      </Button>
    </div>
  );
}
