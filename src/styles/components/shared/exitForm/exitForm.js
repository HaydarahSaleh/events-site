import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: theme?.direction === "rtl" ? "rtl!important" : "ltr!important",
     "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        "& .MuiTypography-root": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          color: theme.globals.colors.red,
          paddingBottom:"0px!important",
          fontSize: theme.globals.fontSize.awarenessTitle,
          direction:
            theme?.direction === "rtl" ? "rtl!important" : "ltr!important",
          "& . MuiDialogContent-root": {
            "& .MuiDialogActions-root": {},
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
      width: "500px",
      height: "auto",
      minHeight: 220,

      position: "relative",
      backgroundColor: `${theme.globals.colors.card}`,

      "&::before": {
        position: "absolute",
        transform:
          theme?.direction === "ltr"
            ? "rotate(180deg)!important"
            : "rotate(0deg)!important",
        backgroundSize: "cover",
        width: "170px",
        height: "100%",
        right: "0px",
        top: "0px",
        content: '""',
        backgroundImage:
          theme.palette.type === "dark"
            ? "url(/assets/images/dd.png)!important"
            : "url(/assets/images/d.png)!important",
        opacity: theme.palette.type === "dark" ? 0.2 : 1,
        [theme.breakpoints.down(460)]: {
          width: "100px",
        },
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
        padding: 50,
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
        "& p": {
          paddingTop: 16,
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          fontSize: theme.globals.fontSize.xs + 2,
          color: theme.globals.colors.gray,
          direction: "rtl",

          "& h2": {
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            fontWeight: theme.globals.fontWeight.l,
            fontSize: theme.globals.fontSize.s,
            color: theme.palette.primary.main,
          },
        },

        "& div.MuiTextField-root:hover fieldset": {
          // border: "3px solid rgba(0, 0, 0, 0.23)",
        },

        "& div.MuiDialogActions-root": {
          marginTop: "15px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          height: "100%",
          flex: "1 1 auto",
          "& div > button": {
            width: 120,
            height: "35px",
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            border: "1px solid",
            fontSize: `${theme.globals.fontSize.xxs}px!important`,
            // color: theme.globals.colors.white,
            cursor: "pointer",
            borderRadius: 25,
            marginLeft: 20,
            // background: theme.palette.primary.main,

            "&:hover": {
              background: theme.globals.colors.white,
              color: theme.palette.primary.main,
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
  alert: {
    width: "fit-content",
    borderBottom: "5px solid",
    bordeColor: theme.globals.colors.red,
  },
  iconBox:{
    backgroundColor:`${theme.globals.colors.lightGray}!important`,
    width:"40px",
    height:"40px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"50%",
    "& svg":{
      color:`${theme.globals.colors.menuText}!important`,
      fontSize:`${theme.globals.fontSize.m+2}px!important`
    }
  },
  continue: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    color: `${theme.globals.colors.gray}!important`,
  },
  icon: {
    fontSize: `${theme.globals.fontSize.title}px!important`,
    color: `${theme.globals.colors.red}`,
    cursor: "pointer",
  },
  alertBox: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 10,
    "& i": {
      fontSize: `${theme.globals.fontSize.title}px!important`,
      color: `${theme.globals.colors.notificationTitle}!important`,
      opacity: theme.palette.type === "dark" && 0.9,
      border: "unset!important",
      margin: "20px 10px!important",
      cursor: "pointer",
      width: "10%",
    },
  },
  title: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    color:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.field}!important`
        : `${theme.palette.primary.main}!important`,

    textTransform: "capitalize",
    "& .inside": {
      width: "140px!important",
      height: "140px!important",
      position: "absolute!important",
      top: 20,
    },
  },
  description: {
    fontSize: `${theme.globals.fontSize.s}px !important`,
    textTransform: "capitalize",
    "& .one": {
      fontSize: "30px",
      opacity: 0,
      animationDelay: "0.0s",
      animation: "$dot 1.3s infinite",
      animationFillMode: "forwards",
    },

    "& .two": {
      fontSize: "30px",
      opacity: 0,
      animationDelay: "0.2s",
      animation: "$dot 1.3s infinite",
      animationFillMode: "forwards",
    },

    "& .three": {
      fontSize: "30px",
      opacity: 0,
      animationDelay: "0.3s",
      animation: "$dot 1.3s infinite",
      animationFillMode: "forwards",
    },
    "& .four": {
      fontSize: "30px",
      opacity: 0,
      animationDelay: "0.4s",
      animation: "$dot 1.3s infinite",
      animationFillMode: "forwards",
    },
    "& .five": {
      fontSize: "30px",
      opacity: 0,
      animationDelay: "0.5s",
      animation: "$dot 1.3s infinite",
      animationFillMode: "forwards",
    },
  },
  "@keyframes dot": {
    "0%": {
      opacity: "0",
    },
    "50%": {
      opacity: "0",
    },

    "100%": {
      opacity: "1",
    },
  },
}));
export default useStyles;
