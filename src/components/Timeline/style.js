import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },
  timeline: {
    backgroundColor: "#333333",
    margin: 0,
  },
  lineConnector: {
    height: 100,
  },
  date: {
    marginTop: theme.spacing(1.5),
  },
  avatar: {
    margin: theme.spacing(1),
    height: 50,
    width: 50,
  },
  topItems: {
    marginTop: theme.spacing(4),
  },
  bottomItems: {
    marginBottom: theme.spacing(4),
  },
}));

export default useStyles;
