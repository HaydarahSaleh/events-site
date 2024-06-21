import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootBox: {},
  root: {
    paddingTop: 25,
    "& ul.siteMapContainer": {
      direction: theme.direction === "rtl" ? "rtl!important" : "ltr!important",
      listStyleType: "none",
      width: "95%",
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.down(600)]: {
        flexWrap: "nowrap",
        width: "100%",
        padding: "0 16px",
      },
      "& span.closeBtn": {
        width: 43,
        height: 43,
        background: theme.palette.primary.main,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)!important",
        borderRadius: "3px 0px 0px 3px",
        position: "absolute",
        top: "105px",
        right: theme.direction === "rtl" ? 0 : 12,
        display: "grid",
        placeItems: "center",
        cursor: "pointer",

        "& svg": {
          fontSize: theme.globals.fontSize.m,
          color: theme.globals.colors.white,
        },
        [theme.breakpoints.down(600)]: {
          top: "5px",
          right: 0,
        },
      },
    },
    "& ul.parentUL": {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      "& li:last-child": {
        width: "400px!important",
        [theme.breakpoints.down(400)]: {
          width: "100%!important",
        },
      },
      [theme.breakpoints.down(850)]: {
        flexDirection: "column",
        justifyContent: "space-between",
      },

      "& svg": {
        color:
          theme.palette.type === "dark"
            ? `${theme.globals.colors.field}!important`
            : `${theme.palette.primary.main}!important`,
        marginRight: 5,
        fontSize: theme.globals.fontSize.xs,
      },

      "& ul": {
        listStyle: "none",
      },

      "& li.navLink": {
        width: 300,
        marginTop: 25,
        marginRight: 35,
        height: "fit-content",
        [theme.breakpoints.down(850)]: {
          marginRight: 15,
        },
        [theme.breakpoints.down(400)]: {
          width: 210,
        },
        "& a.parentLink": {
          fontFamily:
            theme.direction === "rtl"
              ? theme.globals.fontFamily.ar
              : theme.globals.fontFamily.en,
          fontSize: theme.globals.fontSize.m + 4,
          fontWeight: theme.globals.fontWeight.l,
          lineHeight: "36px",
          backgroundColor: "rgba(250,250,250, 0.2)",
          background: theme.palette.type === "dark" && "none!important",
          color: `${theme.globals.colors.lightBlue}!important`,
          textTransform: "capitalize",
          marginBottom: 5,
          display: "block",

          "& svg": {
            fontSize: theme.globals.fontSize.m,

            color:
              theme.palette.type === "dark"
                ? `${theme.globals.colors.Field}!important`
                : `${theme.palette.primary.main}!important`,
          },
          [theme.breakpoints.down(768)]: {
            fontSize: theme.globals.fontSize.m,
          },
        },
        "& ul.parentUL svg": {
          color: theme.globals.colors.white,
        },
        "& ul.childList": {
          "& li.navLinkChild  a": {
            fontFamily:
              theme.direction === "rtl"
                ? theme.globals.fontFamily.ar
                : theme.globals.fontFamily.en,
            fontSize: theme.globals.fontSize.m,
            lineHeight: "30px",

            color: `${theme.globals.colors.black}!important`,
            textTransform: "capitalize",

            marginBottom: 5,
            display: "block",
            [theme.breakpoints.down(768)]: {
              fontSize: theme.globals.fontSize.s - 2,
            },
          },

          "& ul.childList.grandson": {
            marginBottom: 20,

            "& li.navLinkChild a": {
              fontSize: theme.globals.fontSize.s,
              fontWeight: "normal",
              lineHeight: "27px",

              "& svg": {
                fontSize: theme.globals.fontSize.s - 2,
                color: theme.globals.colors.white,
              },
              [theme.breakpoints.down(768)]: {
                fontSize: theme.globals.fontSize.s - 2,
              },
            },
          },
        },
      },
    },
  },
}));

export default useStyles;
