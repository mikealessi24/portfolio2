import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    color: "white",
  },

  title: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.primary.accent,
    color: theme.palette.primary.font,
  },

  image: {
    height: "100%",
    width: "100%",
  },

  imageContainer1: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    height: 605,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "auto",
    },
  },
}));

export default useStyles;
