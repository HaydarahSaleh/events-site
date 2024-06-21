import { Field } from "formik";
import Autocomplete from "@mui/material/Autocomplete";

export default function CustomAutoComplete(props) {
  return <Field component={Autocomplete} {...props} />;
}
