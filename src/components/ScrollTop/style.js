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
    alignItems: "center",
    border: `1px solid ${theme.palette.primary.font}`,
    [theme.breakpoints.down("sm")]: {
      bottom: -10,
      right: -10,
      height: 50,
      width: 50,
    },
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: "100%",
  },
}));

export default useStyles;
