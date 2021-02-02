import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    maxWidth: 345,
    color: theme.palette.primary.font,
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
