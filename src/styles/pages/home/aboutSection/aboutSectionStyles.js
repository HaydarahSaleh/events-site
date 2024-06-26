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
        [theme.breakpoints.down(910)]: {
          left: "86%",
        },
        [theme.breakpoints.down(800)]: {
          left: "84%",
        },
        [theme.breakpoints.down(710)]: {
          left: "82%",
        },
        [theme.breakpoints.down(630)]: {
          left: "80%",
        },
        [theme.breakpoints.down(520)]: {
          left: "78%",
        },
        [theme.breakpoints.down(450)]: {
          left: "75%",
          width: 35,
          height: 35,
        },
        [theme.breakpoints.down(390)]: {
          left: "72%",
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
        [theme.breakpoints.down(450)]: {
          width: 35,
          height: 35,
        },
      },
    },
  },
  // minHeight: "940px!important",
  // maxHeight: "940px!important",
}));

export default useStyles;
