import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    background: theme.globals.colors.offWhite,
    borderRadius: 5,
    marginBottom: "6px!important",

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none!important",
      padding: "0 10px!important",
    },
    "& .MuiOutlinedInput-input ": {
      padding: "9px!important",
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
      marginRight: "4px!important",
    },

    width: "100%",
    display: "flex!important",
    outline: "none",

    "& input::placeholder": {
      marginLeft: "4px!important",
    },
    "& .MuiFormHelperText-root": {
      direction: `${theme?.direction === "rtl" ? "rtl" : "ltr"}!important`,
      alignSelf: "flex-start",
      marginInline: "4px",
      [theme.breakpoints.down(955)]: {
        fontSize: `${theme.globals.fontSize.xs - 3}px!important`,
      },
    },
  },
  multiline: {
    background: theme.globals.colors.offWhite,
    borderRadius: 5,
    height: "60px",
    width: "100% !important",
    display: "flex",
    outline: "none",

    color: `${theme.globals.colors.lightBlack}!important`,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none!important",
    },
    "& input::placeholder": {
      marginLeft: "4px!important",
    },
    "& .MuiFormHelperText-root": {
      direction: `${theme?.direction === "rtl" ? "rtl" : "ltr"}!important`,
      alignSelf: "flex-start",
      marginInline: "4px",
    },
    "& .MuiOutlinedInput-input ": {
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    },
    "& .MuiInputBase-root": {
      padding: "0px 8px!important",
    },
  },
}));
export default useStyles;
