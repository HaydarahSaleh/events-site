import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    marginTop: 210,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #F0F0F0",
    paddingBottom: 24,
  },
  widther: {
    width: "250px!important",
  },
  errorImage: {
    height: "194px!important",
    [theme.breakpoints.down(450)]: {
      height: "100px!important",
    },
  },
  errorSecondImage: {
    height: "375px!important",
    marginTop: 32,
    [theme.breakpoints.down(450)]: {
      height: "140px!important",
    },
  },
  title: {
    fontSize: `${theme.globals.fontSize.g}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    color: `${theme.palette.primary.main}!important`,
    textAlign: "center",
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.g - 8}px!important`,
    },
  },
  buttonBox: {
    [theme.breakpoints.down(1250)]: {
      justifyContent: "center",
      display: "flex",
      marginTop: 16,
    },
  },
  btnBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(1250)]: {
      display: "block",
    },
  },
  descriptionError: {
    left: theme.direction === "rtl" ? "95px" : "inherit",
    right: theme.direction === "rtl" ? "inherit" : "95px",
    color: "red",
    width: 800,
    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center!important",
    [theme.breakpoints.down(1250)]: {
      width: "500px",
    },
    [theme.breakpoints.down(1200)]: {
      width: "350px",
    },
    [theme.breakpoints.down(900)]: {
      width: "300px",
    },
    [theme.breakpoints.down(750)]: {
      width: "280px",
    },
    "& .message": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      fontSize: `${theme.globals.fontSize.g}px`,
      color: `${theme.globals.colors.black}!important`,
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "4",
      [theme.breakpoints.down(1250)]: {
        fontSize: theme.globals.fontSize.m + 4,
      },
      [theme.breakpoints.down(1200)]: {
        fontSize: theme.globals.fontSize.m,
      },
      [theme.breakpoints.down(1100)]: {
        fontSize: theme.globals.fontSize.m - 2,
      },
      [theme.breakpoints.down(900)]: {
        fontSize: theme.globals.fontSize.sm,
      },
    },
    "& form": {
      display: "flex!important",
      justifyContent: "center!important",
      paddingTop: 10,
    },
  },
  btnError: {
    width: 235,
    height: 55,
    border: "1px solid",
    borderRadius: "50px",
    borderColor: theme.globals.colors.golden,
    background: "rgba(197, 160, 96, 0.2)",
    "& .MuiTypography-root": {
      color: `${theme.globals.colors.black}!important`,
      fontFamily: `${theme.globals.fontFamily.ar}!important`,
      [theme.breakpoints.down(900)]: {
        fontSize: theme.globals.fontSize.sm - 2,
      },
      [theme.breakpoints.down(750)]: {
        fontSize: theme.globals.fontSize.xxs,
      },
    },
    color: `${theme.globals.colors.golden}!important`,
    [theme.breakpoints.down(1250)]: {
      width: 200,
      height: 55,
    },
    [theme.breakpoints.down(1200)]: {
      width: 180,
      height: 45,
    },
    [theme.breakpoints.down(1100)]: {
      width: 160,
      height: 40,
    },
    [theme.breakpoints.down(900)]: {
      width: 130,
      height: 35,
    },
  },
  error: {
    padding: 15,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    "& .MuiGrid-root": {
      maxWidth: 1400,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      "& .MuiGrid-item": {},
    },
  },
}));

export default useStyles;
