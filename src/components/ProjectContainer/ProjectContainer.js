import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";

import Project from "../Project/Project";

import useStyles from "./style";

import pickup from "../../assets/Projects/pickup.png";
import component from "../../assets/Projects/componentCart.png";

export default function ProjectContainer() {
  const classes = useStyles();

  const projects = [
    {
      image: pickup,
      title: "pickup",
      text:
        "what if the text is long what if the text is long what if the text is long if the text is long what if the text is long what if the text is long what if the text is long what if the text is long what if the text is long what if the  text is long what if the text is long what if the text is long",
      url: "https://dev.d3oo9vyk0aa8nj.amplifyapp.com/",
      date: "1",
    },

    {
      image: "image",
      title: "new",
      text: "ok",
      url: "https://dev.d3oo9vyk0aa8nj.amplifyapp.com/",
      date: "1",
    },
  ];

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
            {projects.map((project, i) => (
              <Project
                image={project.image}
                title={project.title}
                text={project.text}
                url={project.url}
                date={project.date}
                i={i}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
