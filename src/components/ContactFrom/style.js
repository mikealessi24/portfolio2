import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    height: "65%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  messageIcon: {
    position: "absolute",
    top: 30,
    right: 15,
  },

  sendBtn: {
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.light,
    },
  },
}));

export default useStyles;
