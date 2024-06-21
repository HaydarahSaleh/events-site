import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "70px",
    position: "relative",
    display: "flex!important",
    flexDirection: "column",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },

    direction: `${theme?.direction}!important`,
    "& .slick-initialized .slick-slide": {
      display: "flex",
      justifyContent: "center",
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
        color:
          theme.palette.type === "dark"
            ? `${theme.globals.colors.field}!important`
            : `${theme.palette.primary.main}!important`,
      },
      "& .prev": {
        left: "-20px",
        position: "absolute",
        top: "45%",
        border: "none",
        background: "none!important",
      },
      "& .next": {
        right: "-20px",
        position: "absolute",
        background: "none",
        top: "45%",
        border: "none",
      },
    },
  },
  imageBack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    height: "264px!important",
    backgroundSize: "65%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundImage: "url(/assets/images/articles.png)!important",
    [theme.breakpoints.down(1150)]: {
      height: "220px!important",
    },

    [theme.breakpoints.down(940)]: {
      backgroundSize: "75%",
    },
    [theme.breakpoints.down(900)]: {
      backgroundSize: "90%",
    },
    [theme.breakpoints.down(730)]: {
      backgroundSize: "100%",
      height: "170px!important",
    },
    [theme.breakpoints.down(500)]: {
      backgroundSize: "103%",
      height: "160px!important",
    },
    [theme.breakpoints.down(460)]: {
      height: "140px!important",
    },
    [theme.breakpoints.down(430)]: {
      height: "125px!important",
    },
    [theme.breakpoints.down(370)]: {
      height: "110px!important",
    },
  },
  sectionHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0px",
    left: "10%",
    width: "80%",
    height: "192px!important",
    backgroundSize: "65%",
    backgroundImage:
      theme.palette.type === "dark"
        ? "url(/assets/images/lightBlueCircle.png)!important"
        : theme.name === "Light Blue Theme"
        ? "url(/assets/images/LightBlueTheme/cir.png)!important"
        : theme.name === "Dark Blue Theme"
        ? "url(/assets/images/DarkBlueTheme/cir.png)!important"
        : "url(/assets/images/darkBlueCircle.png)!important",

    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    [theme.breakpoints.down(1150)]: {
      height: "170px!important",
    },
    [theme.breakpoints.down(940)]: {
      backgroundSize: "80%",
    },
    [theme.breakpoints.down(900)]: {
      backgroundSize: "90%",
    },
    [theme.breakpoints.down(730)]: {
      backgroundSize: "100%",
      height: "125px!important",
    },
    [theme.breakpoints.down(500)]: {
      backgroundSize: "106%",
    },
    [theme.breakpoints.down(460)]: {
      height: "115px!important",
    },
    [theme.breakpoints.down(430)]: {
      height: "100px!important",
    },
    [theme.breakpoints.down(370)]: {
      height: "85px!important",
    },
  },
  imageHead: {
    display: "flex",
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    zIndex: "4",
    height: "17px",
    backgroundSize: "contain",
    backgroundImage: "url(/assets/images/ArticlesHome.png)!important",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    "&:after": {
      right: "0",
      left: "0",
      width: "90%",
      height: "5px",
      margin: "auto",
      content: '""',
      zIndex: "1",
      bottom: "10%",
      borderRadius: 10,
      position: "absolute",
    },
    [theme.breakpoints.down(730)]: {
      height: "13px",
    },
    [theme.breakpoints.down(500)]: {
      height: "10px",
    },
  },
  sectionTitle: {
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    fontSize: `${theme.globals.fontSize.g}px!important`,
    color: `${theme.globals.colors.field}!important`,
    marginBottom: "30px!important",
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    [theme.breakpoints.down(1300)]: {
      fontSize: `${theme.globals.fontSize.g - 5}px!important`,
    },
    [theme.breakpoints.down(990)]: {
      fontSize: `${theme.globals.fontSize.s + 10}px!important`,
    },
    [theme.breakpoints.down(730)]: {
      fontSize: `${theme.globals.fontSize.m + 4}px!important`,
      marginBottom: "10px!important",
    },
    [theme.breakpoints.down(460)]: {
      fontSize: `${theme.globals.fontSize.m + 2}px!important`,
    },
    [theme.breakpoints.down(440)]: {
      fontSize: `${theme.globals.fontSize.m - 1}px!important`,
    },
    [theme.breakpoints.down(340)]: {
      fontSize: `${theme.globals.fontSize.m - 3}px!important`,
    },
  },
  tabStyle: {
    textTransform: "capitalize!important",
    fontSize: `${theme.globals.fontSize.awarenessTitle}px!important`,
    color: `${theme.globals.colors.red}!important`,
  },
  tabss: {
    marginTop: "45px!important",
    "& .MuiBox-root": {
      padding: "0px!important",
      "& >p": {
        "& .slick-slider": {
          marginTop: "10px!important",
        },
      },
    },
  },

  tabs: {
    "& .Mui-disabled": {
      [theme.breakpoints.down(600)]: {
        opacity: "1!important",
      },
    },
    "& .MuiTabs-scroller": {
      marginBottom: 0,
      "& MuiTabs-flexContainer": {
        "& MuiButtonBase-root": {
          color: "red",
        },
      },
    },
    "& .MuiTabScrollButton-root": {
      alignSelf: "center!important",
      display: "block!important",

      justifyContent: "center!important",
      marginTop: "10px",

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
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    backgroundColor: "unset!important",
    borderRadius: "10px",
    marginTop: "20px",
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
      backgroundColor: `${theme.globals.colors.black}!important`,
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
      position: "relative",
      whiteSpace: "nowrap",
      minHeight: "50px!important",
      overflow: "hidden",
      color: `${theme.globals.colors.TabColor}!important`,

      fontSize: `${theme.globals.fontSize.awarenessTitle}px!important`,
      [theme.breakpoints.down(600)]: {
        fontSize: `${theme.globals.fontSize.m + 2}px!important`,
      },
      [theme.breakpoints.down(580)]: {
        maxHeight: "40px!important",

        minHeight: "40px!important",
      },
      [theme.breakpoints.down(500)]: {
        fontSize: `${theme.globals.fontSize.m + 2}px!important`,
      },
    },
    "& .Mui-selected": {
      maxHeight: "50px!important",
      color: `${theme.globals.colors.notificationTitle}!important`,
      opacity: 1,

      [theme.breakpoints.down(580)]: {
        maxHeight: "40px!important",
      },
      "& >span": {
        zIndex: "2",
        position: "relative",
      },
      "&:after": {
        right: "0",
        left: "0",
        width: "90%",
        height: "5px",
        margin: "auto",
        content: '""',
        zIndex: "1",
        bottom: "10%",
        borderRadius: 10,
        position: "absolute",
        backgroundColor: `${theme.palette.secondary.main}!important`,
      },
    },
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "35px!important",
  },
  buttonStyle: {
    width: 170,
    height: 55,
    borderRadius: "50px!important",
    border: "1px solid!important",
    color: `${theme.globals.colors.white}!important`,
    backgroundColor: `${theme.globals.colors.notificationTitle}!important`,
    border: `1px solid ${theme.globals.colors.notificationTitle}!important`,
    textTransform: "capitalize!important",
    fontSize: `${theme.globals.fontSize.m + 4}px!important`,
    "&:hover": {
      borderColor: `${theme.globals.colors.notificationTitle}!important`,
      background: `${theme.globals.colors.white}!important`,
      color: `${theme.globals.colors.notificationTitle}!important`,
    },
  },
}));

export default useStyles;
