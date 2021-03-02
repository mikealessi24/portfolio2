import { makeStyles } from "@material-ui/core/styles";
import header from "../../assets/header.JPG";

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
    backgroundColor: theme.palette.secondary.main,
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
    color: theme.palette.primary.main,
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
  },
  drawerCloseIcon: {
    color: theme.palette.primary.font,
  },
  sideAvatar: {
    height: "1.25em",
    width: "1.25em",
    fontSize: "1.5rem",
  },
  sideIcon: {
    color: theme.palette.primary.font,
    height: "1.25em",
    width: "1.25em",
    fontSize: "1.5rem",
  },
  sideText: {
    color: theme.palette.primary.font,
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
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
  name: {
    color: theme.palette.primary.main,
    fontFamily: '"Arvo", serif',
  },

  toggle: {
    backgroundColor: `${theme.palette.secondary.toggle} !important`,
  },
}));

export default useStyles;
