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
    height: "320px!important",
    width: "100%!important",
    maxWidth: "100%!important",
    minWidth: "100%!important",
    position: "relative",
    border: `1px solid ${theme.globals.colors.border}!important`,
    display: "flex",
    flexDirection: "column",
    boxShadow: "unset!important  ",
    cursor: "Pointer",
    marginBlock: "20px!important",
    borderRadius: "8px!important",
    backgroundColor:
      theme.palette.type !== "dark"
        ? `${theme.palette.primary.main}!important`
        : `${theme.globals.colors.card}!important`,
    "& a": {
      height: "100%",
    },
    [theme.breakpoints.down(1330)]: {
      width: "350px!important",
    },
    [theme.breakpoints.down(1170)]: {
      width: "300px!important",
    },
    [theme.breakpoints.down(1050)]: {
      width: "280px!important",
    },
    [theme.breakpoints.down(900)]: {
      width: "350px!important",
    },
    "&:hover": {
      "& .MuiCardMedia-root ": {
        "& div": {
          transform: "translateY(-100px)",
          transition: ".8s ease",
        },
      },
      "& .MuiCardContent-root ": {
        transform: "translateY(120px)",
        transition: ".8s ease",
      },
      "& .MuiCardActions-root": {
        transform: " translateY(-10px) scale(1.1)",
        transition: ".8s ease",
      },
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    "& .MuiCardMedia-root": {
      width: "100%!important",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    fontSize: `${theme.globals.fontSize.s + 2}px!important`,
    fontWeight: "600!important",
    color: `${theme.globals.colors.field}!important`,
    textAlign: "center",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%!important",
    position: "absolute",
    bottom: 0,
    transition: ".8s ease",
    "& a": {
      width: "50%!important",
      display: "flex",
      justifyContent: "center",
    },
    "& button": {
      width: "50%!important",
      fontWeight: `${theme.globals.fontWeight.l}!important`,
      fontSize: `${theme.globals.fontSize.s}px!important`,
      color: `${theme.globals.colors.field}!important`,
      textTransform: "capitalize!important",
      [theme.breakpoints.down(900)]: {
        fontSize: `${theme.globals.fontSize.s - 1}px!important`,
      },
      [theme.breakpoints.down(500)]: {
        fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      },
      [theme.breakpoints.down(360)]: {
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
    },
    "& div:first-of-type": {
      "&:before": {
        left: 0,
        top: 0,
        width: 56,
        height: 4,
        content: "''",
        position: "absolute",
      },
      //   borderRight: "1px solid",
      //   borderRadius: "unset!important",
      //   borderColor: `${theme.globals.colors.lightBorder}!important`,
    },
  },
  iconBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%!important",
    zIndex: 5,
  },
  icon: {
    fontSize: `${theme.globals.fontSize.m + 4}px!important`,
    color: `${theme.globals.colors.field}!important`,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px!important",
    width: "50%",
    alignItems: "center",
    transition: ".8s ease",
    marginTop: 10,
  },
  ImageBox: {
    position: "absolute",
    transition: ".5s ease",
    top: "-55%",
    "& img": {
      transform: "scale(1.5)",
      opacity: 0.5,
    },
  },
}));

export default useStyles;
