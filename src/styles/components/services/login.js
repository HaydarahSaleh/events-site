import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  // MuiButtonBase-root
  inputSearch: {
    left: 0,
  },
  inputYear: {
    left: 0,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 290,
    height: 40,
    borderRadius: 2,
    borderColor: `${theme.globals.colors.white}!important`,
    marginTop: 10,
    marginLeft: 0,
    "&:hover": {
      backgroundColor: `${theme.globals.colors.white}!important`,
      "& span": {
        color: `${theme.globals.colors.gray}!important`,
      },
    },
    [theme.breakpoints.down(900)]: {
      width: "220px",
    },
  },
  gridSelect: {
    "& .MuiSelect-select": {
      padding: "0!important",
    },
  },
  titleButton: {
    fontSize: theme.globals.fontSize.xs,
    [theme.breakpoints.down(458)]: {
      fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
    },
    color: `${theme.globals.colors.white}!important`,
    "&:hover": {
      color: `${theme.globals.colors.black}!important`,
    },
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
  },
  itemBox: {
    display: "flex",
    justifyContent: "center",
  },
  menuContainer: {
    [theme.breakpoints.down(370)]: {
      paddingLeft: "6px!important",
      paddingRight: "6px!important",
    },
  },

  list: {
    "& .MuiButtonBase-root": {
      direction: "rtl",
    },
  },
  selectPaper: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? theme.globals.fontFamily.ar
          : theme.globals.fontFamily.en,
      color: theme.palette.primary.main,
    },
  },
  formContainer: {
    width: "890px",
    height: 180,
    display: "flex",
    [theme.breakpoints.down(950)]: {
      width: "800px",
    },
    [theme.breakpoints.down(893)]: {
      width: "750px",
    },
    [theme.breakpoints.down(850)]: {
      width: "700px",
    },
    [theme.breakpoints.down(775)]: {
      width: "650px",
    },
    [theme.breakpoints.down(720)]: {
      width: "600px",
    },
    [theme.breakpoints.down(670)]: {
      width: "550px",
    },
    [theme.breakpoints.down(624)]: {
      width: "500px",
    },
    [theme.breakpoints.down(664)]: {
      width: "450px",
    },
    [theme.breakpoints.down(518)]: {
      width: "400px",
    },
    [theme.breakpoints.down(458)]: {
      width: "350px",
    },
    [theme.breakpoints.down(405)]: {
      width: "300px",
    },
    [theme.breakpoints.down(330)]: {
      width: "270px",
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
      backgroundColor: "#fff!important",
      color: theme.palette.primary.main,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      "& .MuiTabs-root": {
        width: 220,
      },
      "& .MuiTabs-indicator": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    "& .MuiTabs-scrollButtons": {
      "& .MuiSvgIcon-root": {
        fontSize: "35px!important",
        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
      },
    },
    "& .MuiGrid-root .MuiFormControl-root .MuiInputBase-root .MuiInputBase-input":
      {
        fontFamily:
          theme.direction === "rtl"
            ? theme.globals.fontFamily.ar
            : theme.globals.fontFamily.en,
      },
  },
  field: {
    width: "100%",
    marginBottom: "16px",
    [theme.breakpoints.down(550)]: {
      marginBottom: "5px",
    },
    "& .Mui-error": {
      fontFamily:
        theme.direction === "rtl"
          ? theme.globals.fontFamily.ar
          : theme.globals.fontFamily.en,
      fontSize: theme.globals.fontSize.xs,

      textAlign: "left",
    },
    "& .MuiInputLabel-root": {
      color: theme.globals.colors.white,
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
      fontWeight: "unset",
      marginBottom: 5,
      [theme.breakpoints.down(550)]: {
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
    },
    "& .MuiFormControl-root": {
      margin: 0,
      width: "100%",
      "& .MuiFormHelperText-root": {
        margin: "8px 0px",
        color: theme.globals.colors.white,
      },
      "& .MuiInputBase-root": {
        background: "#fff",
        border: "none",
        "& .MuiInputBase-input": {
          border: "none",
          maxHeight: 50,
        },
        "& .MuiInput-input": {
          fontFamily:
            theme.direction === "rtl"
              ? theme.globals.fontFamily.ar
              : theme.globals.fontFamily.en,
          fontSize: theme.globals.fontSize.xxs,
        },
      },
    },

    "& .MuiFormLabel-root": {
      fontSize: theme.globals.fontSize.xs,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      "& span": {
        color: "red",
      },
    },
  },
  select: {
    color: theme.palette.primary.main,
  },
  create: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.globals.colors.white,
    cursor: "pointer",

    "& label": {
      marginLeft: 0,
      marginRight: 2,

      "& .MuiCheckbox-root": {
        padding: "0px!important",
        "& svg": {
          [theme.breakpoints.down(550)]: {
            width: 20,
            height: 20,
          },
        },
      },
      "& .MuiTypography-root": {
        marginLeft: 5,
        fontSize: `${theme.globals.fontSize.xxs}px!important`,
      },
    },
    "& .MuiTypography-root": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      fontSize: `${theme.globals.fontSize.xs}px!important`,
      [theme.breakpoints.down(550)]: {
        fontSize: `${theme.globals.fontSize.xxs}px!important`,
      },
    },
  },
  tabStyle: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    fontSize: `${theme.globals.fontSize.xs}px!important`,
  },
  label: {
    borderRadius: 5,
    opacity: "0.5",
    fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    color: theme.globals.colors.labelSuggestion,
    fontWeight: theme.globals.fontWeight.s,
    marginBottom: 4,
  },
  Login: {
    width: 1070,
    zIndex: 9,
    height: 630,
    position: "relative",
    top: -40,
    padding: "8px 18px",
    backgroundImage:
      theme.direction === "rtl"
        ? `url(/assets/images/siteMap2Ar.png)`
        : `url(/assets/images/siteMap2.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "1700px 1700px",
    boxShadow: "0px 0 18px rgb(0 0 0 / 8%)!important",
    marginTop: "10px",
    borderRadius: "20px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down(1100)]: {
      width: "950px!important",
    },
    [theme.breakpoints.down(985)]: {
      width: "850px!important",
    },
    [theme.breakpoints.down(900)]: {
      width: "750px!important",
    },
    [theme.breakpoints.down(780)]: {
      width: "620px!important",
    },
    [theme.breakpoints.down(700)]: {
      width: "550px!important",
    },
    [theme.breakpoints.down(550)]: {
      width: "100%!important",
    },

    "& .MuiAutocomplete-endAdornment": {
      position: "relative",
    },
    "& .Mui-focused": {
      "& label": {},
    },
    "&> div label": {},
    "&> div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      padding: "0px 0px 15px 0px",
      "& label": {
        left: theme?.direction === "rtl" ? "0px" : "inherit",

        fontFamily:
          theme.direction === "rtl"
            ? theme.globals.fontFamily.ar
            : theme.globals.fontFamily.en,
        fontWeight: "500",
        textTransform: "capitalize",
      },

      "& div.MuiInputBase-root:after, & div.MuiInputBase-root:before": {
        borderBottom: `1px solid ${theme.palette.primary.main}!important`,
        width: "100%",
      },
    },
  },
  end: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingLeft: 0,
    "& a": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    "& p": {
      color: theme.globals.colors.white,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      fontSize: `${theme.globals.fontSize.xs}px!important`,
      marginTop: 20,
      [theme.breakpoints.down(550)]: {
        marginTop: 5,
      },
    },
  },
  text: {
    color: theme.globals.colors.white,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginBottom: 20,
    [theme.breakpoints.down(550)]: {
      fontSize: `${theme.globals.fontSize.s}px!important`,
    },
    [theme.breakpoints.down(400)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
}));
export default useStyles;
