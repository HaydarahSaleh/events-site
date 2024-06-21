import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative!important",
    margin: "0px!important",
    direction: `${theme.direction}!important`,
    padding: `${theme.spacing(2)}!important`,
    minWidth: "300px!important",
    [theme.breakpoints.down(340)]: {
      minWidth: "auto!important",
    },
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  black: {
    color: `${theme.globals.colors.black}!important`,
  },
  white: {
    color: `${theme.globals.colors.white}!important`,
  },
  block: {
    display: "flex",
    width: "100%",
    flexDirection: `${
      theme.direction === "rtl" ? "row-reverse" : "row"
    }!important`,
    [theme.breakpoints.down(600)]: {
      display: "block",
    },
  },
  DialogWrap: {
    "& div >div.MuiDialog-paper": {
      width: "500px",
      borderRadius: 20,
      padding: "10px",
      backgroundColor: `${theme.globals.colors.card}!important`,
    },
    [theme.breakpoints.down(414)]: {
      "& div >div.MuiDialog-paper": {
        margin: "10px!important",
      },
    },
  },
  closeButton: {
    width: "35px!important",
    height: "35px!important",
    borderRadius: "20px!important",
    zIndex: 9,
    backgroundColor: `${theme.palette.primary.main}!important`,
    position: "absolute!important",
    right: `${theme.spacing(2)}!important`,
    top: "0px!important",
    color: `${theme.globals.colors.field}!important`,
    "&:hover": {
      backgroundColor: `${theme.globals.colors.field}!important`,
      color: `${theme.palette.primary.main}!important`,
      border: `1px solid ${theme.palette.primary.main}!important`,
    },
    "& svg": {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    },
  },
  rootTitle: {
    position: "absolute",
    left: `${theme.spacing(2)}!important`,
    top: "4px!important",
    color: `${theme.globals.colors.black}!important`,
    fontSize: `${theme.globals.fontSize.m}px!important`,
    fontWeight: "normal!important",
    [theme.breakpoints.down(400)]: {
      fontSize: `${theme.globals.fontSize.s}px!important`,
    },
  },
  DialogContent: { padding: `${theme.spacing(2)}!important` },

  divider: {
    margin: "0 10px",
  },
  fontButtonsWrap: {
    display: "flex!important",
    justifyContent:
      theme.direction === "ltr" ? "flex-start!important" : "flex-end!important",
    marginInline: "0px!important",
    marginBlockStart: "10px!important",
    marginBlockEnd: "0px!important",
  },
  fontButtons: {
    backgroundColor: `${theme.palette.primary.main}!important`,
    minWidth: "34px!important",
    padding: "3px 8px!important",
    marginBlock: "0px!important",
    marginInlineEnd: "10px!important",
    marginInlineStart: "0px!important",
    color: `${theme.globals.colors.field}!important`,
    border: `1px solid ${theme.palette.primary.main}!important`,
    "&:hover": {
      backgroundColor: `${theme.globals.colors.field}!important`,
      color: `${theme.palette.primary.main}!important`,
      border: `1px solid ${theme.palette.primary.main}!important`,
    },
  },
  marginBottom16: {
    [theme.breakpoints.down(600)]: {
      marginBottom: 16,
    },
  },
  marginLeft16: {
    [theme.breakpoints.down(600)]: {
      marginLeft: 16,
    },
  },
  google: {
    paddingTop: "16px!important",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    "& span > div": {
      display: theme.direction === "ltr" ? "block!important" : "flex!important",
    },
  },
  marginBottom8: {
    [theme.breakpoints.down(600)]: {
      marginBottom: "8!important",
    },
  },
  colorButtonsWrap: {
    display: "flex!important",
    justifyContent: "flex-end!important",
    fontSize: `${theme.globals.fontSize.m}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    alignItems: "center!important",
    flexFlow:
      theme.direction === "ltr"
        ? "row-reverse nowrap!important"
        : "row nowrap!important",
    [theme.breakpoints.down(600)]: {
      maxWidth: "100%!important",
    },
  },
  colorName: {
    textTransform: "capitalize!important",
    boxShadow: "none!important",
    fontSize: `${theme.globals.fontSize.s}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    cursor: "pointer!important",
    color: `${theme.globals.colors.black}!important`,
    minWidth: 130,
    [theme.breakpoints.down(400)]: {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    },
  },
  colorButtons: {
    marginBlock: `${theme.spacing(1.2)}!important`,
    marginInline:
      theme?.direction === "rtl"
        ? `${theme.spacing(1, 0)}!important`
        : `${theme.spacing(0, 1)}!important`,
    boxShadow: "none!important",
    minWidth: "20px!important",
    borderRadius: "50%!important",
    width: "20px!important",
    height: "20px!important",
    padding: "0px!important",
  },
  bgGold: {
    backgroundColor: "#C79D65",
    "&:hover": {
      backgroundColor: "#f3bf7b",
    },
  },
  colorDarkMode: {
    width: "40px!important",
    height: "40px!important",
    borderRadius: "20px!important",
    backgroundColor: "gainsboro!important",
    color: `${theme.globals.colors.white}!important`,
    marginBlock: `${theme.spacing(1.2)}!important`,
    marginInline:
      theme?.direction === "rtl"
        ? `${theme.spacing(1, 0)}!important`
        : `${theme.spacing(0, 1)}!important`,
    "&:hover": {
      backgroundColor: "#bbb9b9!important",
    },
  },
  reverse: {
    flexDirection:
      theme.direction === "rtl" ? "row-reverse!important" : "row!important",
  },
}));
export default useStyles;
