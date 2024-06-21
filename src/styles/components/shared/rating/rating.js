import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& label": {
      marginRight: "2px",
      display: "flex",
      alignItems: "center",
    },

    "& svg": {
      width: "20px",
      height: "20px",
    },

    "& span.MuiRating-iconFilled": {
      "& svg": {
        color: theme.palette.secondary.main,
      },
    },
  },
}));
export default useStyles;
