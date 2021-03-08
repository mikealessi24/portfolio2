import React from "react";
import { Box, Paper, Grid, useScrollTrigger } from "@material-ui/core";

import useStyles from "./style";

import jets1 from "../../assets/jets1.jpeg";
import jets from "../../assets/jets.jpeg";
import Slideshow from "../../components/Slideshow/Slideshow";

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
            <Slideshow />
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Paper className={classes.paper}>
              My name is Michael Alessi and I am located in Charleston, South
              Carolina. I am a recent graduate of the College of Charleston, I
              graduated with a Bachelors of Science in Public Health. Close to
              the end of my time at CofC, I took an intro Computer Science
              course and decided that it was really something I wanted to
              pursue. Soon after college, I enrolled in a local coding bootcamp
              called JRS Software. JRS was a three month, immersive coding
              bootcamp where I learned to build web applications using
              javascript. Now, I am a Software Engineer Intern at Code/+/Trust
              and I am working my way towards becoming a better developer and
              achieving a full-time position.
            </Paper>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Paper className={classes.paper}>
                  I love to travel when I have the free time. I have been to
                  many places, but my favorite is Chamonix France, in the French
                  Alps. I love experiencing new cultures and trying new
                  cuisines. I am also a huge NFL football fan, which is why I
                  included a picture at MetLife stadium. Sadly, my favorite team
                  is the New York Jets. Some of my other favorite things to do
                  include, playing videogames, trying new restaurants, getting
                  coffee with my girlfriend and going to the dog park with my
                  pup Luna.
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Paper className={classes.imageContainer2}>
                  <img src={jets} alt="" className={classes.image} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
