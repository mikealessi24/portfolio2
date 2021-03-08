import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  timelineContainer: {
    backgroundColor: theme.palette.primary.background,
    padding: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  timeline: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  lineConnector: {
    height: 100,
  },
  date: {
    marginTop: theme.spacing(1.5),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.font,
    [theme.breakpoints.down("xs")]: {
      width: 95,
      height: 30,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    height: 50,
    width: 50,
  },
}));

export default useStyles;
