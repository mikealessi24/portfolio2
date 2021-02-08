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

export default function Project({ title, text, image, url, date, i }) {
  const classes = useStyles();

  const [expandedId, setExpandedId] = React.useState(-1);
  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <Card
      className={expandedId === i ? classes.expandableCard : classes.fixedCard}
      raised
    >
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
            [classes.expandOpen]: expandedId === i,
          })}
          onClick={() => handleExpandClick(i)}
          aria-expanded={expandedId === i}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.icon} />
        </IconButton>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
