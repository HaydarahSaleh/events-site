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

    [theme.breakpoints.down(1220)]: {
      width: "320px!important",
      height: "200px!important",
    },
    [theme.breakpoints.down(1070)]: {
      width: "360px!important",
      height: "200px!important",
    },

    [theme.breakpoints.down(840)]: {
      width: "320px!important",
      height: "200px!important",
    },
    [theme.breakpoints.down(750)]: {
      width: "280px!important",
      height: "175px!important",
    },
    [theme.breakpoints.down(665)]: {
      width: "360px!important",
      height: "200px!important",
    },
    [theme.breakpoints.down(450)]: {
      width: "280px!important",
      height: "175px!important",
    },
    [theme.breakpoints.down(350)]: {
      height: "160px!important",
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
    display: "-webkit-inline-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
  },
  date: {
    color: `${theme.globals.colors.gray}!important`,
    fontSize: `${theme.globals.fontSize.m}px!important`,
  },
}));

export default useStyles;
