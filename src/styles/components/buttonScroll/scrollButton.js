import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  "@keyframes fadeInUp": {
    from: {
      transform: "translate3d(0,40px,0)",
    },

    "to ": {
      transform: "translate3d(0,0,0)",
      opacity: " 1",
    },
  },

  " @keyframes updown": {
    " 0%": {
      transform: " translateY(-100%)",
    },

    " 50%": {
      transform: "translateY(100%)",
    },

    "100%": {
      transform: "translateY(-100%)",
    },
  },
  container: {
    position: "relative",
    "& .MuiFab-root:hover": {
      background: theme.palette.primary.main,
    },
  },
  BoxButton: {
    textAlign: " center",
    position: "absolute",
    overflow: " hidden",
    boxShadow: "none",
    borderRadius: "50px!important",
    zIndex: "60!important",
    cursor: " pointer!important",
    top: "-14px",
    width: "30px!important",
    height: "30px!important",
    minHeight: "30px!important",
    minWidth: "30px!important",
    border: "none!important",
    background: theme.palette.primary.main,
    color: " #fff!important",

    "& .MuiSvgIcon-root": {
      width: "15px!important",
      height: "15px!important",
    },

    // [theme.breakpoints.down(802)]: {
    //   bottom: "515px",
    // },
    "&:hover": {
      "& .MuiSvgIcon-root": {
        animationName: "$fadeInUp",
        animationDuration: "1s",

        animationFillMode: "both",

        animationIterationCount: "infinite",
      },
    },
  },

  "@keyframes movebtn": {
    " 0%": {
      transform: "translateY(0px)",
    },
    "25%": {
      transform: "translateY(20px)",
    },
    " 50%": {
      transform: "translateY(0px)",
    },
    "75%": {
      transform: "translateY(-20px)",
    },
    " 100%": {
      transform: "translateY(0px)",
    },
  },
}));
export default useStyles;
