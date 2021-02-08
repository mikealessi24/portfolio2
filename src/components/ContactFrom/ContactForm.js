import React from "react";

import useStyles from "./style";
import { TextField, Button, InputAdornment } from "@material-ui/core";

import MessageIcon from "@material-ui/icons/Message";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export default function ContactForm() {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        fullWidth
        variant="outlined"
        label="Name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Message"
        multiline
        rows="4"
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              classes={{ root: classes.messageIcon }}
            >
              <MessageIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="outlined" className={classes.sendBtn}>
        Send
      </Button>
    </form>
  );
}
