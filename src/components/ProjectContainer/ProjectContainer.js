import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";

import Project from "../Project/Project";

import useStyles from "./style";

import pickup from "../../assets/Projects/pickup.png";
import component from "../../assets/Projects/componentCart.png";

export default function ProjectContainer() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

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
              text="what if the text is long what if the text is long what if the text is 
              long what if the text is long what if the text is long what if the text is long 
              what if the text is long what if the text is long what if the text is long what if the 
              text is long what if the text is long what if the text is long"
              url="https://dev.d3oo9vyk0aa8nj.amplifyapp.com/"
              date="1"
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <Project
              image={component}
              title="component cart"
              text="this is the text"
              url="whatever"
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <Project
              image={pickup}
              title="pickup"
              text="this is the text"
              url="whatever"
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
