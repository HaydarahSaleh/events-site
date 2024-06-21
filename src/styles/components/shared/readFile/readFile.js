import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 370px)",
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "start",
    marginBottom: "30px",
    marginTop: 30,

    [theme.breakpoints.down(1300)]: {
      width: "100%",
    },
    "& .rpv-core__viewer": {
      height: "1445px!important",
      "& .core__inner-container .rpv-default-layout__container": {
        overflow: "scroll",
      },
      "& .rpv-default-layout__toolbar":{
        "& .rpv-toolbar__right":{
          display:"none!important"
        },
        "& .rpv-toolbar__center":{
        justifyContent:"flex-end!important"
        }
      }
    },
    "& div.rpv-core-inner-page": {
      padding: 0,
      background: "inherit",
    },

    "& div.rpv-default-layout-container": {
      height: "800px",
    },

    "& div.rpv-default-layout-body": {
      paddingBottom: "20px",
      paddingTop: "20px",
    },
    "& .MuiGrid-root > .rpv-core__viewer > div > .rpv-default-layout__container > .rpv-default-layout__main > .rpv-default-layout__body > div":
      {
        height: "1620px!important",
      },
  },
}));

export default useStyles;
