import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "94vh",
    width: "100%",
    backgroundColor: "#333333",
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
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
  },

  imageContainer2: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    height: 400,
  },
}));

export default useStyles;
