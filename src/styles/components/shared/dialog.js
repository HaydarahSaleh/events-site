import { makeStyles } from "@mui/styles";

const useDialogStyles = makeStyles((theme) => ({
  divRoot: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    "&::before": {
      position: "absolute",
      transform:
        theme?.direction === "rtl"
          ? "rotate(180deg)!important"
          : "rotate(0deg)!important",
      backgroundSize: "cover",
      width: "170px",
      height: "100%",
      left: "0px",
      top: "0px",
      content: '"   "',
      backgroundImage:
        theme.palette.type === "dark"
          ? "url(/assets/images/dd.png)!important"
          : "url(/assets/images/d.png)!important",
      opacity: theme.palette.type === "dark" ? 0.2 : 1,
      [theme.breakpoints.down(460)]: {
        width: "100px",
      },
    },
  },
  root: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        maxWidth: "860px!important",
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

        "& .MuiTypography-root": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,

          color: theme.globals.colors.gray,
          fontSize: theme.globals.fontSize.s,
          direction: `${theme.direction}!important`,
          height: 100,
          textAlign: "start",
          marginBottom: "5px!important",
          zIndex: 2,
          [theme.breakpoints.down(750)]: {
            height: "120px!important",
          },
          [theme.breakpoints.down(670)]: {
            height: "130px!important",
          },
          [theme.breakpoints.down(600)]: {
            fontSize: theme.globals.fontSize.s - 2,
          },
          [theme.breakpoints.down(440)]: {
            fontSize: theme.globals.fontSize.s - 3,
          },
          [theme.breakpoints.down(365)]: {
            height: "150px!important",
          },
          [theme.breakpoints.down(320)]: {
            fontSize: theme.globals.fontSize.s - 4,
          },
          "& h2": {
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            color: theme.globals.colors.black,
            fontWeight: theme.globals.fontWeight.l,
            marginBottom: "5px!important",
          },
          "& . MuiDialogContent-root": {
            marginTop: "5px!important",
            zIndex: 2,
            "& .MuiFormControl-root": {
              "& .MuiInputBase-root-MuiOutlinedInput-root": {
                backgroundColor: "blue",
              },
              "& . MuiInputBase-root": {
                width: 740,
                height: "100px!important",
                backgroundColor: "blue!important",

                "& .MuiOutlinedInput-root": {},
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
        "& .MuiDialogContent-root ": {
          marginTop: "5px!important",
        },
      },
    },
    "& div.MuiDialog-paper": {
      width: "860px!important",
      minHeight: 375,
      height: "max-content",

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
        direction: "ltr",
        textAlign: "start",
        paddingBottom: 0,

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

      "& div.MuiDialogContent-root": {
        "& p": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          fontSize: theme.globals.fontSize.xs + 2,
          color: theme.globals.colors.gray,
          textAlign: "start",

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
          border: "1px solid rgba(0, 0, 0, 0.23)",
        },

        "& div.MuiDialogActions-root": {
          marginTop: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          direction: `${theme.direction}!important`,
          padding: "0px!important",
          "& button": {
            width: 120,
            height: "40px",
            border: "1px solid",
            boxShadow: "none",
            alignItems: "center",
            background:
              theme.palette.type === "dark"
                ? theme.globals.colors.field
                : theme.palette.primary.main,

            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            fontSize: theme.globals.fontSize.xxs,
            color: theme.palette.background.default,
            borderRadius: "50px",
            "&:hover": {
              color:
                theme.palette.type === "dark"
                  ? `${theme.globals.colors.field}!important`
                  : `${theme.palette.primary.main}!important`,
              background: theme.palette.background.default,
            },
          },
          cursor: "pointer",
          borderRadius: 8,

          "& span.MuiButton-label": {
            color: "red",
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
            paddingLeft: theme.direction === "rtl" ? 0 : 8,
            paddingRight: theme.direction === "rtl" ? 8 : 0,
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
  titleBox: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: theme.globals.fontSize.title,
    color: theme.globals.colors.red,
    cursor: "pointer",
  },
  textField: {
    direction: `${theme?.direction}!important`,
    background:
      theme.palette.type === "dark"
        ? theme.globals.colors.card
        : theme.palette.background.default,
    "& .MuiInputBase-root": {
      "& .MuiInputBase-input": {
        color: theme.palette.type === "dark" && theme.globals.colors.field,
      },
      // "& >fieldset": {
      //   border: "none!important",
      // },
    },
    "& .Mui-error": {
      color: "#d32f2f!important",
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
}));

export default useDialogStyles;
