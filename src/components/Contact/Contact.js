import React from "react";

import useStyles from "./style";
import { Grid, Paper, Avatar } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ContactForm from "../ContactFrom/ContactForm";

import avi from "../../assets/avi.jpg";

export default function Contact() {
  const classes = useStyles();
  return (
    <>
      <div id="contact" className={classes.scrollBuffer}></div>
      <div className={classes.root}>
        <Paper className={classes.title}>Contact me</Paper>
        <div className={classes.contactPhone}>
          <div className={classes.phone}>
            <div className={classes.phoneOutline}>
              <div className={classes.contactForm}>
                <div className={classes.contactCard__profile}>
                  <Avatar src={avi} className={classes.contactCard__avatar} />
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
