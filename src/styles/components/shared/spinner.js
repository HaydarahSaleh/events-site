import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  spinner: {
    display: "flex",
    top: 0,
    bottom: 0,
    zIndex: 5500,
    backdropFilter: "blur(2px)",
    right: 0,
    backgroundColor: "#ffffff1a",
    left: 0,
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default useStyles;
