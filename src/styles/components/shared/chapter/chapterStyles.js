import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  homePageBtn: {
    width: "100%",
    height: "60px",
    borderRadius: "50px!important",
    background: theme.globals.colors.white,
    textTransform: "capitalize!important",
    display: "flex",
    alignItems: "center",
    zIndex: 100,
    [theme.breakpoints.down(800)]: {
      height: 45,
    },

    "& >span": {
      padding: "0px 4px",
      color:
        theme.palette.type === "dark"
          ? `${theme.globals.colors.field}!important`
          : `${theme.globals.colors.black}!important`,
      fontSize: `${theme.globals.fontSize.sm + 2}px`,
      fontWeight: theme.globals.fontWeight.m,
      textTransform: "capitalize!important",
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      // marginBottom: 4,
      [theme.breakpoints.down(500)]: {
        fontSize: `${theme.globals.fontSize.sm}px`,
      },
    },
    "& >svg": {
      color:
        theme.palette.type === "dark"
          ? `${theme.globals.colors.white}!important`
          : `${theme.palette.primary.main}!important`,
      fontSize: `${theme.globals.fontSize.sm + 4}px`,
    },
  },

  buttonBox: {
    display: "flex",
    justifyContent: "flex-start",
    marginBlockStart: "30px",
    position: "relative",
    width: "fit-content",
    transition: "all 1.5s ease",
    "&::before": {
      content: "''",
      position: "absolute",
      left: "0",
      right: 0,
      width: "0%",
      height: "100%",
      zIndex: 2,
      // width: "0%",
      // height: "100%",
      // zIndex: 2,
      // transition: "all 1.5s ease",
      // border: `3px solid ${theme.globals.colors.transparent}`,
      // outline: `1px solid ${theme.globals.colors.transparent}`,
      // left: "0",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      background: "#fff",
      height: 155,
      left: "-75px",
      opacity: "0.2",
      top: "-50px",
      // transform: "rotate(35deg)",
      transition: "all 1.5s cubic-bezier(0.19, 1, 0.22, 1)",
      width: 50,
      zIndex: "-10",
    },
    "&:hover": {
      "&::before": {
        animation: "$animat forwards   0.5s ease",
        // // animationIterationCount: "1",
        // width: "100%",
        // height: "100%",
        // zIndex: "2",
        // left: "0",
        // border: `3px solid ${theme.globals.colors.white}`,
        // outline: `1px solid ${theme.globals.colors.primary}`,
        // borderRadius: "50px",
      },
      "&::after": {
        left: "120%",
        transition: "all 1.5s cubic-bezier(0.19, 1, 0.22, 1)",
        zIndex: 30,
      },
    },
    "& .MuiTouchRipple-root": {
      zIndex: 20,
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down(1000)]: {
        width: "120px",
        height: "55px",
      },
      [theme.breakpoints.down(500)]: {
        width: "100px",
        height: "35px",
      },
    },
  },
  marginBox: {
    marginTop: "1.5%",

    [theme.breakpoints.between(700, 1200)]: {
      marginTop: "7%",
    },
    [theme.breakpoints.down(500)]: {
      marginTop: "18%",
    },
    [theme.breakpoints.between(500, 700)]: {
      marginTop: "13%",
    },
  },
  smallMargin: {
    [theme.breakpoints.up(1500)]: {
      marginTop: "2%",
    },

    [theme.breakpoints.between(700, 1200)]: {
      marginTop: "3%",
    },

    [theme.breakpoints.between(500, 700)]: {
      marginTop: "6%",
    },
    [theme.breakpoints.down(500)]: {
      marginTop: "8%",
    },
  },
  rootOther: {
    paddingBlock: 12,
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    [theme.breakpoints.down(600)]: {
      padding: 0,
    },
  },
  rootHome: {
    paddingBlock: 40,
    "& > div div": {
      [theme.breakpoints.down(600)]: {
        marginBottom: "0!important",
        marginLeft: "0px!important",
      },
    },
  },
  root: {
    maxWidth: "1440px!important",
    zIndex: 2,
    position: "relative",
    // "& *": {
    //   fontFamily:
    //     theme.direction === "rtl"
    //       ? `${theme.globals.fontFamily.ar}`
    //       : `${theme.globals.fontFamily.en}`,
    // },
  },

  text: {
    fontSize: theme.globals.fontSize.sm + 2,
  },
  margin: {
    marginTop: 20,
  },
  icon: {
    color: `${theme.globals.colors.gray}!important`,
  },
  chapterTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: "55px",
    [theme.breakpoints.down(900)]: {
      paddingLeft: "9px",
      alignItems: "baseline",
    },
    [theme.breakpoints.down(600)]: {
      paddingLeft: "9px",
      alignItems: "baseline",
    },
    "& h2": {
      // fontSize: `${theme.globals.fontSize.icon + 1}px`,
      fontSize: theme.globals.fontSize.title + 8,
      color: `${theme.globals.colors.darkBlack}!important`,
      textAlign: "center",
      fontWeight: `${theme.globals.fontWeight.lg}!important`,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      [theme.breakpoints.between(400, 800)]: {
        fontSize: theme.globals.fontSize.lg,
      },
      [theme.breakpoints.down(400)]: {
        fontSize: theme.globals.fontSize.lg,
        textAlign: "start",
      },
    },
  },
  noMargin: {
    "& form": {
      marginTop: 0,
      marginBottom: 15,
    },
  },
  subTitle: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "10px",
    "& p": {
      fontSize: theme.globals.fontSize.lg + 2,
      color: theme.globals.colors.gray,
      fontWeight: theme.globals.fontWeight.m,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      textAlign: "justify",
      maxWidth: "100%",
      marginTop: 8,
      lineHeight: 1.8,
      // [theme.breakpoints.up(1200)]: {
      //   width: "71%",
      // },
    },

    [theme.breakpoints.between(500, 600)]: {
      "& p": {
        fontSize: theme.globals.fontSize.title - 4,
      },
    },

    [theme.breakpoints.down(900)]: {
      "& p": {
        marginTop: "15px",
        maxWidth: "100%",
      },
    },
    [theme.breakpoints.down(500)]: {
      "& p": {
        fontSize: theme.globals.fontSize.sm + 2,
        marginTop: "15px",
      },
    },
    [theme.breakpoints.between(500, 900)]: {
      "& p": {
        fontSize: theme.globals.fontSize.sm + 3,
      },
    },
    [theme.breakpoints.between(900, 1200)]: {
      "& p": {
        fontSize: theme.globals.fontSize.sm + 4,
        padding: 16,
      },
    },
  },
}));
export default useStyles;
