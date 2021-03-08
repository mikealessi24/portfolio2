import React from "react";
import useStyles from "./style";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Box } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Avatar, Chip } from "@material-ui/core";

import cofc from "../../assets/cofc.jpg";
import jrsLogo from "../../assets/jrsLogo.jpg";
import stars from "../../assets/stars.png";
import ct from "../../assets/codeTrust.jpeg";

export default function ExpTimeline() {
  const classes = useStyles();

  return (
    <div className={classes.timelineContainer} id="timeline">
      <Timeline className={classes.timeline} align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Chip
              label={
                window.innerWidth < 600 ? "Aug 2015" : "August 2015 - June 2019"
              }
              className={classes.date}
            />
          </TimelineOppositeContent>
          <TimelineSeparator>
            {/* <TimelineDot variant="outlined" color="primary"> */}
            <Avatar src={cofc} className={classes.avatar} />
            {/* </TimelineDot> */}
            <TimelineConnector classes={{ root: classes.lineConnector }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                College of Charleston
              </Typography>
              <Typography>Because you need strength</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Chip
              label={
                window.innerWidth < 600
                  ? "Mar 2015"
                  : "March 2018 - August 2020"
              }
              className={classes.date}
            />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar src={stars} className={classes.avatar} />
            <TimelineConnector classes={{ root: classes.lineConnector }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Stars Rooftop & Grill Room
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Chip
              label={
                window.innerWidth < 600
                  ? "Aug 2020"
                  : "August 2020 - December 2020"
              }
              className={classes.date}
            />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar src={jrsLogo} className={classes.avatar} />
            <TimelineConnector classes={{ root: classes.lineConnector }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                JRS Coding School
              </Typography>
              <Typography>Because you need rest</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Chip
              label={
                window.innerWidth < 600 ? "Jan 2021" : "January 2021 - Present"
              }
              className={classes.date}
            />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar src={ct} className={classes.avatar} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Code/+/Trust
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
