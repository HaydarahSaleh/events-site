import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.globals.colors.white,
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  writer: {
    borderRight: "1px solid #c1c1c1",
    paddingRight: 8,
    marginRight: "8px!important",
  },

  fileIcon: {
    fontSize: theme.globals.fontSize.s + 4,
    marginRight: 4,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down(900)]: {
      fontSize: theme.globals.fontSize.m + 2,
    },
  },
  iconLabel: {
    fontSize: theme.globals.fontSize.s,
    color:
      theme.palette.type === "dark"
        ? `${theme.globals.colors.field}!important`
        : `${theme.globals.colors.gray}!important`,
    marginRight: "8px!important",
    [theme.breakpoints.down(900)]: {
      fontSize: theme.globals.fontSize.xs,
    },
    [theme.breakpoints.down(500)]: {
      display: "none",
    },
  },
  winnersBox: {
    marginTop: "24px",
  },

  mediaBox: {
    display: "flex!important",
    borderRadius: "10px",
    height: "100%",
    width: "100%!important",
  },
  container: {
    padding: "0px!important",
    marginTop: "30px",
  },
  paddingTop24: {
    paddingTop: "24px",
  },
  publicationBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    [theme?.breakpoints?.down(1200)]: {
      display: "block",
    },
    [theme?.breakpoints?.down(500)]: {
      marginBottom: "5%!important",
    },
  },
  detailsBox: {
    width: "90%",
    height: "50px!important",
    [theme?.breakpoints?.down(1200)]: {
      height: "auto!important",
      marginBlock: "10px!important",
    },
  },
  mediaRoot: {
    width: "100%",
    justifyContent: "center",
    height: "500px",
    marginTop: "20px!important",
    [theme.breakpoints.down(600)]: {
      height: "300px",
    },
  },
  eventMap: {
    display: "flex",
    alignItems: "center",
    marginInlineEnd: "6px!important",
    paddingInlineEnd: "6px!important",
    justifyContent: "center",
    width: "50%",
    [theme.breakpoints.down(1100)]: {
     width: "35%",
    },
   [theme.breakpoints.down(900)]: {
     width: "max-content",
    },
  },
  happenBox: {
    display: "flex",
    alignItems: "center",
    paddingInlineStart: "10px",
  },
  happenText: {
    display: "flex",
    color: "#FFB7B7!important",
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    [theme?.breakpoints?.down(490)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  borderBoxNow: {
    display: "flex",
    border: "1px solid #E2E2E2",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    marginInlineStart: "20px!important",
    justifyContent: "center",
    alignItems: "center",
    [theme?.breakpoints?.down(490)]: {
      height: "25px",
      width: "25px",
    },
  },
  circleError: {
    display: "flex",
    backgroundColor: "rgba(229, 108, 108, 1)",
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    [theme?.breakpoints?.down(490)]: {
      height: "8px",
      width: "8px",
    },
  },
  iconLocation: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginInlineEnd: "4px",
    color: `${ theme.globals.colors.notificationTitle }!important`,
    width: `${ theme.globals.fontSize.s }px!important`,
    height: `${ theme.globals.fontSize.s }px!important`,
    minWidth: `${ theme.globals.fontSize.s }px!important`,
    minHeight: `${ theme.globals.fontSize.s }px!important`,
    marginBlockStart:"-4px",
  },
  titleLocation: {
    fontSize: `${theme.globals.fontFamily.s}px!important`,
    marginInlineEnd: "4px",
    color: `${theme.globals.colors.notificationTitle}!important`,
    overflow: "hidden",
    textOverflow: "ellipsis",

    display: "-webkit-inline-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
  },
  download: {
    color: `${theme.globals.colors.white}!important`,
    borderColor: `${theme.palette.primary.main}!important`,
    border: "1px solid !important",
    minWidth: "150px!important",
    backgroundColor: `${theme.palette.primary.main}!important`,
    marginTop: "20px!important",
    borderRadius: "80px!important",
    "&:hover": {
      backgroundColor: `${theme.globals.colors.white}!important`,
      color: `${theme.palette.primary.main}!important`,
    },
  },
  num: {
    color: `${theme.palette.primary.main}!important`,
    fontSize: theme.globals.fontSize.xs,

    paddingRight: 4,
  },

  eventInfo: {
    display: "flex",
    marginBottom: "10px!important",
     [theme.breakpoints.down(900)]: {
    flexWrap: "wrap",
    },
    "& >div": {
      borderInlineEnd: "1px solid #CCCCCC",
      paddingInlineEnd: "11px!important",
      marginInlineEnd: "11px!important",
    },
    "& >div:nth-last-child(1)": {
      borderInlineEnd: "none!important",
    },
  },
  dateTime: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: `${theme.globals.fontSize.s + 4}px!important`,
    color: `${theme.globals.colors.notificationTitle}!important`,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8px",
    color: `${theme.palette.secondary.main}`,
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,

    [theme.breakpoints.down(550)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",

      display: "-webkit-inline-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs - 3}px!important`,
    },
    [theme.breakpoints.down(350)]: {
      fontSize: `${theme.globals.fontSize.xs - 4}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",

      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
  },

  date: {
    color: `${theme.palette.date.main}!important`,
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    alignItems: "center",
    fontWeight: theme.globals.fontWeight.s,
    display: "flex",
    flexDirection: "row",
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    [theme.breakpoints.down(550)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-inline-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
    },
    [theme.breakpoints.down(350)]: {
      fontSize: `${theme.globals.fontSize.xs - 3}px!important`,
    },
  },
  mt32: {
    marginTop: 32,
  },
  title: {
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      color: `${theme.palette.primary.main}!important`,
    },
    fontSize: `${theme.globals.fontSize.m + 6}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.globals.colors.notificationTitle}!important`,
    marginBlock: "10px!important",
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    textTransform: "capitalize",
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.s}px!important`,
    },
  },

  fileBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme?.breakpoints?.down(1200)]: {
      justifyContent: "start",
    },
    "& .MuiBox-root": {
      alignItems: "center",
      display: "flex",
      marginRight: 24,
    },
  },
  number: {
    color: `${theme.palette.secondary.main}!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
    fontSize: `${theme.globals.fontSize.s + 2}px!important`,
    [theme.breakpoints.down(900)]: {
      fontSize: theme.globals.fontSize.s,
    },
  },
  trainingTypo: {
    color: theme.globals.colors.black,
    fontSize: `${theme.globals.fontSize.m}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    marginTop: "20px",
    textTransform: "capitalize",
  },
  TrainingContainer: {
    padding: "0",
  },
  TrainingBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    [theme.breakpoints.down("1000")]: {
      flexDirection: "column-reverse",
    },
  },
  buttonStyle: {
    width: 120,
    height: 37,
    marginTop: 10,
    marginLeft: 0,
    borderRadius: 2,
    [theme.breakpoints.down(200)]: {
      width: "50%",
      height: "50%",
    },
  },
  TrainingBoxContent: {
    width: "100%",
  },
  SliderBox: {
    width: "50%",
    marginTop: "25px",
    [theme.breakpoints.down("1000")]: {
      width: "100%",
    },
  },
  typoFile: {
    margin: "30px 0 20px",

    color: `${theme.globals.colors.notificationTitle}!important`,
    fontSize:
      theme?.direction === "rtl"
        ? `${theme.globals.fontSize.s}px!important`
        : `${theme.globals.fontSize.s + 2}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    textTransform: "capitalize",
  },
  winnerSectionTitle: {
    color: `${theme.palette.primary.main}!important`,
    borderBottom: "1px solid",
    borderColor: theme.palette.primary.main,
    fontSize: `${theme.globals.fontSize.m + 6}px!important`,
    fontWeight: `${theme.globals.fontWeight.l}!important`,
  },
  timeSpan: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  trainingDate: {
    fontSize: `${theme.globals.fontSize.xxs}px!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    color: `${theme.palette.primary.main}!important`,

    margin: "2px 0 0",
  },
  description: {
    "& *": {
      background: "none!important",
      lineHeight: "30px",

      color: `${theme.globals.colors.notificationTitle}!important`,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
    "& p": {
      background: "none!important",
      lineHeight: "30px",

      color: `${theme.globals.colors.notificationTitle}!important`,
      fontSize:
        theme?.direction === "rtl"
          ? `${theme.globals.fontSize.s}px!important`
          : `${theme.globals.fontSize.s + 2}px!important`,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      [theme.breakpoints.down(450)]: {
        fontSize: `${theme.globals.fontSize.sm}px!important`,
      },
    },

    textAlign: "justify",
    textTransform: "capitalize",
    marginTop: "20px!important",
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.sm}px!important`,
    },
  },
  trainingDescription: {
    color: `${theme.globals.colors.gray}!important`,
    fontSize: theme.globals.fontSize.s,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    textAlign: "justify",
    textTransform: "capitalize",
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.sm}px!important`,
    },
  },
  cardContent: {
    padding: "0!important",
    "& p": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      [theme.breakpoints.down(900)]: {
        fontSize: `${theme.globals.fontSize.sm}px!important`,
      },
    },
  },
  tableContainer: {
    "& .MUIDataTableBodyCell-root": {
      fontSize: `${theme.globals.fontSize.xxs}px!important`,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      color: `${theme.globals.colors.gray}!important`,
    },
  },
  sliderDotsContainer: {
    margin: "0 0 30px 0",
    [theme.breakpoints.down("1000")]: {
      padding: "0",
    },
    "& li.slick-active": {
      "& .MuiBox-root": {
        backgroundColor: `${theme.palette.primary.main}!important`,
        height: "6px!important",
      },
    },
    "& .slick-dots": {
      "& li": {
        width: "30px!important",
        height: "6px!important",

        backgroundColor: "#D9D9D9",
      },
      "& .MuiBox-root": {
        color: "transparent",
      },
    },
  },
  boxImageWithDate: {
    display: "flex",
    justifyContent: "left",
    "&:after": {
      minWidth: "170px",
      height: "50px",
      margin: "auto",
      content: '""',
      // top: "-2%",
      // opacity: "0.7",
      backgroundSize: "cover",
      position: "absolute",
      // marginLeft: "-357px",
      backgroundImage: `url(/assets/images/Blood.png)`,
      [theme.breakpoints.down("375")]: {
        minWidth: "135px",
        height: "45px",
      },
    },
  },
  sliderStatus: {
    top: "20px",

    // height: "72px",
    margin: "auto",
    content: '""',
    position: "absolute",
    // marginLeft: "-380px",
    color: "#fff",
    fontSize: "18px",
    zIndex: "2",
    width: "100px",
    [theme.breakpoints.down("375")]: {
      width: "85px",
      top: "17px",
    },
  },
  sliderMainContainerSlider: {
    position: "relative",
    paddingTop: 85,
    "& .slick-initialized .slick-slide": {
      display: "flex!important",
      justifyContent: "center",
      verticalAlign: "middle",
      "& div": {
        margin: "0px 10px",
      },
    },
    "& .mainSlider": {
      width: "100%",
      position: "unset",
      justifyContent: "center",
      display: "flex",
      "& .slick-list": {
        "& .slick-track": {
          [theme.breakpoints.down(995)]: {
            display: "flex",
            justifyContent: "center",
          },
          "& .slick-slide": {
            [theme.breakpoints.down(995)]: {
              height: "100%!important",
            },
            "& > div > div": {
              display: "flex!important",
              justifyContent: "center",
            },
            "& .MuiBox-root": {
              height: "520px!important",
              [theme.breakpoints.down(900)]: {
                display: "flex!important",
                height: "480px!important",
              },
              [theme.breakpoints.down(800)]: {
                display: "flex!important",
                height: "310px!important",
              },
              [theme.breakpoints.down(400)]: {
                height: "280px!important",
              },
            },
            "& .div": {
              "& .img": {
                objectFit: "contain",
                width: "980px!important",
                height: "520px!important",
                [theme.breakpoints.down(900)]: {
                  width: "100%!important",
                  height: "100%!important",
                },
              },
            },
          },
        },
      },
      "&.boxImage": {
        display: "flex",
        justifyContent: "center",
      },

      "& .prev": {
        left: "-20px",
        position: "absolute",
        top: "60%",
        border: "none",
        background: "none!important",
        color: `${theme.globals.colors.arrowColor}`,
        cursor: "pointer",
        "& svg": {
          width: "25px!important",
          height: "40px!important",
        },
      },
      "& .next": {
        right: "-20px",
        position: "absolute",
        background: "none",
        top: "60%",
        border: "none",
        color: `${theme.globals.colors.arrowColor}`,
        cursor: "pointer",
        "& svg": {
          width: "25px!important",
          height: "40px!important",
        },
      },
    },
  },
  sliderMainContainer: {
    position: "relative",
    paddingTop: 20,
    "& .slick-initialized .slick-slide": {
      display: "flex!important",
      justifyContent: "center",
      verticalAlign: "middle",
      "& div": {
        margin: "0px 10px",
      },
    },
    "& .mainSlider": {
      width: "100%",
      // margin: "30px auto 0",
      position: "unset",
      justifyContent: "center",
      display: "flex",
      "& .slick-list": {
        "& .slick-track": {
          [theme.breakpoints.down(995)]: {
            display: "flex",
            justifyContent: "center",
          },
          "& .slick-slide": {
            [theme.breakpoints.down(995)]: {
              height: "100%!important",
            },
            "& > div > div": {
              display: "flex!important",
              justifyContent: "center",
            },
            "& .MuiBox-root": {
              width: "980px!important",
              height: "520px!important",
              [theme.breakpoints.down(900)]: {
                display: "flex!important",
                width: "850px!important",
                height: "480px!important",
              },
              [theme.breakpoints.down(800)]: {
                display: "flex!important",
                width: "600px!important",
                height: "310px!important",
              },
              [theme.breakpoints.down(400)]: {
                width: "350px!important",
                height: "280px!important",
              },
            },
            "& .div": {
              "& .img": {
                objectFit: "contain",
                width: "980px!important",
                height: "520px!important",
                [theme.breakpoints.down(900)]: {
                  width: "100%!important",
                  height: "100%!important",
                },
              },
            },
          },
        },
      },
      "&.boxImage": {
        display: "flex",
        justifyContent: "center",
      },

      "& .prev": {
        left: "-10px",
        position: "absolute",
        top: "36%",
        border: "none",
        background: "none!important",
        color: `${theme.globals.colors.arrowColor}`,
        cursor: "pointer",
        "& svg": {
          width: "25px!important",
          height: "40px!important",
        },
      },
      "& .next": {
        right: "-10px",
        position: "absolute",
        background: "none",
        top: "36%",
        border: "none",
        color: `${theme.globals.colors.arrowColor}`,
        cursor: "pointer",
        "& svg": {
          width: "25px!important",
          height: "40px!important",
        },
      },
    },
  },
  linkBox: {
    display: "flex",
    boxShadow: "3px 5px 5px 2px rgba(0, 0, 0, 0.03)",
    border: `1px solid`,
    borderColor: `#C4C4C4`,
    height: "45px",
    padding: "0px 12px",
    alignItems: "center!important",
    marginTop: 10,
    marginRight: 10,
    backgroundColor: `${theme.globals.colors.card}!important`,
    borderRadius: "5px",
  },
  linksContainer: {
    paddingTop: 20,
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    margin: "0px 18px",
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: "center!important",
    justifyContent: "center",
    display: "flex",
  },
  linkTitle: {
    color: `${theme.globals.colors.notificationTitle}!important`,
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,

    fontSize:
      theme?.direction === "rtl"
        ? `${theme.globals.fontSize.s - 1}px!important`
        : `${theme.globals.fontSize.s}px!important`,
    textTransform: "capitalize",
  },
  inactiveLink: {
    display: "flex",
    height: "45px",
    padding: "0px 12px",
    alignItems: "center!important",
    marginTop: 10,
    marginRight: 10,
    backgroundColor: theme.globals.colors.lightgray,
    borderRadius: "5px",
  },
  circle: {
    backgroundColor: "#CCCCCC",
    margin: "0px 18px",
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: "center!important",
    justifyContent: "center",
    display: "flex",
  },
  activeCircle: {
    backgroundColor: `${theme.palette.primary.main}`,
    margin: "0px 18px",
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: "center!important",
    justifyContent: "center",
    display: "flex",
  },
  label: {
    color: theme.globals.colors.black,
    fontSize: theme.globals.fontSize.m,
    fontWeight: theme.globals.fontWeight.s,
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.s - 2}px!important`,
    },
  },
  categotyTitle: {
    color: theme.globals.colors.notificationTitle,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    marginBottom: "8px!important",
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  labelDate: {
    color: theme.globals.colors.notificationTitle,
    fontSize: `${theme.globals.fontSize.s}px!important`,
    margin: "0px 8px",
    [theme.breakpoints.down(450)]: {
      fontSize: `${theme.globals.fontSize.xs}px!important`,
    },
  },
  end: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& svg": {
      fontSize: theme.globals.fontSize.m,
      fontWeight: theme.globals.fontWeight.s - 1,

      [theme.breakpoints.down(900)]: {
        fontSize: `${theme.globals.fontSize.s - 2}px!important`,
      },
    },
  },
  endDate: {
    color: theme.globals.colors.black,
    display: "flex",
    flexDirection: "row",
    margin: "0 15px",

    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,

    fontWeight: theme.globals.fontWeight.s - 2,
    fontSize: theme.globals.fontSize.m - 2,
    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.s - 3}px!important`,
    },
  },

  goldenIcon: {
    color: theme.palette.primary.main,
  },
  underlineText: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    fontSize: theme.globals.fontSize.m - 2,
    fontWeight: theme.globals.fontWeight.s - 2,

    [theme.breakpoints.down(900)]: {
      fontSize: `${theme.globals.fontSize.s - 3}px!important`,
    },
  },
}));
export default useStyles;
