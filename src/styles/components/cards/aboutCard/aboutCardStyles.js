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
    height: 510,
    width: "290px",
    boxShadow: "none!important",
    position: "relative",
    backgroundColor:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.card}!important`
        : "rgba(255, 255, 255, 0.43)!important",
    cursor: "Pointer",
    display: "flex",
    flexDirection: "column",
    borderRadius: "50px 50px 300px 300px !important",
    "& .MuiCardMedia-root": {
      height: "100%",
      width: "100%",
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
    height: "100%",
    width: "100%",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
}));

export default useStyles;
