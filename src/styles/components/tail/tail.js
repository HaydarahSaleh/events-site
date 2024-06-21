import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tailBox: {
    display: "flex",
    flexDirection: "column",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  answerBox: {
    display: "flex",
    marginLeft: 20,
    width: 80,
    justifyContent: "space-around",
  },
  containBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: "20px",
    paddingTop: "20px",
    borderBottom: `1px dashed ${theme.globals.colors.border}`,
    transform: " rotate(-0.01deg)",
  },
  itemBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px",
  },
  answerText: {
    color: theme.palette.primary.main,
    fontSize: theme.globals.fontSize.xs + 1,
    fontWeight: theme.globals.fontWeight.s,
    lineHeight: "22px",
  },
  containText: {
    color: theme.globals.colors.darkgray,
    fontSize: theme.globals.fontSize.xs + 1,
    fontWeight: theme.globals.fontWeight.s,
    lineHeight: "22px",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
}));
export default useStyles;
