import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import js from "../../assets/TechLogos/js.png";
import html from "../../assets/TechLogos/html.png";
import css from "../../assets/TechLogos/css.png";
import react from "../../assets/TechLogos/react.png";
import node from "../../assets/TechLogos/node.png";
import sql from "../../assets/TechLogos/sql.png";
import aws from "../../assets/TechLogos/aws.jpg";
import mui from "../../assets/TechLogos/mui.png";
import useStyles from "./style";

export default function SkillAccordian() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar className={classes.icon} src={js} />
          <Typography className={classes.heading}>JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use JavaScript for everything from creating functionality on the
            front-end to writing API endpoints on the back-end. JS is the logic
            of my software development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={html} />
          <Typography className={classes.heading}>HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use HTML along with JavaScript and CSS to create the front-end
            side of my applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={css} />
          <Typography className={classes.heading}>CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use CSS to style the front-end of my applications and put my
            artistic touch on the user interface.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={react} />
          <Typography className={classes.heading}>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use React to make my user interfaces more organized and scalable.
            React's component based approach helps to plug in display components
            in different places and quickly change them if need be. This site
            was built using Create React App!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={node} />
          <Typography className={classes.heading}>NodeJS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use Node for all of my back-end development. Node allows me to
            construct REST API's using the ExpressJs library in order to
            communicate with databases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={sql} />
          <Typography className={classes.heading}>MySql</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use MySQL and the SQL query language to create and retrieve data
            from relational databases
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={aws} />
          <Typography className={classes.heading}>AWS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use AWS for cloud storage, authentication, serverless technology,
            and deployment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar className={classes.icon} src={mui} />
          <Typography className={classes.heading}>Material UI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I use Material UI to bootstrap my React components. It allows for
            quicker development and a nicer looking UI, this page was built
            using Material UI.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
