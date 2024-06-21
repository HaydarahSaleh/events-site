import { Box } from "@mui/material";
import "aos/dist/aos.css";
import useStyles from "../../styles/components/shared/circleBanner";

function CircleBanner(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.CItem}>
        <Box className={classes.CBorder}>
          <Box className={classes.redDot}></Box>
          <Box className={classes.CBackground}></Box>
        </Box>
      </Box>
    </>
  );
}
export default CircleBanner;
