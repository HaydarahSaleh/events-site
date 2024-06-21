import { FormControlLabel, Radio } from "@mui/material";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";
export default function RadioButton(props) {
  return (
    <Field component={RadioGroup} name={props.name} className={props.className}>
      {props.allRadios.map((radio) => {
        return (
          <FormControlLabel
            value={radio.value}
            control={<Radio defaultChecked={radio.checked} />}
            label={radio.label}
            disabled={radio.disabled}
            id={props.id}
          />
        );
      })}
    </Field>
  );
}
