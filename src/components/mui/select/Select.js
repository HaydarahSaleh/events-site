import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Field } from "formik";
import { Select } from "formik-mui";
import { useSelector } from "react-redux";

export default function SelectComponent(props) {
  const {
    basicTheme: { isRTL, isDark },
  } = useSelector((state) => state.theme_reducer);
  return (
    <FormControl className={props.rootClass}>
      <InputLabel>{props.label}</InputLabel>
      {props?.value ? (
        <Field
          component={Select}
          name={props.name}
          variant={props.variant}
          value={props.value}
          dropdownStyle={props.dropdownStyle}
          className={props.className}
          multiple={props.multiple}
          onChange={props.onChange}
          input={props.input}
          native={props.native}
          inputProps={props.inputProps}
          renderValue={props.renderValue}
          disabled={props.disabled}
          initialValue={props.initialValue}
          MenuProps={{
            PaperProps: {
              sx: {
                minWidth: "30%!important",
                width: "calc(40% - 26px)",
                position: "absolute",
                display: "flex",
                backgroundColor: isDark ? "#132F4C" : "#fff",
                fontFamily:
                  isRTL === true ? `Shamel!important` : `Poppins!important`,
                "& .MuiList-root": {
                  width: "100%",
                  backgroundColor: isDark ? "#132F4C" : "#fff",
                  fontFamily:
                    isRTL === true ? `Shamel!important` : `Poppins!important`,
                },
                "& .MuiMenuItem-root": {
                  display: "flex!important",
                  width: "100%!important",
                  fontFamily:
                    isRTL === true ? `Shamel!important` : `Poppins!important`,
                  color: isDark && "#fff!important",
                  background: "none!important",
                  justifyContent: `${
                    isRTL === true
                      ? "flex-end!important"
                      : "flex-start!important"
                  }`,
                },
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },

            getContentAnchorEl: null,
          }}
        >
          {props.menuItems &&
            props.menuItems.map((selectedValue, index) => {
              return (
                <MenuItem
                  value={props.selectingValues[index]}
                  key={index}
                  style={{ backgroundColor: "red" }}
                >
                  {selectedValue}
                </MenuItem>
              );
            })}
        </Field>
      ) : (
        <Field
          component={Select}
          name={props.name}
          variant={props.variant}
          className={props.className}
          multiple={props.multiple}
          onChange={props.onChange}
          input={props.input}
          dropdownStyle={props.dropdownStyle}
          native={props.native}
          inputProps={props.inputProps}
          renderValue={props.renderValue}
          disabled={props.disabled}
          MenuProps={{
            PaperProps: {
              sx: {
                minWidth: "30%!important",
                width: "calc(40% - 26px)",
                position: "absolute",
                display: "flex",
                backgroundColor: isDark ? "#132F4C" : "#fff",
                fontFamily:
                  isRTL === true ? `Shamel!important` : `Poppins!important`,
                "& .MuiList-root": {
                  width: "100%",
                  backgroundColor: isDark ? "#132F4C" : "#fff",
                  fontFamily:
                    isRTL === true ? `Shamel!important` : `Poppins!important`,
                },
                "& .MuiMenuItem-root": {
                  display: "flex!important",
                  width: "100%!important",
                  fontFamily:
                    isRTL === true ? `Shamel!important` : `Poppins!important`,
                  color: isDark && "#fff!important",
                  background: "none!important",
                  justifyContent: `${
                    isRTL === true
                      ? "flex-end!important"
                      : "flex-start!important"
                  }`,
                },
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },

            getContentAnchorEl: null,
          }}
        >
          {props.menuItems &&
            props.menuItems.map((selectedValue, index) => {
              return (
                <MenuItem value={props.selectingValues[index]} key={index}>
                  {selectedValue}
                </MenuItem>
              );
            })}
        </Field>
      )}
    </FormControl>
  );
}
