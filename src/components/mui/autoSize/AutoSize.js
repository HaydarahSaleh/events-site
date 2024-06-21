import { TextareaAutosize } from "@mui/material";
import { Field } from "formik";
import React from "react";

function AutoSize(props) {
  return <Field component={TextareaAutosize} {...props} />;
}

export default AutoSize;
