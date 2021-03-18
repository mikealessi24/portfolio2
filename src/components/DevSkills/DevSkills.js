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
            {/* NOTE: this could use more content */}
            <Paper className={classes.paper}>
              I have been developing software for close to a year now and I feel
              like my skills are gradually increasing. I focus on using
              javascript to create full stack applications. React is my frontend
              framework of choice. I have been mostly working on the front-end
              of projects at Code and Trust, but I do have some experience using
              nodeJS to build API’s.
            </Paper>
            <SkillAccordian />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
