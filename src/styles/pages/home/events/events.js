import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid blue",
  },
  rootBox: {
    display: "flex",
    marginTop: 30,
    border: "1px solid blue",
    flexDirection: "column",
  },
  cardsGrid: {
    display: "flex",
    justifyContent: "center",
  },
  cardsBox: {
    display: "flex",
    "& >div:first-child": {
      "& div": {
        borderRadius: "50px 50px 300px 50px !important",
      },
    },
    "& >div:nth-child(2)": {
      "& div": {
        borderRadius: "5px !important",
      },
    },
  },
  eventsBox: {
    border: "1px solid red",
    minHeight: 560,
    width: "100%",
    borderRadius: "400px 400px 40px 40px!important",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },
  sectionHead: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  eventGrid: {
    display: "flex",
    justifyContent: "center",
  },
  eventsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: `${theme.globals.fontSize.l}px!important`,
  },
}));

export default useStyles;
