import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tabStyle: {
    textTransform: "capitalize",
  },
  tabss: {
    "& .MuiBox-root": {
      padding: "0px!important",
      // backgroundColor: "red",
    },
  },
  mediaHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  },
  MediaCenterCard: {
    direction: `${theme.direction}!important`,
    width: "430px",
    margin: "12px",
    height: 460,
    position: "relative",
    boxShadow: "none",
    filter: " drop-shadow(0px 0 18px rgb(0 0 0 / 8%))",
    transform: "scale(1)",
    transition: "all 200ms ease-in-out",
    border: "none",
    borderRadius: "12px",
    overflow: "hidden",
    borderRadius: "12px",
    padding: "33px 33px 10px 33px ",

    [theme.breakpoints.down(1410)]: {
      width: 400,
    },

    [theme.breakpoints.down(1350)]: {
      width: 350,
      height: 400,
    },

    [theme.breakpoints.down(1200)]: {
      width: 320,
      height: 380,
      padding: "20px 20px 10px 20px ",
    },
    [theme.breakpoints.down(1100)]: {
      width: 310,
    },
    [theme.breakpoints.down(1090)]: {
      width: "430px",
      height: 460,
      padding: "33px 33px 10px 33px ",
    },
    [theme.breakpoints.down(1027)]: {
      width: 390,
      height: 415,
    },
    [theme.breakpoints.down(960)]: {
      width: 350,
      height: 400,
    },
    [theme.breakpoints.down(870)]: {
      width: 320,
      height: 380,
      padding: "20px 20px 10px 20px ",
    },
    [theme.breakpoints.down(450)]: {
      width: 300,
    },
    [theme.breakpoints.down(420)]: {
      width: 280,
    },
    [theme.breakpoints.down(395)]: {
      width: 260,
      height: 360,
    },

    [theme.breakpoints.down(378)]: {
      width: 250,
      padding: "10px 8px",
      height: 350,
    },
    [theme.breakpoints.down(360)]: {
      width: 230,
    },
    [theme.breakpoints.down(345)]: {
      width: 210,
      height: 315,
    },
    "&:after": {
      width: "195px",
      height: "64px",
      margin: "auto",
      content: '""',
      background: "no-repeat",
      backgroundSize: "contain",
      left: "-14px",
      top: "30px",
      position: "absolute",
      marginRight: "-11px",
      backgroundImage: `url(/assets/images/assetRed.png)`,
      transform: theme.direction === "rtl" ? "rotateY(180deg)" : "inherit",
      [theme.breakpoints.down(1350)]: {
        width: "180px",
      },
      [theme.breakpoints.down(1200)]: {
        top: "6px",
      },

      [theme.breakpoints.down(1140)]: { width: 180 },
      [theme.breakpoints.down(1090)]: {
        left: "0px",
      },
      [theme.breakpoints.down(380)]: {
        width: 160,
      },
      [theme.breakpoints.down(345)]: {
        width: 148,
      },
    },
    "& .cardContent": {
      [theme.breakpoints.down(345)]: {
        padding: 8,
      },
    },

    "& .cardDetails": {
      minHeight: "450px",
    },
    "& .date": {
      color: "#fff",
      wordSpacing: 15,
      width: "100%",
      left: "0px",
      display: "flex",
      position: "sticky",
      zIndex: "60",
      marginBottom: "-25px",
      marginLeft: "-20px",
      top: "16px",
      marginTop: "10px",
      fontSize: theme.globals.fontSize.xs,
    },
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)!important",
    },
  },

  root: {
    padding: "0px!important",

    width: "100%",

    direction: `${theme?.direction}!important`,
    "& .slick-initialized .slick-slide": {
      display: "flex",
      justifyContent: "center",
      // },
    },
    "& .mainSlider": {
      position: "relative",

      "& .slick-track": {
        marginBottom: "8px",
        display: "flex!important",
        justifyContent: "center",
        alignItems: "center",
      },
      "& > button > svg": {
        width: "30px!important",
        height: "30px!important",
        cursor: "pointer",
        color: `${theme.palette.primary.main}!important`,
      },
      "& .prev": {
        left: "-20px",
        position: "absolute",
        top: "45%",
        border: "none",
        background: "none!important",
        color: `${theme.palette.primary.main}!important`,
      },
      "& .next": {
        right: "-20px",
        position: "absolute",
        background: "none",
        top: "45%",
        border: "none",
        color: `${theme.palette.primary.main}!important`,
      },
    },

    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  end: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  boxContainer: {
    paddingBottom: "30px!important",
    direction: `${theme?.direction}!important`,
    backgroundColor: theme.globals.colors.white,
    "& .MuiLink-root": {
      "& .buttonBox": {
        display: "flex!important",
        justifyContent: "flex-end!important",
      },
    },

    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },

  mediaContainer: {
    width: "100%",
    "& .MuiTabs-scrollButtons": {
      "& .MuiSvgIcon-root": {
        fontSize: "35px!important",
        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
      },
    },
    [theme.breakpoints.down(650)]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  tabBarBox: {
    width: "500px",
    [theme.breakpoints.down(850)]: {
      width: "560px",
    },
    [theme.breakpoints.down(780)]: {
      display: "flex",
      justifyContent: "center",
      marginTop: "12px",
    },
    [theme.breakpoints.down(580)]: {
      display: "flex",
      justifyContent: "center",
      marginTop: "12px",
      width: "100%",
    },
  },
  panelBox: {
    "& label": {
      color: theme.globals.colors.black,
    },
  },
  tabLabel: {
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
  },
  MediaTitle: {
    padding: "15px 0",
    fontSize: `${theme.globals.fontSize.title}px!important`,
    [theme.breakpoints.down(1200)]: {
      fontSize: `${theme.globals.fontSize.title - 2}px!important`,
    },
    [theme.breakpoints.down(821)]: {
      fontSize: `${theme.globals.fontSize.awarenessTitle}px!important`,
    },

    color: theme.palette.primary.main,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
  },
  tabs: {
    "& .MuiTabs-scroller": {
      marginBottom: 0,
    },
    "& .MuiTabScrollButton-root": {
      alignSelf: "center!important",
      display: "block!important",

      justifyContent: "center!important",
      marginTop: "10px",
      // flex: 1,

      alignItems: "center",
      [theme.breakpoints.down(850)]: {
        opacity: 1,
      },
      "& .MuiSvgIcon-root": {
        color:
          theme.palette.type === "dark"
            ? `${theme.globals.colors.field}!important`
            : `${theme.palette.primary.main}!important`,
        fontSize: "22px!important",
        marginTop: "10px",
        [theme.breakpoints.down(580)]: {
          marginTop: "auto",
          marginBottom: 5,
        },
      },
    },
  },
  mediaTabs: {
    backgroundColor: theme.globals.colors.lightGoldCard,
    borderRadius: "10px",
    boxShadow: "none!important",
    height: "45px",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(580)]: {
      height: "40px",
      alignItems: "initial",
      justifyContent: "initial",
    },
    [theme.breakpoints.down(385)]: {
      width: "320px",
    },
    [theme.breakpoints.down(330)]: {
      width: "300px",
    },
    "& .MuiTab-textColorInherit ": {
      color: theme.globals.colors.blackCard,
      opacity: 1,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: `${theme.palette.primary.main}!important`,
      display: "none!important",
      bottom: "7px!important",
      left: "328px!important",
      width: "10%!important",
    },
    "& .MuiTabs-flexContainer": {
      maxHeight: "60px!important",
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
      height: 60,
      minHeight: 60,
    },
    "& .MuiButtonBase-root": {
      paddingTop: "0!important",
      paddingBottom: "0!important",
      maxHeight: "50px!important",
      whiteSpace: "nowrap",
      minHeight: "50px!important",
      overflow: "hidden",
      [theme.breakpoints.down(600)]: {
        fontSize: `${theme.globals.fontSize.m + 2}px!important`,
      },
      [theme.breakpoints.down(580)]: {
        maxHeight: "40px!important",

        minHeight: "40px!important",
      },
      [theme.breakpoints.down(480)]: {
        fontSize: theme.globals.fontSize.xs - 1,
      },
    },
    "& .Mui-selected": {
      maxHeight: "50px!important",
      opacity: 1,
      [theme.breakpoints.down(580)]: {
        maxHeight: "40px!important",
      },
      "&:after": {
        right: "0",
        left: "0",
        width: "40%",
        height: "3px",
        margin: "auto",
        content: '""',
        bottom: "10%",
        position: "absolute",
        backgroundColor: `${theme.palette.primary.main}`,
      },
    },
  },

  cardMedia: {},
  descBox: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    paddingTop: 20,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "4",
    fontSize: theme.globals.fontSize.s,
    color: `${theme.globals.colors.blackCard}!important`,
    [theme.breakpoints.down(821)]: {
      paddingTop: 10,
    },
    [theme.breakpoints.down(500)]: {
      fontSize: theme.globals.fontSize.s - 1,
    },
    [theme.breakpoints.down(395)]: {
      fontSize: theme.globals.fontSize.xs,
    },
  },
  link: {
    overflow: "visible",
    position: "relative",
  },
  description: {
    textDecoration: "none",
    fontSize: theme.globals.fontSize.l,
    padding: "5px 10px",
    color: `${theme.globals.colors.black}!important`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    height: 70,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,

    [theme.breakpoints.down(900)]: {
      fontSize: theme.globals.fontSize.xs,
      height: 80,
    },
  },

  button: {
    border: `1px solid ${theme.palette.primary.main}!important`,
    borderRadius: "5px",
    color: theme.palette.primary.main,
    width: "130px",
    height: 200,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
  },
  buttonBox: {
    width: "96%",
    justifyContent: "end",
    display: "flex",
    "& .MuiLink-root": {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    fontSize: theme.globals.fontSize.sm,
  },
  image: {
    height: 280,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid whitesmoke",
    borderColor: theme.globals.colors.imageBorder,
    borderRadius: 6,
    backgroundColor: "#f4f4f4",
    [theme.breakpoints.down(1410)]: {
      height: 280,
    },
    [theme.breakpoints.down(1350)]: {
      height: 230,
    },
    [theme.breakpoints.down(1230)]: {
      height: 220,
    },
    [theme.breakpoints.down(1200)]: {
      height: 200,
    },
    [theme.breakpoints.down(1090)]: {
      height: 280,
    },
    [theme.breakpoints.down(1027)]: {
      height: 230,
    },
    [theme.breakpoints.down(960)]: {
      height: 220,
    },
    [theme.breakpoints.down(870)]: {
      height: 200,
    },
    [theme?.breakpoints?.down(821)]: {
      height: 220,
    },
    [theme.breakpoints.down(360)]: {
      height: 190,
    },
    [theme.breakpoints.down(250)]: {
      width: "inherit",
      height: 90,
    },
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },

  buttonStyle: {
    width: 130,
    height: 35,
    marginTop: "18px",
  },
  titleButton: {
    fontSize: theme.globals.fontSize.xs,
  },
  date: {
    color: `${theme.globals.colors.white}!important`,
    position: "absolute",
    top: 60,
    left: 24,
    direction: `${theme.direction === "rtl" ? "rtl" : "ltr"}!important`,
    zIndex: "60",
    marginTop: "10px",
    fontSize: theme.globals.fontSize.s,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    [theme.breakpoints.down(1410)]: {
      fontSize: theme.globals.fontSize.s,
      // top: "60px",
    },

    [theme.breakpoints.down(1230)]: {
      top: "14%",
    },
    [theme.breakpoints.down(1200)]: {
      top: "8%",
    },
    [theme.breakpoints.down(1090)]: {
      top: "7%",
      left: theme.direction === "rtl" ? `35px!important` : `35px!important`,
    },
    [theme.breakpoints.down(900)]: {
      top: "8%",
    },

    [theme.breakpoints.down(380)]: {
      fontSize: theme.globals.fontSize.xs + 1,
    },
    [theme.breakpoints.down(345)]: {
      left: theme.direction === "rtl" ? `20px!important` : `20px!important`,
    },
  },
}));

export default useStyles;
