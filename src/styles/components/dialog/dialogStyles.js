import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 20,
    width: "100%",
    height: "100%",
  },
  inside: {
    position: "absolute",
    left: -63,
    top: 70,
  },
  paper: {
    position: "absolute",
    backgroundColor: "red",
    "& .MuiDialogContent-root": {
      display: "flex",
    },
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",

    padding: 0,
    height: 216,
    overflowY: "hidden",
    overflowX: "hidden",
    backgroundImage: "url(/assets/exit1.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",

    "& .MuiBox-root.text": {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  leftText: {
    top: "20%",
    color: theme.globals.colors.gray,
    fontFamily:
      theme.direction === "rtl"
        ? theme.globals.fontFamily.ar
        : theme.globals.fontFamily.en,
    // position: "absolute",
    fontWeight: 600,
    fontSize: 32,
    [theme.breakpoints.down(500)]: {
      fontSize: 17,
    },
    "&:before": {
      left: 0,
      top: 0,
      width: 56,
      height: 4,
      content: "''",
      position: "absolute",
      borderWidth: 7,
      backgroundImage: `url(/assets/images/horizentalRed.png)`,
      [theme.breakpoints.down(500)]: {
        left: 0,
      },
    },
  },
  dialog: {
    "& div.MuiDialog-paperScrollPaper": {
      width: "70%",
      backgroundColor: "white",
    },

    "& .MuiDialogContent-root:first-child": {
      padding: 0,
      overflowY: "hidden",
      overflowX: "hidden",
    },
  },
  imgContainer: {
    marginRight: "-4px",
    height: "101%",
    "& > img": {
      height: "100%",
    },
  },

  block: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& span": {
      fontFamily:
        theme.direction === "rtl"
          ? theme.globals.fontFamily.ar
          : theme.globals.fontFamily.en,
    },
  },
  pinkButton: {
    border: "1px solid rgba(191, 158, 102, 1)!important",
    color: `${theme.palette.primary.main}!important`,
    fontFamily:
      theme.direction === "rtl"
        ? theme.globals.fontFamily.ar
        : theme.globals.fontFamily.en,
    borderRadius: "5px1important",
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    "&:hover": {
      color: `${theme.globals.colors.white}!important`,

      backgroundColor: `${theme.palette.primary.main}!important`,
      "& span": {
        color: `${theme.globals.colors.white}`,
      },
    },
    width: 100,
    borderColor: theme.palette.primary.main,
    "& span": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      fontSize:
        theme.direction === "rtl"
          ? theme.globals.fontSize.s - 2
          : theme.globals.fontSize.xs,
    },
  },
  center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  closeButton: {
    textTransform: "capitalize",
    position: "absolute",
    top: "-3px",
    right: "0px",
  },
  message: {
    textTransform: "capitalize",
    color: "#29495E",
    fontWeight: 600,
    height: 150,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    paddingTop: 45,
  },
  relative: {
    position: "relative",
  },
  triangle: {
    top: "33%",
    right: 0,
    height: 207,
    position: "absolute",
    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
    maxWidth: "11%",
  },
}));
export default useStyles;
