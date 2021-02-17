import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  expandableCard: {
    width: 345,
    backgroundColor: "#d9d9d9",
    color: "#1a1a1a",
    margin: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  fixedCard: {
    width: 345,
    height: 345,
    backgroundColor: "#d9d9d9",
    color: "#1a1a1a",
    margin: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
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
