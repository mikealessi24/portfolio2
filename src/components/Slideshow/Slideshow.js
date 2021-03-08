import React from "react";

import { Paper } from "@material-ui/core";
import useStyles from "./style";

import athens from "../../assets/Slideshow/athens.JPG";
import brooklyn from "../../assets/Slideshow/brooklyn.jpeg";
import cinque from "../../assets/Slideshow/cinque.JPG";
import rome from "../../assets/Slideshow/rome.JPG";
import puppyLu from "../../assets/Slideshow/puppyLuna.jpeg";
import santorini from "../../assets/Slideshow/santorini.jpeg";

export default function Slideshow() {
  const classes = useStyles();
  const slides = [brooklyn, athens, rome, cinque, puppyLu, santorini];
  const [image, setImage] = React.useState(0);

  React.useEffect(() => {
    if (image < slides.length) {
      setTimeout(() => {
        setImage(image + 1);
      }, 3000);
    } else {
      setImage(0);
    }
  }, [image]);

  return (
    <Paper className={classes.imageContainer}>
      <img src={slides[image]} alt="" className={classes.image}></img>
      <div className={classes.controls}></div>
    </Paper>
  );
}
