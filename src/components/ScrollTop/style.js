import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 60,
    width: 60,
    position: "fixed",
    bottom: 15,
    right: 20,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.accent,
    color: "white",
    zIndex: 10,
    cursor: "pointer",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: "100%"
  }
}));

export default useStyles;
