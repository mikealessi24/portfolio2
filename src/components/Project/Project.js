import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PageviewIcon from "@material-ui/icons/Pageview";

import useStyles from "./style";

export default function Project({
  title,
  text,
  image,
  url,
  date,
  expanded,
  setExpanded,
}) {
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} raised>
      <CardHeader
        classes={{ subheader: classes.subheader }}
        title={title}
        subheader="date"
      />
      <CardMedia className={classes.media} image={image} alt="project" />
      <CardActions disableSpacing classes={{ root: classes.actions }}>
        <IconButton onClick={() => window.open(url, "_blank")}>
          <PageviewIcon className={classes.icon} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.icon} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
