import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.primary.background,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },

  title: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.primary.accent,
    color: "white",
    color: "white",
    fontSize: 24,
    textShadow: "3px 1px 2px rgba(0, 0, 0, 1);",
    fontFamily: '"Arvo", serif',
  },
  projectDisplay: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: 0
    },
  },
  scrollBuffer: {
    height: "7vh",
    backgroundColor: theme.palette.primary.background,
  },
}));

export default useStyles;
