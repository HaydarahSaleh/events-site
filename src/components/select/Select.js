import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useSelector } from "react-redux";

export default function CustomSelect(props) {
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);
  return (
    <Select
      name={props.name}
      variant={props.variant}
      value={props.value}
      className={props.className}
      multiple={props.multiple}
      onChange={props.onChange}
      input={props.input}
      native={props.native}
      inputProps={props.inputProps}
      renderValue={props.renderValue}
      disabled={props.disabled}
      initialValue={props.initialValue}
      menuPosition="fixed"
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: isRTL ? "right" : "left",
        },
        classes: { paper: props.dropdownStyle },
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
    </Select>
  );
}
