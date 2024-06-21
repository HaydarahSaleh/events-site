import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  navBarBoxFixed: {
    display: "flex!important",
    width: "100%!important",
    position: "fixed",
    marginTop: "30px",
    right: 0,
    left: 0,
    top: 35,
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  innerBox: {
    height: "138px!important",
    backgroundColor: `${theme.globals.colors.bgWhite}!important`,
    display: "flex",
    zIndex: "1200!important",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
  },
  search: {
    position: "relative",
    background: "#F2F2F2",
    borderRadius: 4,

    width: theme?.direction === "rtl" ? "40%!important" : "45%!important",
    marginTop: 20,

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
    "& svg": {
      fontSize: "20px",
      color: theme.palette.primary.main,
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
  tabBox: {
    display: "flex",
    flexDirection: "row!important",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: "10px",
    [theme?.breakpoints?.down(1170)]: {
      display: "none",
    },
  },
  logoBox: {
    width: "235px",
    marginTop: "24px",
    color: theme.globals.colors.white,
    height: "70px",
    marginBottom: "10px",
  },
  arabicLogoBox: {
    width: "268px",
    marginTop: "6px",
    color: theme.globals.colors.white,
    height: "37px",
    marginBottom: "10px",
  },
  iconBox: {
    width: "50px",

    height: "60px",
    marginTop: "30px!important",
  },
  mainBox: {
    width: "100%",
  },
  secondBox: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,

    height: 190,
    zIndex: "600",
  },
  visibleBox: {
    height: "138px!important",
    display: "flex",
    zIndex: "1200!important",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    backdropFilter: "blur(40px)!important",
    background: "none!important",
  },
  none: {
    display: "none",
  },
}));
export default useStyles;
