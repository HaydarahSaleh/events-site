import { TextField } from "@mui/material";
import React from "react";
import useStyles from "../../styles/components/textField/textField";
const TextFieldComponent = (props) => {
  const classes = useStyles();
  return <TextField {...props} className={classes.textField} />;
};
export default TextFieldComponent;
