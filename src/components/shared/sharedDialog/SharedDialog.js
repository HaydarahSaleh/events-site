import { Box, Button, Slide, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineCancel } from "react-icons/md";
import useStyles from "../../../styles/components/shared/sharedDialog/sharedDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function SharedDialog(props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(props?.open);
  let {
    title,
    description,
    buttons,
    yesBtn,
    okayBtn,
    noBtn,
    handleYes,
    dots,
    handleOkay,
    message,
    success,
  } = props;
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props?.open);
  }, [props?.open]);
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className={classes.root}
      >
        <Box className={classes.titleBox}>
          <MdOutlineCancel
            className={classes.closesIcon}
            onClick={handleClose}
          />
          {title ? (
            <DialogTitle id="form-dialog-title">
              <Typography
                className={success ? classes.title : classes.titleFail}
              >
                {title}
              </Typography>
            </DialogTitle>
          ) : null}
        </Box>
        <DialogContent>
          {message ? (
            <Typography className={classes.message}>{message}</Typography>
          ) : null}
          {description ? (
            <Typography className={classes.description}>
              {description}
              {dots ? (
                <span>
                  <span className="one">.</span>
                  <span className="two">.</span>
                  <span className="three">.</span>
                  <span className="four">.</span>
                  <span className="five">.</span>
                </span>
              ) : null}
            </Typography>
          ) : null}

          {buttons ? (
            <DialogActions>
              {yesBtn ? (
                <Button onClick={handleYes}>{t("EXITMESSAGE.YES")}</Button>
              ) : null}
              {noBtn ? (
                <Button onClick={handleClose}>{t("EXITMESSAGE.NO")}</Button>
              ) : null}
              {okayBtn ? (
                <Button onClick={handleOkay}>{t("EXITMESSAGE.OKAY")}</Button>
              ) : null}
            </DialogActions>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default memo(SharedDialog);
