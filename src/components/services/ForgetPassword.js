import { Box, Container, Link, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Field, Formik } from "formik";
import { TextField } from "formik-mui";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import actions from "../../redux/actions";
import useStyles from "../../styles/components/services/forgetPassword";
import Buttonn from "../button/Button";
import Banner from "../shared/Banner";
import SharedDialog from "../shared/sharedDialog/SharedDialog";
const { forgetPassword, clearForgetPasswordResponse } = actions;

function ForgetPassword() {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const classes = useStyles();
  const { t } = useTranslation();
  const [showResultOfResetPassword, setResultOfResetPassword] = useState({
    show: false,
    message: "",
  });
  const [showDialog, setShowDialog] = useState({
    show: false,
    message: "",
    title: "",
    success: false,
  });
  const location = useLocation();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const forgetPasswordReducer = useSelector(
    (state) => state.login.forgetPasswordDoneReducer
  );
  const dispatch = useDispatch();
  const initialValues = {
    email: location?.state?.userEmail,
  };

  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("VALIDATION.INVALID_EMAIL"))
      .required(t("VALIDATION.REQUIRED")),
  });

  const onSubmit = (values) => {
    setEmail(values?.email);
    let payload = values;
    dispatch(forgetPassword({ payload }));
  };

  return (
    <>
      <Banner title={t("TITLE.RESET_PASSWORD")} />
      <Container maxWidth="xl" className={classes.root}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {function MyForm(formik) {
            useEffect(() => {
              if (forgetPasswordReducer) {
                if (
                  forgetPasswordReducer?.code === 2 &&
                  !forgetPasswordReducer?.success
                ) {
                  setResultOfResetPassword({
                    show: true,
                    message: isRTL
                      ? "الحساب غير موجود الرجاء التأكد من البريد الالكتروني"
                      : "Account does not exist,please check your email",
                  });
                  formik.resetForm({});
                  dispatch(clearForgetPasswordResponse());
                  return;
                }
                if (
                  forgetPasswordReducer?.code === 122 &&
                  !forgetPasswordReducer?.success
                ) {
                  setResultOfResetPassword({
                    show: true,
                    message: isRTL
                      ? "لم يتم تأكيد هذا المستخدم"
                      : "This user is not confirmed",
                  });
                  formik.resetForm({});
                  dispatch(clearForgetPasswordResponse());
                  return;
                }
                if (forgetPasswordReducer?.success) {
                  dispatch(clearForgetPasswordResponse());
                  navigate(`/${lang}/reset-password`, {
                    state: { userEmail: email },
                  });
                }
              }
            }, [forgetPasswordReducer]);
            return (
              <>
                <form className={classes.Login}>
                  <Box className={classes.formContainer}>
                    <Typography className={classes.text}>
                      {isRTL
                        ? "    الرجاء ادخال البريد الالكتروني الذي استخدمته لتسجيل الدخول الى الموقع من قبل "
                        : "Please enter the email you used to log in to the site before"}
                    </Typography>
                    <Box className={classes.field}>
                      <InputLabel htmlFor="email" required>
                        {t("LABEL.EMAIL")}
                      </InputLabel>
                      <Field
                        component={TextField}
                        name="email"
                        type="text"
                        id="email"
                        value={formik?.values?.email}
                        className={classes.label}
                      />
                    </Box>

                    <Box className={classes.end}>
                      <Link sx={{ textDecoration: "none!important" }}>
                        <Buttonn
                          label={t("BUTTON.RESET_PASSWORD")}
                          className={classes.buttonStyle}
                          textStyle={classes.titleButton}
                          onClick={(e) => formik?.submitForm(e)}
                        />
                      </Link>
                    </Box>
                  </Box>
                </form>

                <SharedDialog
                  open={showResultOfResetPassword?.show}
                  onClose={() => {
                    setResultOfResetPassword({ show: false, message: "" });
                  }}
                  title={isRTL ? "عذراً" : "Sorry"}
                  description={showResultOfResetPassword?.message}
                  buttons={true}
                  handleOkay={() => {
                    setResultOfResetPassword({ show: false, message: "" });
                  }}
                  okayBtn={true}
                />
              </>
            );
          }}
        </Formik>
      </Container>
    </>
  );
}
export default ForgetPassword;
