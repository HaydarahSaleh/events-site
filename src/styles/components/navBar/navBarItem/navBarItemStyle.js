import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  "@keyframes animate-top": {
    "0%": {
      opacity: 0,
      transform: "translateX(60px)",
    },
    "80%": {
      transform: "translateX(-3px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0px)",
    },
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "-95px",
    top: "unset",
    right: "unset",
    left: "0px",
    boxShadow: "none",
    [theme.breakpoints.down(600)]: {
      bottom: "-115px",
    },
  },
  navBarItem: {
    display: "flex",
    position: "relative",
    "& .MuiIconButton-root:hover": {
      background: "none!important",
    },
    [theme.breakpoints.down(1170)]: {
      height: "50px",
    },
  },
  navBarIcon: {
    width: "100%!important",
    height: "100%!important",
    color: `${theme.palette.secondary.main}!important`,
  },
  rectangle: {
    left: "50%",
    position: "absolute",
    top: "-9px",
    width: "20px",
    height: "10px",
    backgroundColor: "#fff",
    zIndex: "3",

    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    pointerEvents: "none",
  },
  rectangle2: {
    left: "50%",
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
  langTitle: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    color: `${theme.palette.secondary.main}`,
    marginRight: "15px!important",

    marginTop: "0px!important",
    alignSelf: "center",

    textTransform: "capitalize",
  },
  boxLang: {
    animationName: "$animate-top",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    height: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  containBoxLang: {
    display: "flex",
    alignItems: "center!important",
    position: "relative",
    cursor: "pointer",
    "& >div >svg": {
      transform: "scale(1)",

      transition: "transform 0.3s",
    },
    "&:hover": {
      "& >div  >svg": {
        transform: "scale(1.2)",
      },
    },
  },
  containBoxSetting: {
    display: "flex",
    alignItems: "center!important",
    cursor: "pointer",
    position: "relative",
    borderInlineEnd: "1px solid #ddd",
    "& >div >svg": {
      transform: "scale(1)",

      transition: "transform 0.3s",
    },
    "&:hover": {
      "& >div  >svg": {
        transform: "scale(1.2)",
      },
    },
  },

  containBoxLogin: {
    display: "flex",
    alignItems: "center!important",
    cursor: "pointer",
    borderInlineEnd: "1px solid #ddd",
    "& >div >svg": {
      transform: "scale(1)",

      transition: "transform 0.3s",
    },
    "&:hover": {
      "& >div  >svg": {
        transform: "scale(1.2)",
      },
    },
  },

  containBoxSearch: {
    display: "flex",
    alignItems: "center!important",
    cursor: "pointer",
    borderInlineEnd: "1px solid #ddd",
    "& >div >svg": {
      transform: "scale(1)",

      transition: "transform 0.3s",
    },
    "&:hover": {
      "& >div  >svg": {
        transform: "scale(1.2)",
      },
    },
  },
  menuItem: {
    display: "flex!important",
    justifyContent: "space-between!important",
    width: "max-content",

    height: "40px!important",
    borderBottom: " 0.5px dashed #B8B8B8!important",
  },
  paper: {
    border: "0.4px solid #E5E5E5",
    position: "relative",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  },
  listRoot: {
    width: "100%",
    paddingBottom: "0px!important",
    paddingTop: "6px!important",
    zIndex: "4",
    "& >li:nth-last-child(1)": {
      borderBottom: "none!important",
    },
  },
  langImg: {
    fontSize: "20px",
    "& >img": {
      width: "100%",
      objectFit: "contain",
    },
  },
  icon: {
    width: "40px",
    height: "40px",

    borderRadius: "50%",
    display: "grid!important",
    justifyContent: "center!important",
    alignItems: "center!important",
    padding: "10px",
    [theme.breakpoints.down(710)]: {
      width: "35px",
      height: "35px",
      padding: "8px",
      marginRight: "6px!important",
    },
    [theme.breakpoints.down(710)]: {
      width: "35px",
      height: "35px",
      padding: "8px",
      marginRight: "6px!important",
    },
    [theme.breakpoints.down(350)]: {
      width: "30px",
      height: "30px",
      padding: "5px",
    },
  },
}));
export default useStyles;
