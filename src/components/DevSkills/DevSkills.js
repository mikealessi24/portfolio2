import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";

import devSkills from "../../assets/devSkills.jpeg";

import SkillAccordian from "../SkillAccordian/SkillAccordian";

import useStyles from "./style";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.scrollBuffer} id="dev"></div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.title}>Dev Skills</Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.imageContainer1}>
              <img src={devSkills} alt="" className={classes.image} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
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
              nisi ut aliquip ex
            </Paper>
            <SkillAccordian />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
