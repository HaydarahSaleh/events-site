import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  dashedLine: {
    borderBottom: "0.884987px dashed #9C9696",
    display: "flex",
  },
  containerBox: {
    display: "flex",
    flexDirection: "column",
    backfaceVisibility: "hidden",
    "& .Mui-checked": {
      color: `${theme.palette.primary.main}!important`,
    },
    "& *": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
    },
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    width: "99%",
  },
  titleBox: {
    padding: "0px 4px!important",
  },
  headerTitle: {
    fontSize: `${theme.globals.fontSize.s}px!important`,
    fontWeight: `${theme.globals.fontWeight.m}!important`,
    color: theme.globals.colors.blackCard,
    lineHeight: "28px",
  },
  summary: {
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    color: theme.globals.colors.gray,
    // lineHeight: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    [theme.breakpoints.down(400)]: {
      fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
    },
    [theme.breakpoints.down(330)]: {
      fontSize: "10px!important",
    },
  },
  responseContainer: {
    display: "flex",
    height: 32,
    marginBottom: 12,
  },
  responseBox: {
    backgroundColor: theme.globals.colors.offWhite,
    flex: "2",
    display: "flex",
    borderRadius: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    "& .MuiFormControlLabel-root": {
      "& .MuiTypography-root": {
        fontSize: theme.globals.fontSize.xs,
      },
    },
  },
  paddingLeft8: {
    paddingLeft: "8px",
  },
  iconBox: {
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "40px",
    height: "40px",
    marginRight: "10px",
    borderRadius: "8px",
    [theme.breakpoints.between(900, 1000)]: {
      width: 30,
    },
  },
  boxTitle: {
    display: "flex",
    paddingLeft: 12,
    alignItems: "center",
    flex: "1",
  },
  number: {
    color: theme.globals.colors.white,
    fontWeight: "700",
    fontSize: "10px!important",
  },
  answerTitle: {
    fontSize: `${theme.globals.fontSize.xs}px!important`,
    fontWeight: `${theme.globals.fontWeight.s}!important`,
    color: theme.globals.colors.labelSuggestion,
    lineHeight: "16px",
    fontFamily:
      theme.direction === "rtl"
        ? `${theme.globals.fontFamily.ar}!important`
        : `${theme.globals.fontFamily.en}!important`,
    [theme.breakpoints.down(400)]: {
      fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
    },
  },
  checkbox: {
    color: `${theme.palette.primary.main}!important`,
    backgroundColor: "inherit!important",
    paddingTop: "5px",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiTypography-root": {
      color: "#666666",

      fontSize: "14px",
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: "-21px",
      marginRight: "40px",
    },
    "& .MuiFormControlLabel-root .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiTypography-body1": {
      fontWeight: "500!important",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  grid: {
    marginBottom: "8px",
  },
  buttonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: theme.direction === "rtl" ? "15px" : "3px",
    marginBottom: "10px",
    alignItems: "flex-end",
  },
  buttonStyle: {
    width: 125,
    height: 35,

    marginRight: "10px",
    backgroundColor: theme.globals.colors.lightGold,

    borderColor: `${theme.globals.colors.lightGold}!important`,

    [theme.breakpoints.between(900, 1000)]: {
      width: 90,
    },
    [theme.breakpoints.down(900)]: {
      width: 140,
      height: 40,
    },
    [theme.breakpoints.down(430)]: {
      width: 90,
      height: 40,
    },
  },
  titleButton: {
    fontSize: theme.globals.fontSize.xs - 1,
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    marginTop: "6px",
    [theme.breakpoints.between(900, 1000)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
    [theme.breakpoints.down(430)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
  },
  buttonResultStyle: {
    width: 125,
    height: 35,
    [theme.breakpoints.between(900, 1000)]: {
      width: 90,
    },
    [theme.breakpoints.down(900)]: {
      width: 140,
      height: 40,
    },
    [theme.breakpoints.down(430)]: {
      width: 90,
      height: 40,
    },
  },
  titleResultButton: {
    fontSize: theme.globals.fontSize.xs - 1,
    textTransform: "capitalize",
    [theme.breakpoints.between(900, 1000)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
    [theme.breakpoints.down(430)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
  },
  buttonBox: {
    display: "flex",
    marginTop: "6px",
    alignItems: "center!important",
    cursor: "pointer",
  },
  imgBox: {
    width: "20px!important",
    height: "16px!important",
  },
  progressBox: {
    width: "310px !important",
    marginTop: "3px",
    display: "flex",

    [theme.breakpoints.up(1340)]: {
      width: "350px !important",
    },
    [theme.breakpoints.up(1440)]: {
      width: "360px !important",
    },
    [theme.breakpoints.up(1480)]: {
      width: "380px !important",
    },
    [theme.breakpoints.up(2300)]: {
      width: "400px !important",
    },
    [theme.breakpoints.down(1223)]: {
      width: "306px !important",
    },
    [theme.breakpoints.down(1211)]: {
      width: "300px !important",
    },
    [theme.breakpoints.down(1200)]: {
      width: "375px !important",
    },
    [theme.breakpoints.down(1149, 1125)]: {
      width: "365px !important",
    },
    [theme.breakpoints.down(1125)]: {
      width: "350px !important",
    },
    [theme.breakpoints.down(1088)]: {
      width: "340px !important",
    },
    [theme.breakpoints.down(1064)]: {
      width: "330px !important",
    },
    [theme.breakpoints.down(1064)]: {
      width: "320px !important",
    },
    [theme.breakpoints.down(1016)]: {
      width: "310px !important",
    },
    [theme.breakpoints.down(991)]: {
      width: "300px !important",
    },
    [theme.breakpoints.down(968)]: {
      width: "290px !important",
    },
    [theme.breakpoints.down(944)]: {
      width: "270px !important",
    },
    [theme.breakpoints.down(900)]: {
      width: "550px !important",
    },
    [theme.breakpoints.down(815)]: {
      width: "500px !important",
    },
    [theme.breakpoints.down(775)]: {
      width: "480px !important",
    },
    [theme.breakpoints.down(744)]: {
      width: "450px !important",
    },
    [theme.breakpoints.down(715)]: {
      width: "420px !important",
    },
    [theme.breakpoints.down(683)]: {
      width: "390px !important",
    },
    [theme.breakpoints.down(631)]: {
      width: "330px !important",
    },
    [theme.breakpoints.down(600)]: {
      width: "420px !important",
    },
    [theme.breakpoints.down(550)]: {
      width: "400px !important",
    },
    [theme.breakpoints.down(530)]: {
      width: "370px !important",
    },
    [theme.breakpoints.down(494)]: {
      width: "340px !important",
    },
    [theme.breakpoints.down(458)]: {
      width: "300px !important",
    },
    [theme.breakpoints.down(421)]: {
      width: "280px !important",
    },

    [theme.breakpoints.down(399)]: {
      width: "240px !important",
    },
    [theme.breakpoints.down(357)]: {
      width: "190px !important",
    },
    [theme.breakpoints.down(323)]: {
      width: "180px !important",
    },
    [theme.breakpoints.down(300)]: {
      width: "150px !important",
    },
  },
  progressBox2: {
    width: "500px !important",
    marginTop: "3px",
    display: "flex",
    [theme.breakpoints.down(880)]: {
      width: "450px !important",
    },
    [theme.breakpoints.down(800)]: {
      width: "400px !important",
    },
    [theme.breakpoints.down(740)]: {
      width: "350px !important",
    },
    [theme.breakpoints.down(660)]: {
      width: "300px !important",
    },
    [theme.breakpoints.down(600)]: {
      width: "400px !important",
    },
    [theme.breakpoints.down(580)]: {
      width: "350px !important",
    },
    [theme.breakpoints.down(524)]: {
      width: "300px !important",
    },
    [theme.breakpoints.down(400)]: {
      width: "270px !important",
    },
    [theme.breakpoints.down(365)]: {
      width: "250px !important",
    },
    [theme.breakpoints.down(340)]: {
      width: "230px !important",
    },
    [theme.breakpoints.down(320)]: {
      width: "200px !important",
    },
  },
  percentage: {
    marginLeft: "10px",
    fontSize: theme.globals.fontSize.xs,
    fontFamily: `${theme.globals.fontFamily.arThin}!important`,
    color: theme.palette.primary.main,
  },
  scrollableContainer: {
    maxHeight: "260px",
    overflowY: "scroll",
  },
  scrollableContainer2: {
    maxHeight: "240px",
    overflowY: "scroll",
  },
  scrollableContainer3: {
    maxHeight: "230px",
    overflowY: "scroll",
  },
  answer: {
    fontSize: theme.globals.fontSize.xs - 1,
    fontFamily: `${theme.globals.fontFamily.arThin}!important`,
  },
  boxWithMargin: {
    marginBottom: "6px",
    [theme.breakpoints.down(900)]: {
      margin: "12px 0px !important",
    },
  },
  rotate: {
    transform: "rotateX(-180deg)",
  },
  hideElement: {
    display: "none",
  },
  grayText: {
    color: theme.globals.colors.lightGoldCard,
    fontSize: theme.globals.fontSize.xs - 1,
    textTransform: "capitalize",
    marginTop: "6px",
    [theme.breakpoints.between(900, 1000)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
    [theme.breakpoints.down(430)]: {
      fontSize: theme.globals.fontSize.xs - 3,
    },
  },
}));
export default useStyles;
