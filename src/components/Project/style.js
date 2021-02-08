import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    backgroundColor: "#d9d9d9",
    color: "#1a1a1a",
  },
  subheader: {
    color: "#1a1a1a",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  actions: {
    backgroundColor: "#d9d9d9",
  },
  icon: {
    color: "#1a1a1a",
  },
}));

export default useStyles;
