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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
