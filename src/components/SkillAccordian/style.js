import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  accordian: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },
  expand: {
    color: theme.palette.primary.font,
  },
  icon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: theme.spacing(2),
    height: 30,
    width: 30,
  },
}));

export default useStyles;
