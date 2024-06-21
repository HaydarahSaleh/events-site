import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  "@keyframes imgAnimation": {
    " 0%": {
      transform: "scale(1.0)",
    },

    "100%": {
      transform: "scale(2.3)",
    },
  },
  categoryBox: {
    display: "flex",
    height: "50px",
    maxWidth: "100%",
  },
  link: {
    cursor: "pointer!important",
  },
  noLink: {},
  NolinkBox: {
    "& >a:first-child": {
      pointerEvents: "none!important",
    },
  },
  shadow: {
    direction: `${theme?.direction}!important`,
    alignItems: "center",
    display: "flex",
    position: "absolute",
    width: "40px",
    height: "80%",
    background: "rgba(0, 0, 0, 0.25)",
    filter: "blur(30.5px)",
    top: "10%",
    left: 0,
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",

    marginBlockStart: "20px",
  },
  rotationBox: {
    display: "flex",
    width: "100%",
    backgroundImage: "url(/assets/images/home/event.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "2",
    height: "100%",
  },
  cardInfo: {
    backgroundColor: "rgba(217, 217, 217, 0.1)",
    position: "relative",
    borderRadius: "0px 50px 50px 0px",
    display: "flex",
    maxWidth: "200px",
    padding: "9px 40px 9px 20px",
    justifyContent: "center",
    alignItems: "center",
    [theme?.breakpoints?.down(1340)]: {
      maxWidth: "150px",
    },
    [theme?.breakpoints?.down(340)]: {
      maxWidth: "115px",
    },
  },

  infoTitle: {
    display: "flex",
    color: `${theme.globals.colors.field}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    fontWeight: `${theme.globals.fontWeight.sm}`,
    display: "-webkit-box",
    overflow: "hidden",
    textTransform: "capitalize",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    [theme?.breakpoints?.down(1340)]: {
      fontSize: `${theme.globals.fontSize.s - 2}px!important`,
    },
    [theme?.breakpoints?.down(490)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  happenBox: {
    display: "flex",
    alignItems: "center",
    [theme?.breakpoints?.down(490)]: {
      flexDirection: "column-reverse",
    },
  },
  happenText: {
    display: "flex",
    color: "#FFB7B7!important",
    fontSize: `${theme.globals.fontSize.xxs}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    [theme?.breakpoints?.down(1340)]: {
      fontSize: `${theme.globals.fontSize.xxs}px!important`,
    },
    [theme?.breakpoints?.down(490)]: {
      marginTop: "10px!important",
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  borderBoxNow: {
    display: "flex",
    border: "1px solid #fff",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    marginInlineStart: "20px!important",
    justifyContent: "center",
    alignItems: "center",
  },
  circleError: {
    display: "flex",
    backgroundColor: "rgba(229, 108, 108, 1)",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    [theme?.breakpoints?.down(490)]: {
      height: "8px",
      width: "8px",
    },
  },
  cardBox: {
    display: "flex",
    borderLeft: "1px solid white",
    [theme.breakpoints.down(900)]: {
      borderLeft: "none",
    },
  },
  eventImage: {
    "&:hover": {
      "& >div:nth-last-child(4)": {
        display: "flex",
        transform: "scale(2.3)",
        animationName: "$imgAnimation",
        animationDuration: "1s",
      },
    },
  },
  eventImageNow: {
    "&:hover": {
      "& >div:nth-last-child(3)": {
        display: "flex",
        transform: "scale(2.3)",
        animationName: "$imgAnimation",
        animationDuration: "1s",
      },
    },
  },
  rotationBox: {
    display: "none",

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "2",

    transform: "scale(1.2)",
    transition: "transform 0.1s ease-in-out",
  },

  card: {
    direction: `${theme?.direction}!important`,
    height: 430,
    maxHeight: "max-content",
    marginBottom: 8,
    width: "410px",
    padding: "16px 0px 10px",
    position: "relative",
    boxShadow: "none!important",
    backgroundColor: `${theme.palette.primary.main}!important`,
    cursor: "Pointer",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    [theme.breakpoints.between(1200, 1340)]: {
      width: "370px",
    },
    [theme.breakpoints.down(900)]: {
      width: "419px",
      height: "460px",
      border: "1px solid #fff",
      borderRadius: "10px!important",
    },
    [theme.breakpoints.down(460)]: {
      width: "100%",
    },

    "&:hover": {
      "& .MuiCardActions-root": {
        "& .cardAction": {
          display: "block",
        },
      },
    },
    "& .MuiCardContent-root ": {
      padding: "20px!important",
      height: "78%",
      [theme.breakpoints.down(400)]: {
        padding: "10px!important",
      },
    },

    "& .MuiCardActions-root": {
      flex: "1 1 auto",
      zIndex: "3",

      "& .cardAction": {
        display: "none",
        height: 0,
        WebkitTransitionDelay: ".8s",
        transitionDelay: ".8s",
        width: "100%",
      },
    },
    "& a:hover": {
      transition: "all 300ms ease-in-out",

      "& > .MuiCardMedia-root": {
        height: "200px",
      },
      "& > .MuiCardContent-root": {
        paddingTop: "0px",
        transition: "all 300ms ease-in-out",
        transform: "scale(1.1)",
      },
      "& + .MuiCardActions-root > .cardAction": {
        WebkitTransitionDelay: ".8s",
        transitionDelay: ".8s",

        display: "inline-block",
      },
    },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    paddingInlineEnd: 12,
  },

  titleBox: {
    height: 65,
    display: "flex",
    paddingBottom: "20px",
  },
  title: {
    width: "98%",
    display: "-webkit-box",
    overflow: "hidden",
    textTransform: "capitalize",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    color: theme.globals.colors.field,
    [theme?.breakpoints?.down(1340)]: {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    },
    [theme.breakpoints.between(600, 1035)]: {
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    },
    [theme?.breakpoints?.down(500)]: {
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    },
  },
  descBox: {
    display: "flex",
    height: "40px",
    marginBottom: "10px",
  },
  description: {
    width: "98%",

    display: "-webkit-box",
    overflow: "hidden",

    textTransform: "capitalize",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    fontSize: `${theme.globals.fontSize.s - 2}px!important`,
    color: `${theme.globals.colors.field}!important`,
    "& *": {
      WebkitLineClamp: 2,
      fontWeight: `${theme.globals.fontWeight.s}!important`,
      fontSize: `${theme.globals.fontSize.s - 2}px!important`,
      color: `${theme.globals.colors.field}!important`,
    },
  },

  dateBox: {
    display: "flex",
    paddingBottom: "10px",
    height: "40px",
  },
  date: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    color: `${theme.palette.secondary.main}`,
    marginInlineEnd: "10px",
    marginBottom: 4,
    [theme?.breakpoints?.down(1340)]: {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    },
    [theme.breakpoints.between(600, 1035)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
    [theme.breakpoints.down(490)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  dateLine: {
    display: "flex",
    fontSize: `${theme.globals.fontSize.s + 2}px!important`,
    paddingInline: "10px",
    color: `${theme.palette.secondary.main}`,
    [theme?.breakpoints?.down(1340)]: {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    },
  },

  span1: {
    width: "100%",
    color: theme.globals.colors.field,

    fontSize:
      theme.direction === "rtl"
        ? theme.globals.fontSize.btn
        : theme.globals.fontSize.s,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    padding: 5,
    [theme.breakpoints.between(600, 1035)]: {
      fontSize: theme.globals.fontSize.xs,
    },
    [theme.breakpoints.down(490)]: {
      fontSize: theme.globals.fontSize.xs,
    },
    "& >span": {
      marginInlineEnd: "15px",
    },
  },

  mediaRoot: {
    display: "flex",
    overflow: "hidden",
    height: "165px",
    borderRadius: "6px",
    position: "relative",
    zIndex: 9,
    width: "98%",
    [theme.breakpoints.down(900)]: {
      height: "190px",
    },
    [theme.breakpoints.down(490)]: {
      height: "185px",
    },
  },
  timer: {
    display: "flex",
    paddingTop: "20px",
  },
}));

export default useStyles;
