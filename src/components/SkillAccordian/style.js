import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },
  accordian: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
  },
}));

export default useStyles;
