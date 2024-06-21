import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Box, Fab } from "@mui/material";
import React from "react";
import useStyles from "../../styles/components/buttonScroll/scrollButton";
const ButtonScroll = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Fab
        color="inherit"
        onClick={(e) =>
          window.scrollTo({
            top: 0,
            right: 0,
            behavior: "smooth",
          })
        }
        aria-label="close"
        className={classes.BoxButton}
      >
        <KeyboardDoubleArrowUpIcon className={classes.icon} />
      </Fab>
    </Box>
  );
};



export default ButtonScroll;
