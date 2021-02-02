import React from "react";
import useStyles from "./style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Project({ image, title, text, url }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="project"
          height="200"
          image={image}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            title
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} size="small">
          Visit
        </Button>
      </CardActions>
    </Card>
  );
}
