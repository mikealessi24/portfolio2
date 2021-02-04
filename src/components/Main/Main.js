import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import About from "../About/About";
import useStyles from "./style";
import DevSkills from "../DevSkills/DevSkills";
import ExpTimeline from "../Timeline/ExpTimeline";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

import TimelineIcon from "@material-ui/icons/Timeline";
import CodeIcon from "@material-ui/icons/Code";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AppsIcon from "@material-ui/icons/Apps";
import { Switch, Tooltip } from "@material-ui/core";

import avi from "../../assets/avi.jpg";

import { Avatar } from "@material-ui/core";

export default function Main({ setUserTheme, userTheme }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.name}>
            Hi, I'm Mike Alessi
          </Typography>
          <Tooltip
            title={
              userTheme === false ? "Toggle dark mode" : "Toggle light mode"
            }
            placement="left"
          >
            <Switch
              onChange={() => {
                setUserTheme(!userTheme);
              }}
              className={classes.themeSwitch}
              classes={{
                thumb: classes.toggle,
                track: classes.toggle,
              }}
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            className={classes.drawerCloseIcon}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          {[
            {
              text: "About Me",
              icon: <Avatar className={classes.sideAvatar} src={avi} />,
              id: "#about",
            },
            { text: "Dev Skills", icon: <CodeIcon />, id: "#dev" },
            { text: "Timeline", icon: <TimelineIcon />, id: "#timeline" },
            { text: "Projects", icon: <AppsIcon />, id: "#projects" },
            { text: "Contact Me", icon: <ContactPhoneIcon />, id: "#contact" },
          ].map((item) => (
            <a className={classes.link} href={item.id}>
              <ListItem button key={item.text}>
                <ListItemIcon className={classes.sideIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.sideText}
                  primary={item.text}
                />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider
          style={{ backgroundColor: theme.palette.primary.accent, height: 2 }}
        />
        {/* <div>socials</div>
        <Divider /> */}
        <List>
          {[
            {
              text: "Github",
              icon: <GitHubIcon />,
              url: "https://github.com/mikealessi24",
            },
            {
              text: "Twitter",
              icon: <TwitterIcon />,
              url: "https://twitter.com/alessimg24",
            },
            {
              text: "LinkedIn",
              icon: <LinkedInIcon />,
              url: "https://www.linkedin.com/in/michael-alessi/",
            },
          ].map((item) => (
            <a
              className={classes.link}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <ListItem button key={item.text}>
                <ListItemIcon className={classes.sideIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.sideText}
                  primary={item.text}
                />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.header}>
          <Avatar
            alt="Mike Alessi"
            src={avi}
            className={classes.headerAvatar}
          />
        </div>
        <About />
        <DevSkills />
        <ExpTimeline />
        <ProjectContainer />
      </main>
    </div>
  );
}
