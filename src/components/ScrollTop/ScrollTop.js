import React from "react";
import useStyles from "./style";
import { useScrollTrigger, Paper } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default function ScrollTop() {
  const classes = useStyles();

  const trigger = useScrollTrigger({ disableHysteresis: true });
  console.log(trigger);

  return trigger ? (
    <a href="#top">
      <Paper className={classes.paper}>
        <ArrowUpwardIcon className={classes.icon} />
      </Paper>
    </a>
  ) : null;
}
