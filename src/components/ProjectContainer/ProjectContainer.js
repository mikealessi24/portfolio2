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
      title: "Pickup",
      text:
        "what if the text is long what if the text is long what if the text is long if the text is long what if the text is long what if the text is long what if the text is long what if the text is long what if the text is long what if the  text is long what if the text is long what if the text is long",
      url: "https://dev.d3oo9vyk0aa8nj.amplifyapp.com/",
      date: "December 2020",
    },

    {
      image: component,
      title: "Component Cart",
      text: "ok",
      url:
        "http://test-cohort-5-group-cohortfive.s3-website-us-east-1.amazonaws.com/",
      date: "Late November 2020",
    },
    {
      image: "",
      title: "Portfolio v1",
      text: "ok",
      url: "",
      date: "Early January 2021",
    },
    {
      image: "",
      title: "FirstLine Social",
      text: "ok",
      url: "",
      date: "Late January 2021",
    },
    {
      image: "",
      title: "EventGives",
      text: "ada stuff",
      url: "",
      date: "Febuary 2021",
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
