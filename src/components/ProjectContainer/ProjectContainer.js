import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";

import Project from "../Project/Project";

import useStyles from "./style";

import pickup from "../../assets/Projects/pickup.png";
import component from "../../assets/Projects/componentCart.png";

export default function ProjectContainer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.scrollBuffer} id="projects"></div>
      <div className={classes.root} id="projects">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.title}>Projects</Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.projectDisplay}
          >
            <Project
              image={pickup}
              title="pickup"
              text="this is the text"
              url="whatever"
            />
            <Project
              image={component}
              title="component cart"
              text="this is the text"
              url="whatever"
            />
            <Project
              image={pickup}
              title="pickup"
              text="this is the text"
              url="whatever"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
