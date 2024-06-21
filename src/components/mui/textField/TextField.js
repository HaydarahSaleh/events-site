import { Field } from "formik";
import { TextField } from "formik-mui";
import React from "react";
import useStyles from "../../../styles/components/textField/textField";

function TextFieldComponent(props) {
  const classes = useStyles();
  return (
    <Field
      component={TextField}
      {...props}
      className={classes.textField}
      sx={{ height: `${props.height}` }}
    />
  );
}

export default TextFieldComponent;
