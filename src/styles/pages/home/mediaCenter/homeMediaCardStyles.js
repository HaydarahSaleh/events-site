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
    border: "1px solid ",
    height: 515,
    width: "380px",
    boxShadow: "none!important",
    position: "relative",
    backgroundColor:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.card}!important`
        : "rgba(255, 255, 255, 0.43)!important",
    cursor: "Pointer",
    display: "flex",
    flexDirection: "column",
    borderRadius: "40px 40px 240px 240px !important",
    borderColor: `${theme.globals.colors.black}!important`,
    marginTop: "20px!important",
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

    "& .MuiCardMedia-root": {
      borderRadius: 218,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      paddingBottom: "0!important",
      [theme.breakpoints.down(680)]: {
        paddingBottom: "0!important",
      },
    },
    "& a": {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  ImageBox: {
    height: "100%",
    width: "100%!important",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
}));

export default useStyles;
