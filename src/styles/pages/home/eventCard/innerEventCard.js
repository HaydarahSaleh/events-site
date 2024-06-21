import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    [theme?.breakpoints?.down(600)]: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
  },

  activitiesCards: {
    direction: `${theme.direction}!important`,
    backgroundColor: `${theme.globals.colors.card}!important`,
    margin: "5px",
    height: 330,
    position: "relative",
    boxShadow: "none!important",
    border: `1px solid ${theme.globals.colors.lightGray}`,

    borderRadius: "10px!important",
    [theme.breakpoints.down(1480)]: {
      height: "318px!important",
    },

    [theme.breakpoints.down(600)]: {
      width: "90%!important",
    },

    cursor: "pointer",
    "& .MuiCardMedia-root": {
      height: "55%!important",
    },
    "& .MuiCardContent-root": {
      padding: "0px!important",
      position: "relative",
      bottom: "10px",
      borderTopLeftRadius: "8px",
      paddingTop: "4px!important",
      borderTopRightRadius: "8px",
      backgroundColor: `${theme.globals.colors.white}!important`,
      height: "100%",
    },
    "&:before": {
      maxWidth: "100px !important",
    },
  },

  image: {
    maxWidth: "100%",
    width: "100%",

    borderColor: `${theme.palette.primary.main}!important`,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  dateBox: {
    display: "flex",

    flexDirection: "column",

    width: "100%",
    borderRadius: "5px",
    padding: "5px",
  },
  date: {
    color: `${theme.palette.secondary.main}`,
    fontSize: `${theme.globals.fontSize.xs}px!important`,
    fontWeight: theme.globals.fontWeight.s,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    [theme.breakpoints.down(550)]: {
      overflow: "hidden",
      textOverflow: "ellipsis",

      display: "-webkit-inline-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
    },
    [theme.breakpoints.down(350)]: {
      fontSize: `${theme.globals.fontSize.xs - 3}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",

      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
  },
  label: {
    color: theme.globals.colors.notificationTitle,
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    margin: "-1px 8px",
    [theme?.breakpoints?.between(600, 730)]: {
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    },
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    },
  },

  time: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "8px",
    color: `${theme.palette.secondary.main}`,
    fontSize: `${theme.globals.fontSize.xs}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,

    [theme.breakpoints.down(550)]: {
      fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",

      display: "-webkit-inline-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs - 3}px!important`,
    },
    [theme.breakpoints.down(350)]: {
      fontSize: `${theme.globals.fontSize.xs - 4}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",

      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
  },
  inactiveEvent: {
    position: "absolute",
    top: "0px",
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",

    height: "100%",
    width: "100%",

    border: ".1px solid",
    borderRadius: 12,
    boxShadow: "none",
    transition: "all .7s ease-in-out",

    borderColor: `${theme.palette.primary.main}`,

    zIndex: 90,
    cursor: "pointer",

    "&:before": {
      maxWidth: "100px !important",
    },
  },

  title: {
    color: theme.globals.colors.notificationTitle,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    textTransform: "capitalize",
    maxWidth: "100%",
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-inline-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    [theme?.breakpoints?.down(1480)]: {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    },
    [theme?.breakpoints?.between(600, 730)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },

  titleBox: {
    marginBlock: "2px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2px 8px!important",
  },
  descBox: {
    marginBlock: "2px",
  },
  icon: {
    fontSize: `${theme.globals.fontSize.s + 4}px!important`,
    color: `${theme.globals.colors.notificationTitle}!important`,
  },
  dateTime: {
    display: "flex",
    alignItems: "center",
    marginBottom: "4px",
  },
  description: {
    width: "98%",
    display: "-webkit-box",
    overflow: "hidden",
    textTransform: "capitalize",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    color: `${theme.globals.colors.gray}!important`,
    "& *": {
      WebkitLineClamp: 2,
      fontWeight: `${theme.globals.fontWeight.s}!important`,
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      color: `${theme.globals.colors.gray}!important`,
      [theme?.breakpoints?.down(1480)]: {
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
      [theme?.breakpoints?.between(600, 730)]: {
        fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
      },
    },
    [theme?.breakpoints?.down(1480)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
      width: "100%",
    },
    [theme?.breakpoints?.between(600, 730)]: {
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    },
  },
  timer: {
    display: "flex",
    position: "absolute",
    height: "50px",
    alignItems: "center",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "5px",
    padding: "4px 9px",
    top: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    right: 0,
    [theme?.breakpoints?.down(1140)]: {
      flexDirection: "column",
      height: "max-content",
      padding: "8px",
    },
  },
  cardInfo: {
    display: "flex",
    paddingInlineEnd: "6px",
    borderInlineEnd: "1px solid #fff",
    [theme?.breakpoints?.down(1140)]: {
      borderInlineEnd: "none!important",
    },
  },
  happenBox: {
    paddingInline: "8px",
    [theme?.breakpoints?.down(1140)]: {
      paddingBlock: "8px 0px",
    },
  },
  happenTitle: {
    display: "flex",
    color: `${theme.globals.colors.field}!important`,
    fontSize: `${theme.globals.fontSize.xs}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}`,

    [theme?.breakpoints?.down(490)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },

  Infotitle: {
    display: "flex",
    color: `${theme.globals.colors.field}!important`,
    fontSize: `${theme.globals.fontSize.xs}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "120px",
    display: "-webkit-inline-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    [theme?.breakpoints?.down(490)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
}));
export default useStyles;
