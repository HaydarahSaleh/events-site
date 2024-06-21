import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    direction: theme?.direction === "rtl" ? "rtl!important" : "ltr!important",
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        "& .MuiTypography-root": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          direction:
            theme?.direction === "rtl" ? "rtl!important" : "ltr!important",
          textAlign: "start",

          "& .MuiDialogContent-root": {
            "& .MuiFormControl-root": {
              "& . MuiInputBase-root": {
                "& .MuiInputBase-input": {
                  fontFamily:
                    theme.direction === "rtl"
                      ? `${theme.globals.fontFamily.ar}!important`
                      : `${theme.globals.fontFamily.en}!important`,
                  color: theme.globals.colors.gray,
                },
              },
              fontFamily:
                theme.direction === "rtl"
                  ? `${theme.globals.fontFamily.ar}!important`
                  : `${theme.globals.fontFamily.en}!important`,
              color: theme.globals.colors.gray,
            },
          },
        },
      },
    },
    "& div.MuiDialog-paper": {
      width: "1000px",
      height: "auto",
      maxWidth: "900px",
      minHeight: 130,
      position: "absolute",
      top: "5%",
      [theme.breakpoints.down(900)]: {
        maxWidth: "90%",
      },
      [theme.breakpoints.down(500)]: {
        width: "350",
      },

      "& div.MuiDialogTitle-root": {
        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
        color: theme.globals.colors.white,
        fontSize: theme.globals.fontSize.s,
        direction:
          theme.direction === "rtl" ? "rtl!important" : "ltr!important",
        textAlign: "center",
        paddingBottom: 0,
        height: 270,

        "& h2": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          fontWeight: theme.globals.fontWeight.l,
          fontSize: theme.globals.fontSize.s,
          color: theme.palette.primary.main,
          "&:svg": {
            color: "blue",
          },
        },
      },

      "& div.MuiDialogContent-root": {
        display: "flex",
        flexDirection: "column",
        backgroundColor: `${theme.globals.colors.card}`,
        "& .MuiGrid-container": {
          marginTop: "0px!important",
        },
        "& div.MuiDialogActions-root": {
          marginTop: "15px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          height: "100%",
          flex: "1 1 auto",
          padding: "0px!important",
          "& button": {
            width: 130,
            height: "40px",
            border: "1px solid",
            fontSize: theme.globals.fontSize.xxs,
            backgroundColor: `${theme.palette.primary.main}!important`,
            color: `${theme.palette.background.default}!important`,
            cursor: "pointer",
            borderRadius: 50,
            "&:hover": {
              backgroundColor: `${theme.palette.background.default}!important`,
              color: `${theme.palette.primary.main}!important`,
              border: "1px solid",
              borderColor: `${theme.palette.primary.main}!important`,
            },
          },

          "& span.MuiButton-label": {
            color: "blue",
            textTransform: "capitalize",
          },

          "& button:first-of-type": {
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            fontSize: theme.globals.fontSize.xxs,
          },
          "& button:last-of-type": {
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            fontSize: theme.globals.fontSize.xxs,
          },

          "& button.Mui-disabled": {
            opacity: "0.7",
          },
        },
      },
    },
  },
  marginTop24: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    marginTop: "0px",
    position: "relative",
    [theme.breakpoints.down(600)]: {
      marginTop: "24px",
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
  center: {
    "& .MuiLink-root": {
      "& div": {
        "& a ": {
          "& button": {
            width: 100,
            height: 40,
            "& span": {
              fontSize: theme.globals.fontSize.xxs,
            },
          },
        },
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
  selectPaper: {
    direction: theme.direction,
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      color: theme.globals.colors.black,
      backgroundColor: `${theme.globals.colors.card}`,
    },
    "& .MuiAutocomplete-listbox": {
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
        color: `${theme.globals.colors.black}`,
      },
  },
}));
export default useStyles;
