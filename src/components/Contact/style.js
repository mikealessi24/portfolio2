import { makeStyles } from "@material-ui/core/styles";
import iphone from "../../assets/contact.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.primary.background,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  title: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.primary.accent,
    color: theme.palette.primary.font,
  },
  scrollBuffer: {
    height: "7vh",
    backgroundColor: theme.palette.primary.background,
  },

  contact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  phone: {
    height: 700,
    width: 350,
    backgroundImage: `url(${iphone})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneOutline: {
    height: "83%",
    width: "78%",
    zIndex: "2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    display: "flex",
    justifyContent: "center",
  },
  contactForm: {
    height: "98%",
    width: "100%",
    backgroundColor: "white",
    zIndex: "3",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
}));

export default useStyles;
