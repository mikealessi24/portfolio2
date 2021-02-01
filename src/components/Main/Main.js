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

import TimelineIcon from "@material-ui/icons/Timeline";
import CodeIcon from "@material-ui/icons/Code";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Switch } from "@material-ui/core";

import avi from "../../assets/avi.jpg";
import header from "../../assets/header.JPG";
import background from "../../assets/background.jpeg";

import { Avatar } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.main,
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    // change color with light mode state
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    overflow: "hidden",
    // FIX: something wrong with the scroll
    // overflowY: "scroll",
    // padding: theme.spacing(3),
  },

  sideAvatar: {
    height: "1.25em",
    width: "1.25em",
    fontSize: "1.5rem",
  },

  sideIcon: {
    color: "white",
    height: "1.25em",
    width: "1.25em",
    fontSize: "1.5rem",
  },

  header: {
    height: "94vh",
    backgroundImage: `url(${header})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerAvatar: {
    height: "3.5em",
    width: "3.5em",
    fontSize: "4.5rem",
    [theme.breakpoints.down("sm")]: {
      height: "2.5em",
      width: "2.5em",
      fontSize: "3.5rem",
    },
    border: `2px solid ${theme.palette.primary.main}`,
  },

  themeSwitch: {
    position: "absolute",
    right: 5,
  },
}));

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
          <Typography variant="h6" noWrap>
            Hi, I'm Mike Alessi
          </Typography>
          <Switch
            onChange={() => {
              setUserTheme(!userTheme);
            }}
            className={classes.themeSwitch}
          />
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
          <IconButton onClick={handleDrawerClose}>
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
            },
            { text: "Dev Skills", icon: <CodeIcon /> },
            { text: "Timeline", icon: <TimelineIcon /> },
            { text: "Contact Me", icon: <ContactPhoneIcon /> },
          ].map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon className={classes.sideIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider style={{ backgroundColor: theme.palette.secondary.main }} />
        {/* <div>socials</div>
        <Divider /> */}
        <List>
          {[
            { text: "Github", icon: <GitHubIcon /> },
            { text: "Twitter", icon: <TwitterIcon /> },
            { text: "LinkedIn", icon: <LinkedInIcon /> },
          ].map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon className={classes.sideIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
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
      </main>
    </div>
  );
}
