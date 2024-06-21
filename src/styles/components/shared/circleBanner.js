import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  CBorder: {
    border: "1px solid hsla(0,0%,74.1%,.52)",
    position: "relative",

    borderRadius: 250,
    width: 200,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  CBackground: {
    width: "140px",
    height: " 140px",
    backgroundColor: theme.palette.primary.main,
    boxShadow: " 10px 20px 40px rgb(0 0 0 / 10%)",
    borderRadius: " 50%",
    margin: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    clipPath: "border-box",
  },
  redDot: {
    width: "10px",
    height: " 10px",
    backgroundColor: " red",
    borderRadius: " 50%",
    position: "absolute",
    right: "-5px",
  },
}));
export default useStyles;
