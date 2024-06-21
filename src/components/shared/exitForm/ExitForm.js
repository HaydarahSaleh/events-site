import { Box, Slide, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../button/Button";
import { GrClose } from "react-icons/gr";
import useStyles from "../../../styles/components/shared/exitForm/exitForm";
import { useNavigate } from "react-router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function ExitForm(props) {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const [exit, setExit] = useState({
    open: false,
    url: "",
  });

  const handleClose = useCallback(() => {
    setExit((prevState) => ({
      ...prevState,
      open: false,
    }));
  }, []);

  const exitHandler = (e) => {
    const target = e.target;
    const element = target.closest(`a`);
    if (element) {
      if (!element.hasAttribute("href")) return;
      if (element.hasAttribute("download")) return;
      const href = element.getAttribute("href");

      if (!href.startsWith("http")) {
        // window.location.href = href;
        navigate(href)
        return;
      }
      if (href.includes("api/file/download")) {
        // window.location.href = href;
        navigate(href)
        return;
      }
      e.preventDefault();
      setExit({
        url: href,
        open: true,
      });
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", exitHandler, false);
  }, []);

  const handleYes = () => {
    window.open(exit.url);
    handleClose();
  };

  const classes = useStyles();

  return (
    <>
      <Dialog
        open={exit.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className={classes.root}
      >
        <DialogTitle id="form-dialog-title">
          <Box className={classes.alertBox}>

         <Box className={classes.iconBox}>
         <GrClose className={classes.icon} onClick={handleClose} />
         </Box>
      
            {/* <Typography className={classes.alert}>
              {t("EXITMESSAGE.ALERT")}
            </Typography> */}
          </Box> 
        </DialogTitle>
        <DialogContent>
          <Typography className={classes.title}>
            {t("EXITMESSAGE.TITLE")}
          </Typography>
          <Typography className={classes.continue}>
            {t("EXITMESSAGE.CONTINUE")}
          </Typography>
          <DialogActions>
            <Button onClick={handleYes} label={t("EXITMESSAGE.YES")} primary />
            <Button onClick={handleClose} label={t("EXITMESSAGE.NO")} dialog />
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
