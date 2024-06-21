import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    background: `${theme.globals.colors.backMedia}`,
    display: "flex",
  },
  rootSlides: {
    "& .slick-initialized .slick-slide": {
      width: "fit-content!important",
      margin: "0 2%",
      [theme.breakpoints.down(660)]: {
        width: "auto",
        margin: "0px",
      },
    },
  },
  sliderBox: {
    // minHeight: "940px!important",
    // maxHeight: "940px!important",

    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    direction: `${theme?.direction}!important`,
    [theme.breakpoints.down(1300)]: {
      minHeight: "830px!important",
      maxHeight: "830px!important",
    },
    [theme.breakpoints.down(1200)]: {
      minHeight: "900px!important",
      maxHeight: "900px!important",
    },
    [theme.breakpoints.down(900)]: {
      minHeight: "830px!important",
      maxHeight: "830px!important",
    },
    [theme.breakpoints.down(500)]: {
      minHeight: "780px!important",
      maxHeight: "780px!important",
    },

    "& .slick-initialized .slick-slide": {
      display: "flex",
      justifyContent: "center",
      "& .slick-active": {
        border: "4px solid red!important",
      },
    },
    "& .mainSlider": {
      position: "relative",

      "& .slick-list": {
        marginTop: 30,
        "& .slick-track": {
          "& .slick-slide slick-current": {
            border: "4px solid red!important",
          },

          "& .slick-slide ": {
            "& .slick-slide slick-active": {
              border: "4px solid red!important",
              "& >div:first-child": {},
              "& .slick-current ": {},
            },
          },
        },
      },
      "& .slick-track": {
        marginBottom: "8px",
        display: "flex!important",
        justifyContent: "center",
        alignItems: "center",
      },
      "& > button > svg": {
        width: "20px!important",
        height: "20px!important",
        cursor: "pointer",
      },
      "& .prev": {
        left: "90%",
        position: "absolute",
        border: `1px solid ${theme.globals.colors.black}`,
        top: "-60px",
        background: "none!important",
        width: 40,
        height: 40,
        borderRadius: 50,
        display: "flex!important",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          color:
            theme.palette.type === "dark"
              ? `${theme.globals.colors.field}!important`
              : `${theme.globals.colors.black}!important`,
        },
      },
      "& .next": {
        right: "3%",
        position: "absolute",
        background: `${theme.globals.colors.black}!important`,
        border: `"none"`,
        top: "-60px",
        width: 40,
        height: 40,
        borderRadius: 50,
        display: "flex!important",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          color:
            theme.palette.type === "dark"
              ? `${theme.globals.colors.field}!important`
              : `${theme.globals.colors.white}!important`,
        },
      },
    },
  },

  sectionHead: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
    height: "100px!important",
  },
  sectionTitle: {
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    fontSize: `${theme.globals.fontSize.g}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.notificationTitle}!important`,
    [theme.breakpoints.down(1200)]: {
      fontSize: `${theme.globals.fontSize.title - 2}px!important`,
    },
  },
  sectionSummary: {
    fontWeight: `${theme.globals.fontWeight.m}!important`,
    fontSize: `${theme.globals.fontSize.g}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.notificationTitle}!important`,
    [theme.breakpoints.down(1200)]: {
      fontSize: `${theme.globals.fontSize.title - 2}px!important`,
    },
  },
}));

export default useStyles;
