import React from "react";

import useStyles from "./style";
import { TextField } from "@material-ui/core";

export default function ContactForm() {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField fullWidth variant="outlined" />
      <TextField fullWidth variant="outlined" />
      <TextField fullWidth variant="outlined" multiline rows="4" />
    </form>
  );
}
