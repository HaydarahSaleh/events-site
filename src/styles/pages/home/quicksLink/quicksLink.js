import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  quickRoot: {
    display: "flex",
    backgroundImage:
      theme.palette.type === "dark"
        ? "url(/assets/images/quickImageDark.png)!important"
        : theme.name === "Light Blue Theme"
        ? "url(/assets/images/LightBlueTheme/linksImg.png)!important"
        : theme.name === "Dark Blue Theme"
        ? "url(/assets/images/DarkBlueTheme/linksImage.png)!important"
        : "url(/assets/images/quickImage.png)!important",

    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },

  itemGrid: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down(900)]: {
      paddingLeft: "0px!important",
    },
  },
  title: {
    color: `${theme.globals.colors.notificationTitle}!important`,
    fontSize: `${theme.globals.fontSize.m + 4}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.m + 2}px!important`,
    },
  },
  quicksContainer: {
    display: "flex",
    position: "relative",
    top: "30%",
    [theme.breakpoints.down(900)]: {
      top: "10%",
    },
    [theme.breakpoints.down(350)]: {
      paddingLeft: "9px!important",
      paddingRight: "9px!important",
    },
    "& .slick-initialized .slick-slide": {
      display: "flex!important",

      verticalAlign: "middle",
      justifyContent: "center",
    },
    "& .mainSlider": {
      "& .slick-list": {
        paddingBottom: "30px",
      },

      "& .slick-dots": {
        "& .slick-active": {
          "& >button:before": {
            color: `${theme.palette.secondary.main}`,
          },
        },
      },
      "& .slick-track": {
        display: "flex",
        justifyContent: "flex-start!important",
        [theme.breakpoints.down(400)]: {
          width: "fit-content",
        },
      },

      "& .prev": {
        left: "0px",

        position: "absolute",
        zIndex: "10",
        bottom: "50%",
        border: "none",
        background: "none!important",
        color: `${theme.globals.colors.white}`,
        "& svg": {
          width: "30px!important",
          height: "30px!important",
          cursor: "pointer",
        },
        [theme.breakpoints.down(490)]: {
          left: "-10px",
        },
        [theme.breakpoints.down(370)]: {
          left: "-20px",
        },
        [theme.breakpoints.down(350)]: {
          left: "0px",
        },
      },
      "& .next": {
        right: "0px",
        position: "absolute",
        zIndex: "10",
        background: "none",

        bottom: "50%",
        border: "none",
        color: `${theme.globals.colors.white}`,
        "& svg": {
          width: "30px!important",
          height: "30px!important",
        },
        [theme.breakpoints.down(490)]: {
          right: "-10px",
        },
        [theme.breakpoints.down(370)]: {
          right: "-20px",
        },
        [theme.breakpoints.down(350)]: {
          right: "0px",
        },
      },
    },
  },
  quicksBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: `${theme.globals.colors.card}`,

    width: "500px",

    filter: " drop-shadow(0 0 0.75rem  rgba(0, 0, 0, 0.1))",
    height: "400px",
    padding: "20px",
    borderRadius: "25px",
    zIndex: 4,
    [theme.breakpoints.down(1080)]: {
      height: "480px",
    },
    [theme.breakpoints.between(900, 1010)]: {
      width: "430px",
    },
    [theme.breakpoints.down(500)]: {
      width: "100%",
    },
  },
  quickLinksBox: {
    maxHeight: "100%",
    paddingTop: "4px",
    overflowY: "scroll",
    marginTop: "10px",
  },
  quickLinksOption: {
    backgroundColor: theme.globals.colors.QuickBox,
    cursor: "pointer",
    color: `${theme.palette.primary.main}!important`,
    fontSize: theme.globals.fontSize.s,
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "13px",
    marginBottom: "8px",
    "& a": {
      color: `${theme.palette.primary.main}!important`,
    },
    [theme.breakpoints.down(420)]: {
      fontSize: theme.globals.fontSize.xs - 1,
    },
    "&:hover": {
      "& svg": {
        transform: "scale(1.2)",
      },
    },
  },
  gridRoot: {
    [theme.breakpoints.down(900)]: {
      marginLeft: "0px!important",
    },
  },
  text: {
    textTransform: "capitalize",
    fontSize: `${theme.globals.fontSize.s - 1}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    [theme.breakpoints.down(600)]: {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    },
    [theme.breakpoints.down(400)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  icon: {
    transform: "scale(1)",
    fontSize: "24px",
    transition: "transform 0.3s",
    color: "rgba(52, 75, 97, 0.48)",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));
export default useStyles;
