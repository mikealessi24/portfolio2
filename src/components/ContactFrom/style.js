import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    height: "60%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

export default useStyles;
