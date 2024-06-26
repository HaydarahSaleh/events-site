import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid blue",
  },
  rootBox: {
    display: "flex",
    marginTop: 30,
    border: "1px solid blue",
    flexDirection: "column",
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
  eventsBox: {
    border: "1px solid red",
    minHeight: 560,
    width: "100%",
    borderRadius: "400px 400px 40px 40px!important",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    [theme.breakpoints.down(1300)]: {
      borderRadius: "300px 300px 25px 25px!important",
      minHeight: 520,
    },
    [theme.breakpoints.down(1200)]: {
      borderRadius: "250px 250px 30px 30px!important",
      minHeight: 430,
    },
    [theme.breakpoints.down(1080)]: {
      borderRadius: "200px 200px 25px 25px!important",
      minHeight: 400,
    },
    [theme.breakpoints.down(600)]: {
      borderRadius: "0!important",
      minHeight: 400,
    },
  },
  sectionHead: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  eventGrid: {
    display: "flex",
    justifyContent: "center",
  },
  sliderBox: {
    // minHeight: "940px!important",
    // maxHeight: "940px!important",
    width: "100%",
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
        background: `${theme.globals.colors.white}!important`,
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
        [theme.breakpoints.down(1220)]: {
          left: "88%",
        },
        [theme.breakpoints.down(1050)]: {
          left: "86%",
        },
        [theme.breakpoints.down(850)]: {
          left: "84%",
        },
        [theme.breakpoints.down(720)]: {
          left: "82%",
        },
        [theme.breakpoints.down(650)]: {
          left: "80%",
        },
        [theme.breakpoints.down(520)]: {
          left: "78%",
        },
        [theme.breakpoints.down(450)]: {
          left: "75%",
        },
        [theme.breakpoints.down(400)]: {
          left: "68%",
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
  eventsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: `${theme.globals.fontSize.l}px!important`,
  },
}));

export default useStyles;
