import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  "@keyframes slide-in": {
    from: {
      opacity: 0,

      transform: "translateY(50%)",
    },

    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes fadeInBottom": {
    from: {
      opacity: 0,
      transform: "translateY(100%)",
    },

    to: {
      opacity: 1,
    },
  },
  "@keyframes fadeInARight": {
    from: {
      opacity: 0,
      transform: "translateX(50px)",
    },

    to: {
      opacity: 1,
    },
  },
  "@keyframes fadeInLeft": {
    from: {
      opacity: 0,
      transform: "translateX(-100px)",
    },

    to: {
      opacity: 1,
    },
  },
  "@keyframes fadeInBottomActive": {
    from: {
      opacity: 0,
      transform: "translate(12px,25%)",
    },

    to: {
      opacity: 1,
    },
  },
  "@keyframes rotateAnimation": {
    " 0%": {
      transform: "rotate(0deg)",
      // WebkitTransform: 'rotate(0deg)',
    },

    "100%": {
      transform: "rotate(180deg)",
    },
  },
  "@keyframes fadeInOut": {
    " 0%": {
      opacity: 0,
      transform: "scale(.8)",
    },

    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  sliderRootBox: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    zIndex: "0",
    height: "870px",
    direction: `${theme.direction}!important`,
    backgroundColor: `${theme.palette.primary.main}!important`,
    [theme?.breakpoints?.down(890)]: {
      height: "1150px",
    },
  },

  sliderRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    zIndex: 4,
    height: "100%",
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  sliderContainer: {
    position: "relative",
    "& .sliderBox": {
      width: "100%!important",
      height: "100%",
      display: "flex!important",
      position: "relative!important",
      "&::before": {
        content: '""',
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "absolute",
        width: "108%!important",
        height: "100%",
        display: "flex!important",
        zIndex: 13,
        backgroundImage:
          theme.palette.type === "dark"
            ? theme?.direction === "rtl"
              ? "url(/assets/images/home/dark.png)!important"
              : "url(/assets/images/home/dark_En.png)!important"
            : theme?.direction === "rtl"
            ? "url(/assets/images/home/white.png)!important"
            : "url(/assets/images/home/white_En.png)!important",
        [theme?.breakpoints?.down(3000)]: {
          left: "-2px",
        },
        [theme?.breakpoints?.down(1760)]: {
          width: "110%!important",
        },
        [theme?.breakpoints?.down(1734)]: {
          width: "109%!important",
        },
        [theme?.breakpoints?.down(1717)]: {
          width: "110%!important",
        },
        [theme?.breakpoints?.down(1715)]: {
          width: "107%!important",
        },
        [theme?.breakpoints?.down(1693)]: {
          width: "114%!important",
          left: "-1px",
        },
        [theme?.breakpoints?.down(1675)]: {
          width: "108%!important",
        },
        [theme?.breakpoints?.down(1634)]: {
          width: "114%!important",
        },
        [theme?.breakpoints?.down(1617)]: {
          width: "110%!important",
        },
        [theme?.breakpoints?.down(1615)]: {
          width: "106%!important",
        },
        [theme?.breakpoints?.down(1442)]: {
          width: "102%!important",
        },
        [theme?.breakpoints?.down(1422)]: {
          width: "104%!important",
        },
        [theme?.breakpoints?.down(1411)]: {
          width: "106%!important",
        },
        [theme?.breakpoints?.down(1408)]: {
          width: "100%!important",
        },

        [theme?.breakpoints?.down(1210)]: {
          width: "99%!important",
        },
        [theme?.breakpoints?.down(1130)]: {
          width: "100%!important",
        },
        [theme?.breakpoints?.down(890)]: {
          height: "72%",
        },
        [theme?.breakpoints?.down(760)]: {
          height: "65%",
        },
        [theme?.breakpoints?.down(580)]: {
          height: "69%",
        },
        [theme?.breakpoints?.down(430)]: {
          height: "72%",
        },
      },
    },
    "& .slideBox": {
      display: "flex!important",
      width: "100%",
      paddingTop: "5%",
      direction: `${theme.direction}!important`,
      [theme?.breakpoints?.down(1635)]: {
        paddingTop: "7%",
      },
      [theme?.breakpoints?.down(1625)]: {
        paddingTop: "6%",
      },
      [theme?.breakpoints?.down(1450)]: {
        paddingTop: "9%",
      },
      [theme?.breakpoints?.down(1410)]: {
        paddingTop: "12%",
      },
      [theme?.breakpoints?.down(890)]: {
        flexDirection: "column",
      },
      [theme?.breakpoints?.down(680)]: {
        paddingTop: "15%",
      },
      "& .slideContain": {
        flexDirection: "column",
        paddingTop: "12%",
        zIndex: 90,
        direction:
          theme?.direction === "rtl" ? "rtl!important" : "ltr!important",
        display: "flex !important",
        flexFlow: "column nowrap",
        height: "580px",
        flex: "auto",
        opacity: 0,
        [theme?.breakpoints?.down(1070)]: {
          paddingTop: "20%",
        },
        [theme?.breakpoints?.down(560)]: {
          paddingTop: "28%",
        },
        [theme?.breakpoints?.down(460)]: {
          paddingTop: "35%",
        },
        [theme?.breakpoints?.down(400)]: {
          paddingTop: "44%",
        },
        "& .sliderTitle": {
          fontStyle: "normal",
          fontWeight: `${theme.globals.fontWeight.l}!important`,

          fontSize:
            theme.direction === "rtl"
              ? `${theme.globals.fontSize.g - 1}px!important`
              : `${theme.globals.fontSize.g}px!important`,
          lineHeight:
            theme.direction === "rtl" ? `162%!important` : `140%!important`,
          width: "85%",
          color: `${theme.globals.colors.notificationTitle}!important`,
          overflow: "hidden",
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
          textOverflow: "ellipsis",
          [theme?.breakpoints?.down(1110)]: {
            width: "90%",
            fontSize: `${theme.globals.fontSize.g - 7}px!important`,
          },
          [theme?.breakpoints?.down(500)]: {
            fontSize: `${theme.globals.fontSize.g - 8}px!important`,
          },
          [theme?.breakpoints?.down(370)]: {
            fontSize: `${theme.globals.fontSize.g - 10}px!important`,
          },
        },
        "& .sliderDescription": {
          fontStyle: "normal",
          fontWeight: "400!important",
          fontSize: `${theme.globals.fontSize.m + 2}px!important`,
          lineHeight: "147.68%!important",
          background: "none!important",
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "4",
          color: `${theme.globals.colors.sliderdesc}!important`,
          "& *": {
            background: "none!important",
            color: `${theme.globals.colors.sliderdesc}!important`,
          },
          [theme?.breakpoints?.down(1111)]: {
            width: "90%",
            fontSize: `${theme.globals.fontSize.m}px!important`,
          },
          [theme?.breakpoints?.down(395)]: {
            WebkitLineClamp: "3",
          },
        },
        "& .sliderLink": {
          backgroundColor: `${theme.globals.colors.lightBlue}!important`,
          color: `${theme.globals.colors.field}!important`,
          fontSize: `${theme.globals.fontSize.s}px!important`,
          borderRadius: "40px!important",
          cursor: "pointer",
          border: "0px",
          textTransform: "capitalize!important",
          width: 130,
          height: 40,
          margin: "20px 0px !important",
          display: "flex!important",
          alignItems: "center!important",
          justifyContent: "center!important",
        },
        "& .titleButton": {
          fontSize: `${theme.globals.fontSize.s}px!important`,
          color: `${theme.globals.colors.field}!important`,
          textTransform: "capitalize",
          [theme.breakpoints.down(1024)]: {
            fontSize: `${theme.globals.fontSize.xs}px!important`,
          },
        },
      },
      "& .imageBox": {
        width: 600,
        minWidth: 600,
        height: 600,
        position: "relative",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "35px",
        [theme?.breakpoints?.down(1450)]: {
          width: 500,
          minWidth: 500,
          height: 500,
        },
        [theme?.breakpoints?.down(1200)]: {
          width: 480,
          minWidth: 480,
          height: 480,
        },
        [theme?.breakpoints?.down(560)]: {
          width: 400,
          minWidth: 400,
          height: 400,
        },
        [theme?.breakpoints?.down(430)]: {
          width: 380,
          minWidth: 380,
          height: 380,
        },
        [theme?.breakpoints?.down(370)]: {
          width: 330,
          minWidth: 330,
          height: 330,
        },
        "&::before": {
          position: "absolute",
          top: "-5%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          transform:
            theme?.direction === "rtl" ? "rotate(-45deg)" : "rotate(-15deg)",
          width: "700px",
          height: "700px",
          backgroundPosition: "bottom",
          zIndex: 16,
          right: "-6%",
          content: '""',
          backgroundImage: "url(../assets/images/home/after3.png)!important",

          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 1), transparent 65%)",
          [theme?.breakpoints?.down(1620)]: {
            right: "9%",
          },
          [theme?.breakpoints?.down(1450)]: {
            width: "600px",
            height: "600px",
            transform: "rotate(-30deg)",
            right: "12%",
          },
          [theme?.breakpoints?.down(1200)]: {
            transform: "rotate(-40deg)",
            right: "11%",
            width: "550px",
            height: "550px",
            top: "9%",
          },
          [theme?.breakpoints?.down(1000)]: {
            transform: "rotate(-30deg)",
            right: "2%",
            top: "18%",
          },
          [theme?.breakpoints?.down(890)]: {
            display: "none!important",
          },
        },
        "&::after": {
          position: "absolute",
          bottom: "-7%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-50deg)",
          zIndex: 4,
          width: "700px",
          height: "700px",
          backgroundPosition: "bottom",
          right: "-4%",
          content: '""',
          backgroundImage:
            theme.palette.type === "dark"
              ? "url(/assets/images/home/circleDark.png)!important"
              : theme.name === "Light Blue Theme"
              ? "url(/assets/images/LightBlueTheme/sliderImg.png)!important"
              : theme.name === "Dark Blue Theme"
              ? "url(/assets/images/DarkBlueTheme/sliderImg.png)!important"
              : "url(/assets/images/home/circle3.png)!important",
          [theme?.breakpoints?.down(1620)]: {
            right: "12%",
          },
          [theme?.breakpoints?.down(1450)]: {
            width: "600px",
            height: "600px",
            right: "17%",
          },
          [theme?.breakpoints?.down(1200)]: {
            width: "550px",
            height: "550px",
            right: "13%",
            bottom: "-20%",
          },
          [theme?.breakpoints?.down(1000)]: {
            right: "4%",
            bottom: "-30%",
          },
          [theme?.breakpoints?.down(890)]: {
            right: "-41%",
            bottom: "35%",
          },
          [theme?.breakpoints?.down(760)]: {
            right: "-35%",
            bottom: "46%",
          },
          [theme?.breakpoints?.down(680)]: {
            right: "-22%",
            bottom: "44%",
          },
          [theme?.breakpoints?.down(620)]: {
            right: "-16%",
            bottom: "46%",
          },
          [theme?.breakpoints?.down(560)]: {
            bottom: "47%",
            right: "-17%",
            width: "450px",
            height: "450px",
          },
          [theme?.breakpoints?.down(490)]: {
            right: "-13%",
          },
          [theme?.breakpoints?.down(460)]: {
            right: "-4%",
          },
          [theme?.breakpoints?.down(430)]: {
            right: "-1%",
            width: "400px",
            bottom: "48%",
            height: "400px",
          },
          [theme?.breakpoints?.down(400)]: {
            right: "3%",
          },
          [theme?.breakpoints?.down(370)]: {
            right: "-1%",
            bottom: "47%",
            width: "360px",
            height: "360px",
          },
          [theme?.breakpoints?.down(340)]: {
            right: "6%",
            bottom: "56%",
            width: "340px",
            height: "340px",
          },
        },
      },
      "& .slideImage": {
        overflow: "hidden",
        width: "82%",
        height: "82%",
        top: "2%",
        zIndex: 16,
        right: "0px",
        position: "relative",
        display: "flex",
        borderRadius: "50%",
        WebkitBackfaceVisibility: "hidden",
        marginInlineStart: "-26px",
        backfaceVisibility: "hidden",
        MozBackfaceVisibility: "hidden",

        "& >img": {
          objectFit: "cover",
          objectPosition: "center",
        },
        [theme?.breakpoints?.down(1620)]: {
          right: "92px",
        },
        [theme?.breakpoints?.down(1450)]: {
          right: "96px",
        },
        [theme?.breakpoints?.down(1200)]: {
          right: "75px",
          top: "18%",
        },
        [theme?.breakpoints?.down(1000)]: {
          right: "35px",
          top: "29%",
        },
        [theme?.breakpoints?.down(890)]: {
          left: "182px",
          right: "unset",
          top: "-44%",
        },
        [theme?.breakpoints?.down(760)]: {
          left: "153px",

          top: "-58%",
        },
        [theme?.breakpoints?.down(680)]: {
          left: "90px",
        },
        [theme?.breakpoints?.down(620)]: {
          left: "61px",
        },
        [theme?.breakpoints?.down(490)]: {
          left: "50px",
        },
        [theme?.breakpoints?.down(460)]: {
          left: "10px",
        },
        [theme?.breakpoints?.down(400)]: {
          left: "-1px",
        },
        [theme?.breakpoints?.down(370)]: {
          left: "6px",
        },
        [theme?.breakpoints?.down(340)]: {
          top: "-70%",
          left: "-9px",
        },
      },
    },

    "&::before": {
      position: "absolute",
      bottom: "-100px",
      backgroundSize: "cover",
      width: "300px",
      height: "300px",
      right: "0%!important",

      content: '""',
      backgroundImage: "url(/assets/images/home/slidafter.png)!important",
      [theme?.breakpoints?.down(1410)]: {
        bottom: "-30px",
      },
      [theme?.breakpoints?.down(890)]: {
        bottom: "70px",
      },
    },
    "& .slick-slider": {
      width: "100%",
      "& .prev": {
        position: "absolute",
        top: "40%",
        [theme?.breakpoints?.down(1070)]: {
          left:
            theme?.direction === "ltr" ? "20%!important" : "unset!important",
          right:
            theme?.direction === "rtl" ? "80%!important" : "unset!important",
        },
      },
      "& .next": {
        position: "absolute",
        top: "72%",
        [theme?.breakpoints?.down(1070)]: {
          right: "20%!important",
        },
      },
      "& >button": {
        display: "flex!important",
        background: "none",
        borderRadius: "50%",
        zIndex: "8",
        alignItems: "center",
        right: "30px",
        border: "1px solid",
        borderColor: `#C5A47E!important`,
        justifyContent: "center",
        width: "40px",
        height: "40px",
        [theme?.breakpoints?.down(1070)]: {
          transform: "rotate(-90deg)",
          top: "unset!important",
          bottom: "-70px",
        },
        [theme?.breakpoints?.down(890)]: {
          bottom: "10%",
        },
        "& >svg": {
          color: `#C5A47E!important`,
          fontSize: theme.globals.fontSize.s + 2,
        },
      },
    },
    "& .slick-dots li": {
      display: "none",
      width: "20px",
      height: "20px",
      justifyContent: "center",
      alignItems: "center",
      margin: "2px 0px",
      cursor: " pointer",

      padding: "12px!important",

      fontSize: `${theme.globals.fontSize.ss + 1}px!important`,
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      flexDirection: "column",
    },
    "& .slick-dots": {
      position: " absolute",
      top: "50%",
      bottom: 0,
      right: "70px",
      color: `${theme.globals.colors.white}`,
      flexDirection: "column",
      width: "max-content",
      height: "max-content",
      display: "flex!important",
      justifyContent: "center",
      alignItems: "center",
      paddingBlock: "50px!important",
      margin: 0,
      listStyle: "none",
      textAlign: "center",
      [theme?.breakpoints?.down(1070)]: {
        left: theme?.direction === "ltr" ? "45%!important" : "unset!important",
        right: theme?.direction === "rtl" ? "49%!important" : "unset!important",
        top: "unset",
        bottom: "-125px",
      },
      [theme?.breakpoints?.down(890)]: {
        bottom: "7%",
      },
      "& .slick-active": {
        flexDirection: "row",
        padding: "12px!important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",

        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
        "& .Active": {
          position: "absolute",
          top: "-40px",
          fontSize: 60,

          fontWeight: 700,
          left: "19px",
          background: "linear-gradient(180deg, #BF9271 0%, #F2DDBA 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text!important",
          textFillColor: "transparent",
          animationName: "$fadeInBottomActive",
          animationDuration: "3s",
        },

        "& .totalBox": {
          display: "flex",
          paddingInlineStart: 28,
          position: "absolute",

          left:
            theme?.direction === "rtl" ? "-8px!important" : "25px!important",
          bottom:
            theme?.direction === "rtl" ? "-10px!important" : "-22px!important",
          rotate: "-45deg",
          backgroundColor: theme.palette.primary.main,
          border: "2px solid",
          paddingInline: "12px",
          borderBlockStartColor: `#C5A47E!important`,
          borderBlockEnd: "none",
          borderInline: "none",
          "& .shadow": {
            direction: `${theme?.direction}!important`,
            alignItems: "center",
            display: "flex",
            position: "absolute",
            width: "100%",
            height: "16%",
            background: "rgba(0, 0, 0, 0.55)",
            filter: "blur(11.5px)",
            top: "-4px",
            left:
              theme?.direction === "ltr" ? "-18px!important" : "30px!important",
          },

          "& .total": {
            rotate: "45deg",
            fontSize: `${theme.globals.fontSize.m + 6}px!important`,
            color: `${theme.globals.colors.field}!important`,
          },
        },
      },
    },
    "& .slick-slide": {
      paddingBlock: "30px",
      float: "left!important",
    },
    "& .slick-active .MuiContainer-root": {
      "& .slideContain": {
        opacity: 1,
        animation: "$fadeInBottom 3s",
        [theme.breakpoints.down(890)]: {
          animation:
            theme.direction === "rtl" ? "$fadeInARight 3s" : "$fadeInLeft 3s",
        },
      },
      "& .imageBox:after": {
        content: '""',
        animation: "$rotateAnimation 3s",
      },
      "& .imageBox ": {
        "& .slideImage ": {
          opacity: 1,
          animationName: "$fadeInOut",
          animationDuration: "3s",
          animationFillMode: "both",
        },
      },
    },
  },

  imageContainer: {
    position: "relative",
    "& .overlay": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      zIndex: 1,
    },
  },

  imgBackground: {
    position: "relative",
    width: 500,
    minWidth: 500,
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundImage: "url(/assets/images/home/Cir2.png)!important",
    height: 500,
    "&::before": {
      position: "absolute",
      backgroundImage: "url(/assets/images/home/white.png)!important",
      width: "100%",
      height: "50%",
      content: '""',
      top: 0,
      backgroundRepeat: "no-repeat",
      right: 180,

      backgroundSize: "contain",
    },
  },

  buttondiv: {
    justifyContent: "flex-start!important",
  },
}));
export default useStyles;
