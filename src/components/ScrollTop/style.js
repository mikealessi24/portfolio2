import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "fixed",
    bottom: 15,
    right: 20,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.accent,
    color: "white",
    zIndex: 10,
    cursor: "pointer",
  },
}));

export default useStyles;
