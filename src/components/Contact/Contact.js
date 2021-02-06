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
      <div className={classes.scrollBuffer} id="contact"></div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={12}>
            <Paper className={classes.title}>Contact me</Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.contactCard}>
              <Paper className={classes.contactCard__title}>
                Contact me and let's work on something great!
              </Paper>
              <div className={classes.contactCard__profile}>
                <Avatar src={avi} className={classes.contactCard__avatar} />
              </div>
              <div className={classes.email}>
                <KeyboardBackspaceIcon />
                Checkout my social links
              </div>
              <div className={classes.email}>
                <EmailIcon />
                my email
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={classes.contactPhone}>
              <div className={classes.phone}>
                <div className={classes.phoneOutline}>
                  <div className={classes.contactForm}>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
