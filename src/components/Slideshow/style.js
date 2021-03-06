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
    maxWidth: "100%",
    height: 520,
    width: "auto",
  },
  controls: {
    marginTop: theme.spacing(1),
    height: 53,
    width: "100%",
    backgroundColor: theme.palette.primary.accent,
    display: "flex",
    justifyContent: "center",
    border: `1px solid ${theme.palette.primary.font}`,
    borderRadius: "3px",
  },
  controlBtns: {
    color: theme.palette.primary.font,
  },
}));

export default useStyles;
