import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
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
          width: "90%",
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
      width: "510px",
      height: "auto",
      minHeight: 220,
      backgroundColor: `${theme.globals.colors.card}!important`,
      "&::before": {
        position: "absolute",
        transform:
          theme?.direction === "ltr" ? "rotate(180deg)" : "rotate(0deg)",
        backgroundSize: "cover",
        width: "110px",
        height: "100%",
        right: "0px",
        top: "0px",
        content: '""',
        backgroundImage:
          theme.palette.type === "dark"
            ? "url(/assets/images/dd.png)!important"
            : "url(/assets/images/d.png)!important",
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
        paddingTop: "0px!important",

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
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            border: "1px solid",
            fontSize: theme.globals.fontSize.xxs,
            backgroundColor: `${theme.palette.primary.main}!important`,
            color:
              theme.palette.type === "dark"
                ? `${theme.globals.colors.field}!important`
                : `${theme.palette.background.default}!important`,
            cursor: "pointer",
            borderRadius: 50,
            "&:hover": {
              color: `${theme.palette.primary.main}!important`,
              backgroundColor:
                theme.palette.type === "dark"
                  ? `${theme.globals.colors.field}!important`
                  : `${theme.palette.background.default}!important`,
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
  icon: {
    fontSize: `${theme.globals.fontSize.title}px!important`,
    color: `${theme.globals.colors.black}`,
    border: "unset!important",
    margin: "20px!important",
  },
  closesIcon: {
    width: "35px",
    height: "35px",
    marginTop: "20px",
    marginInlineEnd: "15px",
    color:
      theme.palette.type === "dark"
        ? theme.globals.colors.field
        : theme.palette.primary.main,
    cursor: "pointer",
  },
  titleBox: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    height: "fit-content",
    zIndex: 4,
    width: "100%",
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
  message: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    zIndex: 4,
    color: `${theme.globals.colors.notificationTitle}!important`,
  },
  title: {
    color: `${theme.globals.colors.notificationTitle}!important`,
    fontSize: `${theme.globals.fontSize.awarenessTitle}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    borderBottom: "5px solid!important",
    borderColor: theme.globals.colors.TwitterIcon,
    width: "fit-content",
    textTransform: "capitalize",
  },
  titleFail: {
    color: theme.globals.colors.red,
    fontSize: `${theme.globals.fontSize.awarenessTitle}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    borderBottom: "5px solid!important",
    borderColor: theme.globals.colors.TwitterIcon,
    width: "fit-content",
    textTransform: "capitalize",
  },
  description: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    textTransform: "capitalize",
    color: `${theme.globals.colors.gray}!important`,
    zIndex: 4,
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
