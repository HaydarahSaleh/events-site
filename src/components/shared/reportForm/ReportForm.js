import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import actions from "../../../redux/actions";
import useDialogStyles from "../../../styles/components/shared/dialog";

const { createNew } = actions;
function ReportForm({ open, handleClose }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (values) => {
    const data = { reason: values?.feedback, url: window.location.href };
    dispatch(createNew({ sort: "rate/report", payload: data }));
  };

  const classes = useDialogStyles();
  const initialValues = {
    feedback: "",
  };

  const validationSchema = Yup.object({
    feedback: Yup.string().required(t("ERROR.REQUIRED")),
  });
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.root}
      >
        <div className={classes.divRoot}>
          <DialogTitle id="form-dialog-title">
            <Box className={classes.titleBox}>
              <MdCancel className={classes.icon} onClick={handleClose} />
              <h2>{t("REPORT.TITLE")}</h2>
            </Box>
            {t("REPORT.TEXT")}
          </DialogTitle>
          <DialogContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty, isSubmitting }) => (
                <Form>
                  <Field
                    name="feedback"
                    fullWidth={true}
                    component={TextField}
                    variant="outlined"
                    multiline={true}
                    rows={6}
                    className={classes.textField}
                  />
                  <DialogActions>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      color="primary"
                      disabled={!isValid || !dirty || isSubmitting}
                    >
                      {t("BUTTON.SEND")}
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}

export default memo(ReportForm);
