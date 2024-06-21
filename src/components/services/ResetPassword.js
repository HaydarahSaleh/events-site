import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import { TextField } from "formik-mui";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import SharedDialog from "../shared/sharedDialog/SharedDialog";
import { Formik, Field } from "formik";
import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../../styles/components/services/login";
import Buttonn from "../button/Button";
import Banner from "../shared/Banner";
import actions from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const { resetPassword, clearResetPasswordResponse } = actions;

function ResetPassword() {
  let navigate = useNavigate();

  const classes = useStyles();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
  const resetPasswordReducer = useSelector(
    (state) => state.login.resetPasswordDoneReducer
  );
  const dispatch = useDispatch();
  const initialValues = {
    email: location?.state?.userEmail,
    password: "",
    passwordResetingCode: "",
  };

  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("VALIDATION.INVALID_EMAIL"))
      .required(t("VALIDATION.REQUIRED")),
    password: Yup.string()
      .required(t("VALIDATION.REQUIRED"))
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        isRTL
          ? "يجب ان تحوي على 8 محارف, حرف كبير, حرف صغير, رقم , محرف مميز , "
          : "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),

    confPass: Yup.string()
      .required(isRTL ? "يرجى تأكيد كلمة المرور" : "Confirm your password")
      .oneOf(
        [Yup.ref("password"), null],
        isRTL ? "يجب أن تطابق كلمة المرور" : "Must match password"
      ),
    passwordResetingCode: Yup.string().required(t("VALIDATION.REQUIRED")),
  });

  const onSubmit = (values) => {
    let payload = values;
    dispatch(resetPassword({ payload }));
  };

  useEffect(() => {
    if (resetPasswordReducer) {
      if (!resetPasswordReducer?.success && resetPasswordReducer?.code === 6) {
        setShowDialog({
          show: true,
          message: isRTL
            ? "انتهت صلاحية كود التفعيل يرجى إعادة  تعيين كلمة المرور"
            : "Confirmation code code has expired ,please reset Password again",

          title: isRTL ? "عذراً" : "Sorry",
          success: false,
        });
        setTimeout(() => {
          navigate(`/${lang}/forget-password`);
        }, 2000);
      }
      if (
        !resetPasswordReducer?.success &&
        (resetPasswordReducer?.code === 401 ||
          resetPasswordReducer?.code === 404 ||
          resetPasswordReducer?.code === 403 ||
          resetPasswordReducer?.code === 0 ||
          resetPasswordReducer?.code === 4)
      ) {
        setShowDialog({
          show: true,
          message: isRTL
            ? "الكود خاطئ، الرجاء المحاولة مرة أخرى"
            : "The code is wrong, Please try again",
          title: isRTL ? "عذراً" : "Sorry",
          success: false,
        });
      }
      if (resetPasswordReducer?.success) {
        setShowDialog({
          show: true,
          message: isRTL
            ? "تم إعادة تعيين كلمة المرور بنجاح"
            : "Password reset successfully",
          title: isRTL ? "شكراً لك" : "Thank you",
          success: true,
        });
      }
    }
  }, [resetPasswordReducer]);
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
          {(formik) => {
            return (
              <>
                <form className={classes.Login}>
                  <Box className={classes.formContainer}>
                    {!formik?.values?.passwordResetingCode ? (
                      <Typography className={classes.text}>
                        {isRTL
                          ? "تم ارسال رمز التحقق الى البريد الالكتروني التالي الرجاء تفقد صندوق الوارد لادخال الرمز وكلمة المرور الجديده"
                          : "The verification code has been sent to the following email. Please check the inbox to enter the code and the new password"}
                      </Typography>
                    ) : null}
                    <Box className={classes.field}>
                      <InputLabel htmlFor="email" required>
                        {t("LABEL.EMAIL")}
                      </InputLabel>
                      <Field
                        component={TextField}
                        name="email"
                        type="text"
                        id="email"
                        disabled={true}
                        value={formik?.values?.email}
                        className={classes.label}
                      />
                    </Box>

                    <Box className={classes.field}>
                      <InputLabel required>{t("LABEL.CODE")}</InputLabel>
                      <Field
                        component={TextField}
                        value={formik.values.passwordResetingCode}
                        className={classes.label}
                        type="text"
                        name="passwordResetingCode"
                        id="passwordResetingCode"
                      />
                    </Box>

                    <Box className={classes.field}>
                      <InputLabel htmlFor="password" required>
                        {t("LABEL.NEW_PASSWORD")}
                      </InputLabel>
                      <Field
                        component={TextField}
                        value={formik?.values?.password}
                        className={classes.label}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <Visibility className={classes.redColor} />
                                ) : (
                                  <VisibilityOff className={classes.redColor} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>

                    <Box className={classes.field}>
                      <InputLabel htmlFor="password" required>
                        {t("LABEL.CONF_PASSWORD")}
                      </InputLabel>
                      <Field
                        component={TextField}
                        value={formik?.values?.confPass}
                        className={classes.label}
                        type={showConfirmPassword ? "text" : "password"}
                        name="confPass"
                        id="confPass"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                              >
                                {showConfirmPassword ? (
                                  <Visibility className={classes.redColor} />
                                ) : (
                                  <VisibilityOff className={classes.redColor} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
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
                  open={showDialog.show}
                  onClose={() => {
                    setShowDialog({ show: false, message: "", success: false });

                    formik.resetForm();
                    dispatch(clearResetPasswordResponse());
                  }}
                  title={showDialog?.title}
                  description={showDialog.message}
                  buttons={true}
                  handleOkay={() => {
                    showDialog?.success && navigate("/login");

                    setShowDialog({ show: false, message: "" });
                    formik.resetForm({});
                    dispatch(clearResetPasswordResponse());
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
export default ResetPassword;
