import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  createStyles: {
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  },
  drapZone: {
    display: "flex",
    width: "100%",
    "& > div": {
      border: "none!important",
      minHeight: "44px",
      width: "100%",
      background: "unset!important",
    },
    "& span": {
      display: "none",
    },
    "& div:nth-child(3)": {
      display: "none",
    },
    "& .MuiSnackbarContent-root": {
      minHeight: "65px!important",
      borderRadius: "10px",
    },
    "& .MuiSnackbar-anchorOriginBottomLeft": {
      bottom: 10,
    },
    "& .MuiDropzoneSnackbar-icon": {
      color: "#fff!important",
    },
    "& .MuiChip-label": {
      fontFamily:
        "Droid Kufi, Raleway, Segoe UI, Segoe, Tahoma, Helvetica, Arial, sans-serif",
    },
    " & .MuiChip-outlined": {
      border: "1px solid",
      borderColor: `${theme.palette.primary.main}!important`,
      height: "38px",
      borderRadius: "10px",
    },
    "& button": {
      width: "20px",
      height: "20px",
      background: "#fff!important",

      transition: "all .5s ease-in-out",
      "&:hover": {
        transform: "rotate(-360deg)",
      },
      "& .MuiDropzoneSnackbar-icon": {
        color: "#929eaa!important",
      },
    },
    "& .MuiDropzonePreviewList-root": {
      display: "none",
    },
    "& .MuiGrid-item": {
      display: "none !important",
    },
    "& > div > div": {
      "& > p": {
        display: "none",
      },
      "& > svg": {
        color: "gainsboro",
        width: "40px",
        height: "40px",
      },
    },
  },
}));
export default useStyles;
