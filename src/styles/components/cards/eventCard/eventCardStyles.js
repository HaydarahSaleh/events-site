import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  "& *": {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
  },
  root: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
  },

  card: {
    direction: `${theme?.direction}!important`,
    border: "1px solid blue",
    height: 175,
    width: "280px",
    boxShadow: "none!important",
    position: "relative",
    backgroundColor: `${theme.globals.colors.field}!important`,
    cursor: "Pointer",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px !important",
    "& .MuiCardMedia-root": {
      width: "100%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      padding: 10,
    },
    [theme.breakpoints.down(1300)]: {
      width: "300px!important",
      height: "440px!important",
    },
    [theme.breakpoints.down(1200)]: {
      width: "340px!important",
      height: "490px!important",
    },
    [theme.breakpoints.down(900)]: {
      width: "280px!important",
      height: "440px!important",
    },
    [theme.breakpoints.down(330)]: {
      width: "250px!important",
    },
  },
  imageBox: {
    height: "80px",
    width: "80px",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  title: {
    color: `${theme.globals.colors.black}!important`,
    fontSize: `${theme.globals.fontSize.m}px!important`,
  },
  date: {
    color: `${theme.globals.colors.gray}!important`,
    fontSize: `${theme.globals.fontSize.m}px!important`,
  },
}));

export default useStyles;
