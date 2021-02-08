import { makeStyles } from "@material-ui/core/styles";
import iphone from "../../assets/contact.png";
import background from "../../assets/profileCard.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.background,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  title: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.accent,
    color: theme.palette.primary.font,
  },
  scrollBuffer: {
    height: "7vh",
    backgroundColor: theme.palette.primary.background,
  },

  contactPhone: {
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
    height: "89%",
    width: "78%",
    zIndex: "2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    display: "flex",
    justifyContent: "center",
  },
  contactForm: {
    height: "95%",
    width: "100%",
    backgroundColor: "white",
    zIndex: "3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contactCard: {
    margin: theme.spacing(2),
    height: 625,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.font,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },

  contactCard__profile: {
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contactCard__avatar: {
    height: 125,
    width: 125,
    margin: theme.spacing(2),
  },
}));

export default useStyles;
