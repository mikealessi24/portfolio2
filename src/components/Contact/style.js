import { makeStyles } from "@material-ui/core/styles";
import iphone from "../../assets/contact.png";
import background from "../../assets/profileCard.jpg";

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
    display: "flex",
    alignItems: "flex-end",
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
  contactCard__title: {
    color: theme.palette.primary.font,
    backgroundColor: theme.palette.primary.accent,
    textAlign: "center",
    fontSize: 20,
  },
  contactCard__profile: {
    height: "30%",
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contactCard__avatar: {
    height: 125,
    width: 125,
    margin: theme.spacing(2),
  },
  email: {
    fontSize: 25,
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
