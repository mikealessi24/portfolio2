import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#333333",
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },
  projectDisplay: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default useStyles;
