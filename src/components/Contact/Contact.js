import React from "react";

import useStyles from "./style";
import { Grid, Paper } from "@material-ui/core";

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
          <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={classes.contact}>
              <div className={classes.phone}>
                <div className={classes.phoneOutline}>
                  <div className={classes.contactForm}>form comp</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
