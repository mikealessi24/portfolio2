import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";

import Project from "../Project/Project";

import useStyles from "./style";

import pickup from "../../assets/Projects/pickup.png";
import component from "../../assets/Projects/componentCart.png";
import portfolio1 from "../../assets/Projects/portfoliov1.png"
import eventGives from "../../assets/Projects/eventgives.png"
import firstline from "../../assets/Projects/Firstline.png"

export default function ProjectContainer() {
  const classes = useStyles();

  const projects = [

    {
      image: component,
      title: "Component Cart",
      text: "Component Cart was my JRS Cohort’s final group project.  It is a social media inspired react component sharing site.  Users are able to upload a javascript file and copy source code of friends components.",
      url:
        "http://test-cohort-5-group-cohortfive.s3-website-us-east-1.amazonaws.com/",
      date: "Late November 2020",
    },
    {
      image: pickup,
      title: "Pickup",
      text:
        "Pickup was my final project for JRS.  It is a pickup sports app, where users interact with other users to schedule pickup activities.  It features a google map and was built in React. ",
      url: "https://dev.d3oo9vyk0aa8nj.amplifyapp.com/",
      date: "December 2020",
    },
    {
      image: portfolio1,
      title: "Portfolio v1",
      text: "This was the first version of my idea of a portfolio website.  Fresh out of coding bootcamp, I created this site in order to showcase my creativity and development skills.",
      url: "https://dev.d3jm2rpdas3ab7.amplifyapp.com/",
      date: "Early January 2021",
    },
    {
      image: firstline,
      title: "FirstLine Social",
      text: "During my first couple weeks of working with Code/+/Trust, I was tasked with making minor CSS fixes to FirstLine Social.  FirstLine is a progressive web app built in React.  This was the first production application I was able to see and work on.",
      url: "",
      date: "Late January 2021",
    },
    {
      image: eventGives,
      title: "Event.Gives",
      text: "While working with Code/+/Trust, I got the opportunity to work on Event.Gives.  I contributed small accessibility fixes in order to help meet ADA compliance for the American Heart Association.  This app is built in EmberJS and this is the first time I’ve been exposed to Ember.",
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
                key={i}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
