import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "auto",
    },
  },
  image: {
    maxHeight: "90%",
    maxWidth: "100%",
    height: "auto",
    width: "auto",
  },
  controls: {
    height: "10%",
    width: "100%",
    backgroundColor: "red",
  },
}));

export default useStyles;
