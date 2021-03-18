import React from "react";

import { Paper, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import useStyles from "./style";

import athens from "../../assets/Slideshow/athens.JPG";
import brooklyn from "../../assets/Slideshow/brooklyn.jpeg";
import cinque from "../../assets/Slideshow/cinque.JPG";
import rome from "../../assets/Slideshow/rome.JPG";
import luna from "../../assets/Slideshow/puppyLuna.jpeg";
import santorini from "../../assets/Slideshow/santorini.jpeg";

export default function Slideshow() {
  const classes = useStyles();
  const slides = [brooklyn, athens, rome, cinque, luna, santorini];
  const [image, setImage] = React.useState(0);
  const [pause, setPause] = React.useState(false);

  let changeSlide;

  const handleClick = () => {
    setPause(!pause);
    clearTimeout(changeSlide);
  };

  const handleRight = () => {
    setPause(true);
    if (image !== slides.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  };

  const handleLeft = () => {
    setPause(true);
    if (image !== 0) {
      setImage(image - 1);
    } else {
      setImage(slides.length - 1);
    }
  };

  const play = () => {
    changeSlide = setTimeout(() => {
      setImage(image + 1);
    }, 2000);
  };

  React.useEffect(() => {
    if (!pause) {
      if (image < slides.length) {
        play();
      } else {
        setImage(0);
      }
    }
  }, [image, pause]);

  return (
    <Paper className={classes.imageContainer}>
      <img src={slides[image]} alt="" className={classes.image}></img>
      <div className={classes.controls}>
        <IconButton>
          <ArrowBackIosIcon
            color="inheirt"
            className={classes.controlBtns}
            onClick={() => handleLeft()}
          />
        </IconButton>
        <IconButton>
          {!pause ? (
            <PauseIcon
              color="inherit"
              className={classes.controlBtns}
              onClick={() => handleClick()}
            />
          ) : (
            <PlayArrowIcon
              olor="inherit"
              className={classes.controlBtns}
              onClick={() => handleClick()}
            />
          )}
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon
            color="inherit"
            className={classes.controlBtns}
            onClick={() => handleRight()}
          />
        </IconButton>
      </div>
    </Paper>
  );
}
