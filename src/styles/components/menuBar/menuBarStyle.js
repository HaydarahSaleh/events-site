import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  "@keyframes animate-top": {
    "0%": {
      opacity: 0,
      transform: "scale(0)",
    },
    "80%": {
      transform: "scale(1.07)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  before: {
    "&::before": {
      position: "absolute",

      backgroundSize: "cover",
      width: "310px",
      height: "310px",
      left: "-48px",
      top: "-140px",
      content: '""',
      backgroundImage: "url(/assets/images/home/logoBack.png)!important",

      [theme?.breakpoints?.down(1070)]: {
        width: "290px",
        height: "290px",
        left: "-48px",
        top: "-130px",
      },
      [theme?.breakpoints?.down(1020)]: {
        width: "270px",
        height: "270px",
        left: "-37px",
        top: "-120px",
      },
      [theme.breakpoints.down(920)]: {
        left: "-38px",
      },

      [theme.breakpoints.down(565)]: {
        width: "240px",
        height: "240px",
        left: "-33px",
        top: "-105px",
      },
      [theme.breakpoints.down(391)]: {
        width: "220px",
        height: "220px",
        left: "-33px",
        top: "-95px",
      },
      [theme.breakpoints.down(370)]: {
        width: "190px",
        height: "190px",
        left: "-24px",
        top: "-80px",
      },
      [theme.breakpoints.down(325)]: {
        width: "170px",
        height: "170px",
        left: "-19px",
        top: "-70px",
      },
    },
  },
  logoBox: {
    maxWidth: "200px",
    maxHeight: "200px",
    minWidth: "200px",
    minHeight: "200px",
    width: "200px",
    height: "200px",

    [theme?.breakpoints?.down(1070)]: {
      width: "180px",
      height: "180px",
      maxWidth: "180px",
      maxHeight: "180px",
      minWidth: "180px",
      minHeight: "180px",
    },
    [theme.breakpoints.down(565)]: {
      width: "160px",
      height: "160px",
      maxWidth: "160px",
      maxHeight: "160px",
      minWidth: "160px",
      minHeight: "160px",
    },
    [theme.breakpoints.down(391)]: {
      width: "140px",
      height: "140px",
      maxWidth: "140px",
      maxHeight: "140px",
      minWidth: "140px",
      minHeight: "140px",
    },
    [theme.breakpoints.down(370)]: {
      width: "130px",
      height: "130px",
      maxWidth: "130px",
      maxHeight: "130px",
      minWidth: "130px",
      minHeight: "130px",
    },
    [theme.breakpoints.down(325)]: {
      width: "118px",
      height: "118px",
      maxWidth: "118px",
      maxHeight: "118px",
      minWidth: "118px",
      minHeight: "118px",
    },
    "& >a": {
      zIndex: "8",
      position: "relative",

      [theme.breakpoints.down(370)]: {
        marginTop: "0px",
      },
    },
  },

  menuBox: {
    display: "flex!important",
    flexDirection: "column!important",
    height: "60px",
    justifyContent: "center",
    width: "100%",
    position: "relative!important",
    padding: "8px 0px!important",
    background: "none!important",
    boxShadow: "none!important",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  menuBoxFixed: {
    position: "fixed",
    right: 0,
    left: 0,
    top: 80,
  },
  itemBox: {
    display: "flex",
    marginTop: "0px",
    alignItems: "center",
    height: "56px",
    width: "100%",
    marginLeft: "-60px",
    zIndex: "2",
    backgroundColor: `${theme.globals.colors.card}`,
    paddingInlineStart: "40px",
    border: "1px solid #D2D2D2",
    borderRadius: "45px",
    [theme.breakpoints.down(1170)]: {
      justifyContent: "space-between",
    },
  },
  menuContainer: {
    [theme.breakpoints.down(370)]: {
      paddingRight: "6px!important",
      paddingLeft: "6px!important",
    },
  },
  boxMenu: {
    display: "none",

    [theme.breakpoints.down(1170)]: {
      width: "30px",
      height: "30px",
      marginRight: "4px",
      marginTop: "0px",
      marginLeft: "2px",
      borderRadius: "50%",

      display: "flex!important",
      justifyContent: "center!important",
      alignItems: "center!important",
    },
  },

  menuStyle: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    listStyleType: "none",
    position: "relative",
    marginRight: "10px!important",
    [theme?.breakpoints?.down(1440)]: {
      marginRight: "2px!important",
    },

    "& > .subItem": {
      opacity: "0",
      display: "none",
      "& >li:nth-last-child(1)": {
        borderBottom: "none!important",
        marginBottom: "2px!important",
      },
      "& li": {
        marginBottom: "8px",
        borderBottom: "0.1px dashed #b8b8b845",
        "&:hover": {
          borderInlineStart: `3px solid ${theme.palette.secondary.main}!important`,

          color: `${theme.globals.colors.notificationTitle}!important`,
        },
      },
      "& a": {
        color: "#4f4f4f!important",
      },
    },
    "& .MuiButton-root": {
      color: `${theme.globals.colors.menuText}!important`,
      whiteSpace: "nowrap",
      textTransform: "capitalize",
      fontSize: `${theme.globals.fontSize.s - 2}px!important`,
      height: "55px",
      "& >span": {
        color: `${theme.globals.colors.menuText}!important`,
      },

      [theme?.breakpoints?.down(1310)]: {
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },

      [theme?.breakpoints?.down(1240)]: {
        padding: "8px 4px!important",
      },
      [theme?.breakpoints?.down(1025)]: {
        fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
        fontWeight: "500!important",
        "& >span": {
          fontSize: `${
            theme?.direction === "ltr"
              ? theme.globals.fontSize.xs - 1
              : theme.globals.fontSize.xs
          }px!important`,
          fontWeight: "500!important",
        },
      },
    },

    "&:hover": {
      "& .MuiButton-root": {
        background: "none!important",
        "& >span": {
          color: `${theme.palette.secondary.main}!important`,
          position: "relative",
          "&::before": {
            left: "0px",
            background: "none",

            bottom: "-3px",
            width: "100%",
            content: '""',
            position: "absolute",
            zIndex: "101",
            background: "no-repeat",
            backgroundSize: "cover",

            borderBottom: `3px solid ${theme.palette.secondary.main}!important`,
            pointerEvents: "none",
          },
        },
      },
      "& > .subItem": {
        opacity: "1",
        display: "flex!important",
        flexDirection: "column",
        position: "absolute",
        filter: "drop-shadow(0 0 0.75rem  rgba(0, 0, 0, 0.1))",
        border: "1px solid #E5E5E5",
        borderRadius: 3,

        top: "52px!important",
        paddingBottom: "0px!important",
        left: "-9px",
        width: "max-content!important",
        backgroundColor: `${theme.globals.colors.card}`,

        padding: "6px 0px",

        zIndex: "100",
        "& .rectangle": {
          left: "7px",
          position: "absolute",
          top: "-9px",
          width: "20px",
          height: "10px",
          backgroundColor: `${theme.globals.colors.card}!important`,
          zIndex: "3",

          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          pointerEvents: "none",
        },
        "& .rectangle2": {
          left: "7px",
          position: "absolute",
          top: "-10px",
          width: "20px",
          height: "10px",
          backgroundColor: "#E5E5E5",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          zIndex: "2",

          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          pointerEvents: "none",
        },

        "& .subItemText": {
          color: `${theme.globals.colors.menuText}!important`,
          fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
          textTransform: "capitalize",
          fontWeight: `${theme.globals.fontWeight.m}!important`,
          display: "flex",
          whiteSpace: "nowrap",
          marginInlineStart: "12px",
          marginInlineEnd: "20px",
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          animationName: "$animate-top",
          animationDuration: "0.5s",
          animationFillMode: "forwards",
        },

        "& .MuiButton-root": {
          color: `${theme.globals.colors.white}!important`,
        },
        "& a": {
          color: `${theme.globals.colors.menuText}!important`,
          padding: "4px",
          // marginTop: "10px",
        },
      },
    },
  },
  tabBox: {
    display: "flex",
    paddingTop: "4px!important",
    width: "100%",
    marginInlineStart: "10px",
    [theme.breakpoints.down(1340)]: {
      marginInlineStart: "0px",
    },

    [theme.breakpoints.down(1170)]: {
      display: "none",
    },
  },
  boxIcon: {
    width: "30px",
    height: "30px",
    minHeight: "30px",
    minWidth: "30px",
    maxHeight: "30px",
    maxWidth: "30px",
    borderRadius: "50%",
    display: "flex!important",
    justifyContent: "center!important",
    alignItems: "center!important",
    transform: "scale(1)",

    transition: "transform 0.3s",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  iconMenu: {
    color: `${theme.globals.colors.notificationTitle}!important`,
    width: "30px!important",
    padding: "5px!important",
    height: "30px!important",
  },
  icon: {
    color: `${theme.globals.colors.notificationTitle}!important`,
    fontSize: `${theme.globals.fontSize.m + 2}px!important`,
  },
  iconPhone: {
    color: `${theme.globals.colors.white}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginLeft: "8px!important",
    [theme.breakpoints.down(1340)]: {
      color: "rgb(55, 73, 87)!important",
      marginLeft: "0px!important",
      fontSize: "24px!important",
    },
  },
  boxInfo: {
    width: "130px",
    height: "30px",
    padding: "8px!important",
    borderRadius: "45px!important",
    backgroundColor: `${theme.globals.colors.red}!important`,
    display: "flex!important",
    justifyContent: "center!important",
    alignItems: "center!important",
    "& p": {
      "& a": {
        color: `${theme.globals.colors.white}!important`,
      },
      fontSize: "13px!important",
      color: `${theme.globals.colors.white}!important`,
      [theme.breakpoints.down(1340)]: {
        display: "none",
      },
    },
    [theme.breakpoints.down(1340)]: {
      width: "30px!important",
      height: "30px!important",
      marginTop: "2px",
      backgroundColor: `${theme.globals.colors.lightgray}!important`,
      borderRadius: "50%!important",
    },
    [theme.breakpoints.down(960)]: {
      marginTop: "0px",
    },
  },
  infoContainer: {
    display: "flex!important",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    height: "30px!important",
    minHeight: "30px!important",
    maxHeight: "30px!important",
    paddingLeft: "8px!important",
    paddingRight: "8px!important",
    [theme.breakpoints.down(1230)]: {
      alignItems: "center!important",
    },
    [theme.breakpoints.down(410)]: {
      position: "absolute!important",
      left: "-15px",
    },
    [theme.breakpoints.down(330)]: {
      left: "-20px",
    },
  },
  IconsBox: {
    display: "flex",
  },
  navBarItem: {
    display: "flex",
    marginTop: "0px",
    height: "50px",
    paddingInline: "10px",
    alignItems: "center",
    [theme.breakpoints.down(1280)]: {
      paddingInline: "2px",
    },
  },
  search: {
    position: "relative",
    background: "#F2F2F2",

    width: "80%",

    alignItems: "center",

    "& button": {
      marginRight: "0",
    },
  },
  closeIcon: {
    height: "35px",
    width: "35px",
  },

  searchIcon: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "40px",
    zIndex: "1",

    "& svg": {
      fontSize: "20px",
    },
  },

  inputStyle: {
    color: "inherit",
    fontSize: "unset",
    width: "100%",
    height: "100%",

    "& input": {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: theme.globals.fontSize.xs + 1,
      lineHeight: "16px",
      color: "#BBB8B8",
    },

    "& input::placeholder": {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: theme.globals.fontSize.xs + 1,
      lineHeight: "16px",
      color: "#BBB8B8",
    },
  },
}));
export default useStyles;
