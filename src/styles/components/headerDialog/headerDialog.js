import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  dialogBox: {
    width: "40%",
    display: "flex",

    height: "100%!important",
    right: "initial!important",
    filter: "drop-shadow(0 0 0.75rem  rgba(0, 0, 0, 0.1))!important",
    top: "30px!important",
    overflowY: "scroll",
    flexDirection: "column!important",
    direction: `${theme?.direction}!important`,
    "& .MuiBackdrop-root": {
      background: "unset!important",
    },
    [theme.breakpoints.down(650)]: {
      width: "50%",
    },
    [theme.breakpoints.down(500)]: {
      width: "85%",
    },

    "& .MuiPaper-root": {
      borderRadius: "5px!important",
      backgroundColor: `${theme.globals.colors.card}!important`,

      "& .dialog": {
        position: "relative",
        padding: "10px 30px!important",
      },
    },
    "& *": {
      fontWeight: `${theme.globals.fontWeight.s}!important`,
      direction: `${theme?.direction}!important`,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },

  ratingBox: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    "& .MuiRating-root": {
      // direction: "ltr!important",
      "& .MuiRating-iconEmpty": {
        color:
          theme.palette.type === "dark"
            ? `${theme.globals.colors.field}!important`
            : `${theme.globals.colors.ratingColor}!important`,
      },
    },
  },
  ratingTitle: {
    color: `${theme.globals.colors.black}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginRight: "10px!important",
    [theme.breakpoints.down(700)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
    [theme.breakpoints.down(375)]: {
      display: "none",
    },
  },
  dialogTitle: {
    color: `${theme.palette.secondary.main}!important`,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginTop: "5px!important",
    cursor: "pointer",
    [theme.breakpoints.down(530)]: {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    },
  },
  iconClose: {
    backgroundColor:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.field}!important`
        : `${theme.palette.primary.main}!important`,

    width: "45px",
    height: "40px",
    position: "absolute!important",
    top: "0px!important",
    right: "0px!important",
    direction: `${theme?.direction}!important`,
    borderTopLeftRadius: "4px!important",
    borderTopRightRadius: "0px!important",
    borderBottomLeftRadius: "4px!important",
    borderBottomRightRadius: "0px!important",
    zIndex: 1,
  },

  iconStyle: {
    color:
      theme.palette.type === "dark"
        ? `${theme.palette.primary.main}!important`
        : `${theme.globals.colors.white}!important`,
    [theme.breakpoints.down(500)]: {
      fontSize: theme.globals.fontSize.m,
    },
  },
  itemBox: {
    display: "flex",
    flexDirection: "column",
    "& >li": {
      borderBottom: `0.3px solid #CCCCCC!important`,
      marginTop: "4px!important",
    },
    "& li:nth-last-child(1)": {
      borderBottom: `none!important`,
    },
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between!important",
    marginBottom: "4px!important",
    paddingBottom: "8px!important",
    borderBottom: `0.3px solid #CCCCCC!important`,
  },
  button: {
    justifyContent: "flex-start!important",
    color: `${theme.palette.secondary.main}!important`,
    textTransform: "capitalize!important",
    paddingInlineStart: "0px!important",
    fontSize: `${theme.globals.fontSize.s}px!important`,

    [theme.breakpoints.down(530)]: {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    },
  },
  menuStyle: {
    display: "flex",
    flexDirection: "column",

    "& .MuiButton-root:hover": {
      background: "none",
    },

    "& > .subItem": {
      opacity: "1",
      display: "flex",
      flexDirection: "column",
      padding: "0px 15px",

      width: "100%",
      "& .list": {
        listStyleType: "disc!important",
        color:
          theme.palette.type === "dark"
            ? `${theme.globals.colors.field}!important`
            : `${theme.palette.primary.main}!important`,
        fontSize: `${theme.globals.fontSize.s}px!important`,
        [theme.breakpoints.down(530)]: {
          fontSize: `${theme.globals.fontSize.s - 1}px!important`,
        },
      },
      "& .subItemText": {
        color: `${theme.globals.colors.black}!important`,
        fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
        lineHeight: "21.72px!important",
        fontWeight: `${theme.globals.fontWeight.s}!important`,
        overflow: "hidden",
        textOverflow: "ellipsis",
        textTransform: "capitalize",
        maxWidth: "100%",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
        [theme.breakpoints.down(530)]: {
          fontSize: `${theme.globals.fontSize.xs}px!important`,
        },
      },
    },
  },
}));
export default useStyles;
