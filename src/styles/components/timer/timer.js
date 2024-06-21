import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  Eventroot: {
    display: "flex",
    marginInlineStart: "20px",
    [theme?.breakpoints?.down(1140)]: {
      paddingBlock: "8px 0px",
    },
    [theme?.breakpoints?.down(340)]: {
      marginInlineStart: "4px",
    },
  },
  timeBox: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    [theme.breakpoints.down(440)]: {
      padding: "1px",
    },
  },
  EventTimeBox: {
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    width: "0.8px",
    marginInline: "20px",
    height: "50px",
    marginBlock: "30px",
    backgroundColor: "#fff",
    [theme?.breakpoints?.down(440)]: {
      height: "44px",
      marginBlock: "14px",
    },
  },
  Eventdivider: {
    width: "0.8px",
    marginInline: "15px",
    height: "35px",

    backgroundColor: "#fff",
  },
  countBox: {
    display: "flex",
    justifyContent: "center",
    width: "50px",
    height: "60px",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.17)",
  },

  EventcountBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  titleCount: {
    fontSize: `${theme.globals.fontSize.s - 2}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    color: theme.globals.colors.field,
    alignSelf: "center",
    marginTop: "8px!important",
  },
  EventtitleCount: {
    fontSize: `${theme.globals.fontSize.xs}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    color: theme.globals.colors.field,
    marginBottom: "-4px!important",
    alignSelf: "center",
    [theme?.breakpoints?.between(600, 730)]: {
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    },
  },
}));
export default useStyles;
