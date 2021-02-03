import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },
  timelineContainer: {
    backgroundColor: theme.palette.primary.background,
    padding: theme.spacing(3),
  },
  timeline: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  lineConnector: {
    height: 100,
    backgroundColor: theme.palette.primary.red,
  },
  date: {
    marginTop: theme.spacing(1.5),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.font,
  },
  avatar: {
    margin: theme.spacing(1),
    height: 50,
    width: 50,
  },
}));

export default useStyles;
