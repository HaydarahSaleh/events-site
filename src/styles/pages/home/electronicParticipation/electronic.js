import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  boxContainerCard: {
    display: "flex!important",

    paddingBottom: "30px!important",
    backgroundColor: theme.globals.colors.white,
  },
  boxContainer: {
    display: "flex!important",

    paddingBottom: "30px!important",
    backgroundImage: " url(/assets/images/electronic.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    height: "515px",
    flexDirection: "column",

    [theme.breakpoints.down(1200)]: {
      height: "fit-content",
      backgroundPosition: "0%",
    },
  },
  root: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  sectionTitle: {
    color: `${theme.palette.primary.main}`,
    fontSize: theme.globals.fontSize.title,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    [theme.breakpoints.down(1200)]: {
      fontSize: theme.globals.fontSize.title - 2,
    },
    [theme.breakpoints.down(650)]: {
      fontSize: theme.globals.fontSize.awarenessTitle,
    },
  },
  cardContainer: {
    padding: 16,

    [theme.breakpoints.down(1200)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default useStyles;
