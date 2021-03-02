import React from "react";

import emailjs from "emailjs-com";
import useStyles from "./style";
import {
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Paper,
} from "@material-ui/core";

import { Formik, Form, } from "formik";
import * as yup from "yup";

import MessageIcon from "@material-ui/icons/Message";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SubjectIcon from "@material-ui/icons/Subject";

export default function ContactForm() {
  const classes = useStyles();

  const [openSnack, setOpenSnack] = React.useState(false);

  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        //make async call
        console.log(data);
        //call finished
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
        setOpenSnack(true);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
      }) => (
          <>
            <Form className={classes.form}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="name"
                required
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Subject"
                name="subject"
                required
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.subject && touched.subject}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SubjectIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Message"
                name="message"
                multiline
                rows="4"
                required
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.message && touched.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      classes={{ root: classes.messageIcon }}
                    >
                      <MessageIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="outlined"
                className={classes.sendBtn}
                type="submit"
              >
                {!isSubmitting ? (
                  "Send"
                ) : (
                    <CircularProgress size={25} color="inherit" />
                  )}
              </Button>
              <Snackbar
                message="Your email has been sent!"
                open={isSubmitting}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                classes={{ root: classes.snackRoot }}
                ContentProps={{ classes: { root: classes.contentRoot } }}
              />
            </Form>
          </>
        )}
    </Formik>
  );
}
