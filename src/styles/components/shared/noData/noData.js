import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardText: {
    fontSize:
      theme.direction === "rtl"
        ? `${theme.globals.fontSize.s - 2}px!important`
        : `${theme.globals.fontSize.s}px!important`,
    [theme.breakpoints.down(600)]: {
      fontSize:
        theme.direction === "rtl"
          ? `${theme.globals.fontSize.s - 4}px!important`
          : `${theme.globals.fontSize.s - 2}px!important`,
    },
  },
  morePaddingTop: {
    paddingTop: "41px!important",
  },
  containerWithPadding: {
    paddingTop: "41px!important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",

    width: "100%",
    minWidth: "100%",
    "& img": {
      maxWidth: "60%",
    },
  },
  textGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    width: "100%",
    textAlign: "center",
    fontSize:
      theme.direction === "rtl"
        ? theme.globals.fontSize.lg - 2
        : theme.globals.fontSize.lg,
    color:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.field}!important`
        : `${theme.palette.primary.main}!important`,
    fontWeight: "700",
    paddingTop: 16,
    minHeight: 110,
    [theme.breakpoints.down(600)]: {
      fontSize:
        theme.direction === "rtl"
          ? theme.globals.fontSize.s
          : theme.globals.fontSize.s + 2,
    },
  },
  noSearchDataText: {
    fontFamily:
      theme.direction === "rtl"
        ? theme.globals.fontFamily.ar
        : theme.globals.fontFamily.en,
    textAlign: "start",
    fontSize: `${theme.globals.fontSize.g}px!important`,
    color:
      theme.palette.type === "dark"
        ? theme.globals.colors.field
        : theme.palette.primary.main,
    fontWeight: "700!important",
    paddingTop: 16,
    minHeight: 110,
    position: "absolute",
    width: "35%",
    left: "20%",
    top: "57%",
    maxWidth: "100%",
    [theme.breakpoints.down(1200)]: {
      top: "50%",
    },
    [theme.breakpoints.down(990)]: {
      fontSize: `${theme.globals.fontSize.title}px!important`,
      top: "45%",
    },
    [theme.breakpoints.down(750)]: {
      fontSize: `${theme.globals.fontSize.awarenessTitle}px!important`,
      top: "40%",
    },
    [theme.breakpoints.down(600)]: {
      fontSize: `${theme.globals.fontSize.m}px!important`,
      top: "45%",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.s}px!important`,
      width: "35%",
      top: "46%",
    },
    [theme.breakpoints.down(400)]: {
      top: "47%",
    },
    [theme.breakpoints.down(340)]: {
      top: "49%",
    },
  },
}));

export default useStyles;
