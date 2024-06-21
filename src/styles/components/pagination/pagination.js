import { makeStyles } from "@mui/styles";
const useStylesPagination = makeStyles((theme, isRTL) => ({
  "&:MuiBox-root:>.MuiPagination-root:>.MuiPagination-ul": {
    justifyContent: "center",
  },
  item: {
    border: "1px solid red",
  },
  root: {
    right: 50,

    "& *": {
      justifyContent: "center",
      position: "relative",
      display: "flex",
      alignItems: "center",
    },

    "& .MuiButtonBase-root": {
      color: `${theme.globals.colors.notificationTitle}!important`,
      borderRadius: "50%!important",
      background: "none!important",
      justifyContent: "center",
    },

    "& .MuiPagination-ul": {
      display: "flex",
      direction: `${theme.direction}!important`,
      "& li": {},
    },
    "& .MuiPaginationItem-root": {
      color: `${theme.globals.colors.notificationTitle}!important`,
      border: "none!important",
      backgroundColor: "none!important",
      justifyContent: "center",
      fontFamily: `${theme.globals.fontFamily.en}!important`,
      // "& >svg": {
      //   transform:
      //     theme?.direction === "rtl" ? "rotate(180deg)" : "rotate(0deg)",
      // },
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: `${theme.palette.secondary.main}!important`,
      color: `${theme.globals.colors.field}!important`,
      fontSize: `${theme.globals.fontSize.s}px!important`,
      borderColor: `${theme.palette.secondary.main}!important`,
      borderRadius: "50%!important",
      fontFamily: `${theme.globals.fontFamily.en}!important`,

      "& .MuiTouchRipple-root": {
        display: "none!important",
      },
    },
    "& .MuiPaginationItem-previousNext ": {
      backgroundColor: "none",
      color: "#999999!important",
      // borderRadius: "50%",
      border: "1px solid #E4E4E4!important",
    },
  },
  text: {
    border: "1px soid red",
  },
}));
export default useStylesPagination;
