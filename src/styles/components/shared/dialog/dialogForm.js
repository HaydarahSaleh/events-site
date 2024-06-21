import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& p": {
        fontFamily:
          theme.direction === "rtl"
            ? `${theme.globals.fontFamily.ar}!important`
            : `${theme.globals.fontFamily.en}!important`,
        fontSize: theme.globals.fontSize.s,
        color:
          theme.palette.type === "dark"
            ? theme.globals.colors.field
            : theme.palette.primary.main,
        paddingBottom: 16,
        textAlign: "center",
        paddingTop: 16,
        [theme.breakpoints.down(990)]: {
          fontSize: `${theme.globals.fontSize.s - 2}px!important`,
        },
      },

      "& .MuiFormHelperText-root.Mui-error": {
        display: "flex",
        margin: 0,
      },
    },
    btnEnd: {
      justifyContent: "end",
      display: "flex",
      margin: "8px 0px  32px",
      [theme.breakpoints.down(990)]: {
        justifyContent: "center",
      },
    },
    btnSubmit: {
      width: "110px!important",
      height: "40px!important",
      "& >span": {
        fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      },
    },
    textBox: {
      "& .MuiInputBase-root": {
        color:
          theme.palette.type === "dark" &&
          `${theme.globals.colors.field}!important`,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor:
            theme.palette.type === "dark" &&
            `${theme.globals.colors.field}!important`,
        },
      },
    },
  };
});

export default useStyles;
