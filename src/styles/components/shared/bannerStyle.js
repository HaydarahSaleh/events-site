import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundSize: "cover",
    objectFit: "cover",
    display: "flex!important",
    overflow: "hidden",
    maxWidth: "100%",

    height: "auto!important",
    // marginTop: "40px!important",
    minHeight: "500px!important",
    flexDirection: "column",
    [theme.breakpoints.down(900)]: {
      minHeight: "400px!important",
    },
  },
  border: {
    borderRight: "1px solid!important",
  },
  pageTitlebox: {
    display: "grid",
    alignSelf: "center",
    width: "670px",
    height: "280px",
    position: "absolute",
    bottom: "0px",
    backgroundImage: "url(/assets/images/home/banner.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down(900)]: {
      width: "390px",
      height: "175px",
    },
  },
  pageRate: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: "15px 0",
    [theme.breakpoints.down(500)]: {
      display: "block",
    },
    "& .ratingNBtns": {
      "& .rating": {
        marginRight: 15,
        "& span": {
          [theme.breakpoints.down(700)]: {
            fontSize: theme.globals.fontSize.s,
          },
        },
      },
      "& .btns": {
        "& .MuiButtonGroup-grouped:not(:last-of-type)": {
          border: "none",
        },
        "& button:first-child": {
          border: "none",
        },
        "& .MuiPopper-root": {
          backgroundColor: `${theme.globals.colors.card}!important`,
        },
        "& .MuiPaper-root ": {
          backgroundColor: `${theme.globals.colors.card}!important`,
        },
      },
    },
  },
  pageTitle: {
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    color: `${theme.palette.primary.main}`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    fontSize: `${theme.globals.fontSize.g - 4}px!important`,
    marginBottom: "1%!important",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "capitalize",
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.m + 2}px!important`,
    },
  },
  printBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  crumb: {
    display: "flex!important",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down(600)]: {
      display: "flex",
      width: "100%",
      flexDirection: "column-reverse",
      alignItems: "start",
      paddingTop: 10,
    },
    "& .image-to-print": {
      display: "none",
    },
    "&  .btns": {
      position: "relative",
      borderRadius: 0,
      display: "flex",
      [theme.breakpoints.down(340)]: {
        paddingLeft: 30,
      },
      [theme.breakpoints.down(280)]: {
        paddingLeft: 5,
      },
      "& .MuiPopperUnstyled-root": {
        "& .MuiPaper-root": {
          backgroundColor: "none",
          boxShadow: "none",
          "& .MuiList-root": {
            boxShadow: "none",
            color: "black",
            "& .MuiButtonBase-root": {
              background: "none",
              display: "flex",
              justifyContent: "center",
              paddingBottom: 5,
              width: 50,
              border: "none",
              color: theme.palette.primary.main,
              "& a": {
                fontSize: theme.globals.fontSize.xxs - 2,
                fontWeight: theme.globals.fontWeight.xs,
                paddingLeft: 4,
              },
              "& svg": {
                color: theme.palette.primary.main,
                fontSize: theme.globals.fontSize.s,
              },
            },
          },
        },
      },

      "& .MuiMenuItem-root": {
        background: "none",
      },
      "& .MuiButtonGroup-root": {
        boxShadow: "none",
        "& .MuiButtonBase-root": {
          background: "none",
          color:
            theme.palette.type === "dark"
              ? theme.globals.colors.darkBlack
              : theme.palette.primary.main,
          borderRadius: 0,
          padding: 1,
          justifyContent: "center",
          "& .socialLink": {
            fontSize: `${theme.globals.fontSize.m + 4}px!important`,
            height: 30,
            width: 30,
          },
          "& > .socialIcon": {
            fontSize: `${theme.globals.fontSize.m + 4}px!important`,
          },
          "& svg": {
            fontSize: theme.globals.fontSize.s,
            color:
              theme.palette.type === "dark"
                ? theme.globals.colors.darkBlack
                : theme.palette.primary.main,
          },
          "& > .sharing": {
            borderRadius: 0,
          },
        },
        "& .menu": {
          width: "42px",
        },
      },
    },
    "& .ratingNBtns": {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down(600)]: {
        flexDirection: "column-reverse",
        alignItems: "start",
      },
      [theme.breakpoints.down(500)]: {
        flexDirection: "row-reverse",
        alignItems: "start",
      },
      [theme.breakpoints.down(400)]: {
        marginTop: 16,
      },
      "& . MuiButtonGroup-root": {
        padding: 1,
      },
    },
    "& .MuiBreadcrumbs-ol ": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textTransform: "capitalize",
      "& .MuiBreadcrumbs-li": {
        [theme.breakpoints.down(700)]: {
          fontSize: theme.globals.fontSize.s,
        },
        "& a": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          fontSize: theme.globals.fontSize.s,
          color: `${theme.globals.colors.darkBlack}!important`,
          [theme.breakpoints.down(990)]: {
            fontSize: theme.globals.fontSize.sm,
          },
          [theme.breakpoints.down(700)]: {
            fontSize: theme.globals.fontSize.xs,
          },
        },
        "& svg": {
          [theme.breakpoints.down(700)]: {
            fontSize: theme.globals.fontSize.xs,
          },
        },
      },
      "& .MuiBreadcrumbs-separator": {
        color: `${theme.globals.colors.darkBlack}!important`,
      },
      "& >li:nth-last-child(1)": {
        "& a": {
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          fontSize: theme.globals.fontSize.s - 2,
          color: `${theme.palette.secondary.main}!important`,
          pointerEvents: "none!important",
          [theme.breakpoints.down(990)]: {
            fontSize: theme.globals.fontSize.sm,
          },
          [theme.breakpoints.down(700)]: {
            fontSize: theme.globals.fontSize.xs,
          },
        },
      },
    },
  },
  crumbDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    zIndex: 64,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    fontSize: theme.globals.fontSize.l,
    color: theme.palette.primary.main,

    "& .MuiTypography-root >.MuiBreadcrumbs-ol > ": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      fontSize: theme.globals.fontSize.l,
      color: theme.palette.primary.main,
    },
  },
}));
export default useStyles;
