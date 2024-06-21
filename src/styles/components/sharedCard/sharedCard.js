import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "&::before": {
      bottom: 61,
      width: "12px",
      height: "25px",
      content: '""',
      borderLeftColor: `${theme.palette.primary.main}!important`,

      borderTopColor: `${theme.palette.primary.main}!important`,
      borderBottomColor: `${theme.palette.primary.main}!important`,
      borderRightColor: `${theme.globals.colors.white}!important`,
      right: "0px",
      zIndex: 2,
      position: "absolute",
      border: "1px solid",
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: "25px",
      borderTopLeftRadius: "25px",
      backgroundColor: theme.globals.colors.white,
    },
  },
  cardDark: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxShadow: "none!important",
    position: "relative",
    height: 400,

    border: "0.8px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 7,
    "& .MuiCardContent-root": {
      paddingBottom: "2px!important",
      height: "330px",
      borderBottom: "0.884987px dashed #9C9696",
      [theme.breakpoints.down(400)]: {
        height: "340px",
      },
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxShadow: "none!important",
    position: "relative",
    height: 400,
    background: "rgba(255, 255, 255, 0.9)",
    WebkitBackdropFilter: "blur(5px)",
    backdropFilter: "blur(5px)",
    border: "0.8px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 7,
    "& .MuiCardContent-root": {
      paddingBottom: "2px!important",
      height: "330px",
      borderBottom: "0.884987px dashed #9C9696",
      [theme.breakpoints.down(400)]: {
        height: "340px",
      },
    },
  },
  box: {
    "&::before": {
      bottom: 61,
      content: '""',

      borderRightColor: `${theme.palette.primary.main}!important`,
      borderTopColor: `${theme.palette.primary.main}!important`,
      borderBottomColor: `${theme.palette.primary.main}!important`,
      borderLeftColor: `${theme.globals.colors.white}!important`,
      left: "0px",
      zIndex: 2,
      position: "absolute",
      border: "1px solid",
      borderBottomLeftRadius: 0,
      width: "12px",
      height: "25px",
      borderBottomRightRadius: "25px",
      borderTopRightRadius: "25px",
      backgroundColor: theme.globals.colors.white,
    },
  },
  buttonStyle: {
    color: `${theme.palette.primary.main}!important`,
    fontWeight: `${theme.globals.fontWeight.m}`,
    width: 140,
    height: 30,
    marginTop: "4px",

    [theme.breakpoints.down(600)]: {
      width: 100,
      height: 30,
    },
  },
  footerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
    width: "100%",
  },

  titleButton: {
    fontSize: theme.globals.fontSize.xs - 1,
    textTransform: "capitalize",
    [theme.breakpoints.between(900, 1000)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
    [theme.breakpoints.down(430)]: {
      fontSize: theme.globals.fontSize.xs - 4,
    },
    [theme.breakpoints.down(390)]: {
      fontSize: theme.globals.fontSize.xs - 5,
    },
  },
  cardDark2: {
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    marginTop: "15px",
    padding: "5px 20px",
    minHeight: "280px",
    [theme.breakpoints.between(500, 600)]: {
      margin: "10px 20px",
    },
    [theme.breakpoints.down(430)]: {
      padding: "5px 0px",
    },
  },
  card2: {
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    marginTop: "15px",
    padding: "5px 20px",
    minHeight: "280px",
    [theme.breakpoints.between(500, 600)]: {
      margin: "10px 20px",
    },
    [theme.breakpoints.down(430)]: {
      padding: "5px 0px",
    },
  },
}));
export default useStyles;
