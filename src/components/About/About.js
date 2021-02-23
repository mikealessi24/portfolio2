import React from "react";
import { Box, Paper, Grid, useScrollTrigger } from "@material-ui/core";

import useStyles from "./style";

import santorini from "../../assets/santorini.jpeg";
import jets1 from "../../assets/jets1.jpeg";
import jets from "../../assets/jets.jpeg";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.scrollBuffer} id="about"></div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.title}>About me</Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper className={classes.imageContainer1}>
              <img src={santorini} alt="" className={classes.image} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Paper className={classes.paper}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Paper>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={5} lg={5}>
                <Paper className={classes.paper}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Paper className={classes.imageContainer2}>
                  <img src={jets} alt="" className={classes.image}></img>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
