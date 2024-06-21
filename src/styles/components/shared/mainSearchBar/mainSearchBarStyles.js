import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(510)]: {
      flexDirection: "column",
    },
    "& .MuiGrid-root .MuiFormControl-root .MuiInputBase-root .MuiInputBase-input":
      {
        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
      },
  },
  selectPaper: {
    direction: theme.direction,

    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    "& .MuiAutocomplete-listbox": {
      backgroundColor: theme.globals.colors.card,
      color:
        theme.palette.type === "dark"
          ? `${theme.globals.colors.field}!important`
          : `${theme.palette.primary.main}!important`,
      "& .MuiAutocomplete-option": {
        direction: `${theme.direction}!important`,
      },
    },
  },
  field: {
    width: "100%",
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A6A6A6!important",
      borderWidth: "1px!important",
    },
    "& .MuiInputBase-root:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#A6A6A6!important",
      },
    },
    "& label+.MuiInputBase-root": {
      margin: "5px 0px!important",
    },
    "& input::placeholder": {
      color: theme.globals.colors.darkgray,
      fontSize: `${theme.globals.fontSize.m}px!important`,
    },
    "& .MuiAutocomplete-hasPopupIcon": {
      padding: "0px!important",
    },
    "& .MuiInputBase-root": {
      padding: "0px!important",
      "& input": {
        padding: "15px 14px!important",
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.primary.main,
      fontSize: theme.globals.fontSize.m,
    },
    "& .MuiInputLabel-shrink": {
      fontSize: `${theme.globals.fontSize.m}px!important`,
    },
  },
  label: {
    position: "absolute",
    color: "#A6A6A6",
    backgroundColor: `${theme.globals.colors.card}`,
    top: "5px",
    left: theme.direction === "rtl" ? "inherit" : "20px",
    width: 72,
    paddingLeft: 5,
    zIndex: 10,
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down(700)]: {
      justifyContent: "center",
    },
  },
  advancedSearch: {
    fontSize: theme.globals.fontSize.title,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    color:
      theme.palette.type === "dark"
        ? theme.globals.colors.field
        : theme.palette.primary.main,
    margin: "10px 0!important",
  },
  searchText: {
    width: "100%",
    height: "180px",
    top: "35px",
    zIndex: 99,
    padding: "18px",
    position: "relative",
    background: `${theme.globals.colors.card}`,
    boxShadow: "0px 0 18px rgb(0 0 0 / 8%)!important",
    borderRadius: "10px",
    border: `0.5px solid ${theme.globals.colors.border}`,
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down(600)]: {
      height: "fit-content",
    },
    "& .MuiAutocomplete-endAdornment": {
      position: "relative",
      left: "0px!important",
    },
    "&> div": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& label": {
        left: theme?.direction === "rtl" ? "0px" : "inherit",

        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
        whiteSpace: "nowrap",
        marginInlineEnd: "10px",
        alignItems: "center",
        // color: theme.palette.primary.main,
        fontWeight: "500",
        textTransform: "capitalize",
        "& .MuiCheckbox-root": {
          color:
            theme.palette.type === "dark"
              ? `${theme.globals.colors.field}!important`
              : `${theme.palette.primary.main}!important`,
        },
      },

      "& div.MuiInputBase-root:after, & div.MuiInputBase-root:before": {
        borderBottom: `1px solid ${theme.globals.colors.black}!important`,
      },
    },
  },

  searchIcon: {
    display: "none!important",
    borderRadius: "50%",
    backgroundColor: `${theme.palette.primary.main}`,
    alignItems: "center",
    justifyContent: "center",
    zIndex: "10",
    width: 35,
    height: 35,

    [theme.breakpoints.down(700)]: {
      display: "flex",
    },
    "&:hover": {
      backgroundColor: theme.globals.colors.white,
      border: "1px solid",
      borderColor: `${theme.palette.primary.main}`,
      "& svg": {
        color: `${theme.palette.primary.main}`,
      },
    },
    "& svg": {
      fontSize: theme.globals.fontSize.m,
      color: theme.globals.colors.white,
    },
  },
  advanced: {
    width: "60%!important",
    "& .MuiFormControlLabel-root": {
      "& .MuiTypography-root": {
        color: `${theme.globals.colors.notificationTitle}!important`,
        fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      },
    },
    "& label": {
      marginLeft: 0,
    },
    [theme.breakpoints.down(600)]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  advancedText: {
    color: `${theme.palette.primary.main}`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginTop: 15,
  },
  marginTop24: {
    marginTop: "0px",
    position: "relative",
    "& .MuiAutocomplete-root": {
      [theme.breakpoints.between(900, 940)]: {
        width: "90%",
      },
      "& .MuiFormControl-root": {
        "& .MuiInputBase-root": {
          color:
            theme.palette.type === "dark"
              ? `${theme.globals.colors.field}!important`
              : `${theme.palette.primary.main}!important`,
        },
      },
    },
    [theme.breakpoints.down(600)]: {
      marginTop: "24px",
    },
  },
}));
export default useStyles;
