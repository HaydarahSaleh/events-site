import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  floatingSocial: {
    direction: `${theme.direction}!important`,
    display: "flex",
    position: "fixed",
    zIndex: 1001,
    right: "10px",
    top: "90vh",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    "& .relative": {
      position: "relative",
    },
    "& .clickedBox": {
      position: "absolute",
      top: "-207px",
      display: "flex",
      right: "-7px",
      backgroundImage:
        theme.direction === "rtl"
          ? "url(/assets/images/floatBack.png)"
          : "url(/assets/images/floatBackEn.png)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "270px",
      height: "270px",
      [theme.breakpoints.down(500)]: {
        width: 240,
        height: 240,
        top: "-185px",
      },
      "& .containBox0": {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: theme.direction === "rtl" ? "25%" : "80px",

        right:theme.direction === "rtl" ? "20px" : "60px" ,
        [theme.breakpoints.down(500)]: {
          top: theme.direction === "rtl" ? "25%" : "65px",

          right: theme.direction === "rtl" ? "20px" : "65px",
        },
      },
      "& .containBox1": {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: theme.direction === "rtl" ? "52%" : "53%",
        right: theme.direction === "rtl" ? "85px" : "56px",
        width: theme.direction === "rtl" ? "auto" : "165px",
        [theme.breakpoints.down(500)]: {
          top: theme.direction === "rtl" ? "52%" : "46%",
          right: theme.direction === "rtl" ? "85px"  : "28px",
        },
      },
      "& .containBox2": {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: theme.direction === "rtl" ? "76%" : "78%",
        width: theme.direction === "rtl" ? "144px" : "165px",
        right: theme.direction === "rtl" ? "80px" : "88px",
        [theme.breakpoints.down(500)]: {
          top: theme.direction === "rtl" ? "76%" : "76%",

          right: theme.direction === "rtl" ? "80px" : "67px",
        },
      },
    },
  },
  containerBox: {
    display: "flex",
  },
  btnsContainer: {
    width: 70,
    height: 70,
    position: "absolute",
    cursor: "pointer",
    top: "-14px",
    right: "-10px",
    zIndex: 2,
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down(500)]: {
      width: 60,
      height: 60,
    },
    "& .icon": {
      color: `${theme.globals.colors.white}!important`,
      width: "40px!important",
      height: "40px!important",
      [theme.breakpoints.down(500)]: {
        width: "35px!important",
        height: "35px!important",
      },
    },
  },
  floatBackColor: {
    backgroundColor: `${theme.palette.secondary.main}`,
  },
  closeBackground: {
    backgroundColor: `${theme.globals.colors.floatingCloseBack}!important`,
  },
  containBox: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "30%",
    // right: "20px",
  },
  Textbox: {
    display: "flex",
    width: "30px",
    height: "3px",
    backgroundColor: `${theme.globals.colors.floatingCloseBack}!important`,
  },
  textStyle: {
    color: `${theme.globals.colors.field}`,
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
  },
}));
export default useStyles;
