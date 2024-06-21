import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid blue",
  },
  rootBox: {
    background: `${theme.globals.colors.backMedia}`,
    display: "flex",
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
}));

export default useStyles;
