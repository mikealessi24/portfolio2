import React from "react";

import useStyles from "./style";
import { TextField, Button, InputAdornment } from "@material-ui/core";

import { Formik, Field, Form, useField, FieldArray } from "formik";
import * as yup from "yup";

import MessageIcon from "@material-ui/icons/Message";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SubjectIcon from "@material-ui/icons/Subject";

export default function ContactForm() {
  const classes = useStyles();

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
        setSubmitting(false);
        resetForm();
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
          {console.log(errors)}
          {console.log(touched)}
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
              disabled={isSubmitting}
              variant="outlined"
              className={classes.sendBtn}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}
