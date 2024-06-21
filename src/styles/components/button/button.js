import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  buttonBox: {
    display: "flex",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: `${ theme.globals.colors.lightGray }!important`,
       borderRadius: "50px!important",
    width: "140px",
    height: "45px",
    textTransform: "capitalize!important",
color:
      theme.palette.type === "dark"
        ? `${theme.palette.primary.main}!important`
        : `${theme.globals.colors.white}!important`,
  },

  primary: {
    borderRadius: "50px!important",
    width: "140px",
    height: "45px",
    backgroundColor:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.menuText}!important`
        : `${theme.palette.primary.main}!important`,
    color:
      theme.palette.type === "dark"
        ? `${theme.palette.primary.main}!important`
        : `${theme.globals.colors.white}!important`,
    textTransform: "capitalize!important",
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark"
          ? `${theme.globals.colors.card}!important`
          : `${theme.globals.colors.white}!important`,
      border:
        theme.palette.type === "dark"
          ? `1px solid ${theme.globals.colors.field}!important`
          : `1px solid ${theme.palette.primary.main}!important`,
      "& >span": {
        color:
          theme.palette.type === "dark"
            ? `${theme.globals.colors.menuText}!important`
            : `${theme.palette.primary.main}!important`,
      },
    },
    "& >span": {
      color:
        theme.palette.type === "dark"
          ? `${theme.palette.primary.main}!important`
          : `${theme.globals.colors.white}!important`,
      fontSize: `${theme.globals.fontSize.s}px`,
      textTransform: "capitalize!important",
    },

    [theme.breakpoints.down(500)]: {
      marginTop: "10px",
    },
  },
  secondry: {
    border: `1px solid ${theme.globals.colors.field}!important`,
    color: ` ${theme.globals.colors.field}!important`,
    borderRadius: "80px!important",
    padding: "10px 20px!important",
    textTransform: "capitalize!important",
    width: "180px",
    background: "none!important",
    "& >span": {
      color: ` ${theme.globals.colors.field}!important`,
      fontSize: `${theme.globals.fontSize.s}px`,
      textTransform: "capitalize!important",
    },
    "& ::hover": {
      background: "none!important",
    },
  },
  dialog: {
    border: theme.palette.type !== "dark"?`1px solid ${theme.palette.primary.main}!important`:`1px solid ${theme.globals.colors.field}!important`,
    color:
      theme.palette.type !== "dark"
        ? `${theme.palette.primary.main}!important`
        : `${theme.globals.colors.field}!important`,
    borderRadius: "80px!important",
    padding: "10px 20px!important",
    textTransform: "capitalize!important",
    width: "180px",
    background: `${theme.globals.colors.field}`,
    "& >span": {
      color:
      theme.palette.type !== "dark"
        ? `${theme.palette.primary.main}!important`
        : `${theme.globals.colors.field}!important`,
      fontSize: `${theme.globals.fontSize.s}px`,
      textTransform: "capitalize!important",
    },
    "& ::hover": {
      background: "none!important",
    },
  },
}));
export default useStyles;
