import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.globals.colors.white,
    marginTop: "30px",
    "& a": {
      textDecoration: "none",
    },
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    [theme.breakpoints.down(490)]: {
      fontSize: theme.globals.fontSize.xs,
    },
  },
  cards: {
    padding: "0 10px",
    marginBottom: 30,

    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "start",
    flexWrap: "wrap",
    margin: " auto",
    maxWidth: "100%",

    [theme.breakpoints.down(1410)]: {
      display: "flex",
      flexDirection: "row!important",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "30px",
    },
    [theme.breakpoints.down(855)]: {
      display: "flex",
      flexDirection: "row!important",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "30px",
    },
    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "center",
      paddingLeft: 2,
      paddingBottom: 10,
      [theme.breakpoints.down(600)]: {
        flexDirection: "row!important",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "inherit",
        marginBottom: "30px",
      },
    },

    "& .MuiGrid-grid-xs-6": {
      [theme.breakpoints.down(500)]: {
        flexBasis: "100%",
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      },
    },

    "& . MuiCardContent > .MuiTypography-root": {
      [theme.breakpoints.down(600)]: {
        fontSize: 10,
      },
    },
  },
  card: {
    padding: "5px 10px",
    marginBottom: 5,
    display: "flex",
    justifyContent: "flex-start",

    "&>.MuiLink-root": {
      "& p": {
        [theme.breakpoints.down(1350)]: {
          fontSize: theme.globals.fontSize.m - 1,
        },
        [theme.breakpoints.down(1260)]: {
          fontSize: theme.globals.fontSize.s,
        },
        [theme.breakpoints.down(1140)]: {
          fontSize: theme.globals.fontSize.s - 2,
        },
        [theme.breakpoints.down(1080)]: {
          fontSize: `${theme.globals.fontSize.xxs}px!important`,
        },

        [theme.breakpoints.down(995)]: {
          fontSize: `${theme.globals.fontSize.sm - 1}!important`,
        },
        [theme.breakpoints.down(980)]: {
          fontSize: `${theme.globals.fontSize.sm + 1}px!important`,
          marginTop: 12,
        },
        [theme.breakpoints.down(870)]: {
          fontSize: `${theme.globals.fontSize.sm}px!important`,
          marginTop: 5,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-inline-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
        },
        [theme.breakpoints.down(670)]: {
          fontSize: `${theme.globals.fontSize.sm + 1}px!important`,
          marginTop: 5,
        },
        [theme.breakpoints.down(420)]: {
          fontSize: `${theme.globals.fontSize.xxs}px!important`,
          marginTop: 5,
        },
        [theme.breakpoints.down(400)]: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-inline-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
        },
      },
    },
  },
  pagination: {
    padding: 15,
  },
}));

export default useStyles;
