import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.globals.colors.footer,
    direction: `${theme?.direction}!important`,
    paddingTop: "40px",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  head: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.white}!important`,
    fontSize: `${theme.globals.fontSize.m}px!important`,
    margin: "10px 0!important",
  },
  contactBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "0 40px",
  },
  socialBox: {
    display: "flex",
    margin: "20px 0",
  },
  icon: {
    color: "white",
    fontSize: theme.globals.fontSize.title,
    margin: "0 10px",
  },
  copyrights: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.white}!important`,
    fontSize: `${theme.globals.fontSize.s - 2}px!important`,
  },
  text: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.white}!important`,
    fontSize: `${theme.globals.fontSize.m}px!important`,
    margin: "20px 0!important",
    borderBottom: `1px solid ${theme.globals.colors.white} `,
  },
  mainTilte: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.white}!important`,
    fontSize: `${theme.globals.fontSize.medium}px!important`,
  },
  intro: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.white}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    margin: "20px 0!important",
  },
  footerBox: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    minHeight: 320,
    borderRadius: 40,
    [theme.breakpoints.down(600)]: {
      borderRadius: 0,
    },
  },
  boxRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff!important",
  },
  imageBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    width: "100%",
    height: "100%",
  },
  gridLink: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
