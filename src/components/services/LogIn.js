import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Field, Formik } from "formik";
import { TextField } from "formik-mui";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SharedDialog from "../../components/shared/sharedDialog/SharedDialog";
import actions from "../../redux/actions";
import useStyles from "../../styles/components/services/forgetPassword";
import Buttonn from "../button/Button";
import Banner from "../shared/Banner";

const {
  login,
  forgetPassword,
  clearLoginResponse,
  clearForgetPasswordResponse,
} = actions;

function Login() {
  let navigate = useNavigate();
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [showResultOfResetPassword, setResultOfResetPassword] = useState({
    show: false,
    message: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const loginReducer = useSelector((state) => state.login.loginDoneReducer);
  const forgetPasswordReducer = useSelector(
    (state) => state.login.forgetPasswordDoneReducer
  );
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("VALIDATION.INVALID_EMAIL"))
      .required(t("VALIDATION.REQUIRED")),
    password: Yup.string().required(t("VALIDATION.REQUIRED")),
  });

  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);

  const onSubmit = (values) => {
    localStorage.setItem("iconRememberMe", JSON.stringify(rememberMe));
    let payload = values;
    dispatch(login({ payload }));
  };

  useEffect(async () => {
    let remember = localStorage.getItem("iconRememberMe");
    if (!loginReducer?.success && loginReducer.code === 3) {
      setShowDialog(true);
    }

    if (loginReducer?.success) {
      if (loginReducer?.token) {
        let token = loginReducer?.token;
        let userInfo = {
          name: loginReducer?.user?.name,
          email: loginReducer?.user?.email,
          phoneNumber: loginReducer?.user?.phoneNumber,
          brief: loginReducer?.user?.brief,
          position: loginReducer?.user?.position,
          workPosition: loginReducer?.user?.workPosition,
          workfor: loginReducer?.user?.workfor,
          fileId:
            loginReducer?.user && loginReducer?.user?.file
              ? loginReducer?.user?.file
              : null,
        };

        if (remember === "true") {
          localStorage.setItem("iconUser", JSON.stringify(userInfo));
          localStorage.setItem("iconToken", token);
          navigate("/profile");
        }
        if (remember === "false") {
          sessionStorage.setItem("iconTokenSession", token);
          sessionStorage.setItem("iconUserSession", JSON.stringify(userInfo));
          navigate("/profile");
        }
      }
    }
  }, [loginReducer]);

  const handleForgetPasswordClick = (email) => {
    if (!email) {
      setResultOfResetPassword({
        show: true,
        message: isRTL
          ? "الرجاء ادخال بريدك الالكتروني"
          : "Please insert your E-mail",
      });
    } else {
      const payload = { email: email };
      dispatch(forgetPassword({ payload }));
    }
  };

  useEffect(() => {
    if (forgetPasswordReducer) {
      if (
        forgetPasswordReducer?.code === 2 &&
        !forgetPasswordReducer?.success
      ) {
        setResultOfResetPassword({
          show: true,
          message: isRTL
            ? "البريد الالكتروني الذي قمت بإدخاله غير موجود"
            : "User has not been found",
        });
        dispatch(clearLoginResponse());
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
        dispatch(clearLoginResponse());
        return;
      }
      if (forgetPasswordReducer?.success) {
        dispatch(clearForgetPasswordResponse());
        navigate(`/${lang}/reset-password`, {
          state: { userEmail: userEmail },
        });
      }
    }
  }, [forgetPasswordReducer]);

  return (
    <>
      <Banner title={isRTL ? "تسجيل الدخول " : " Log in"} />
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
                    <Box className={classes.field}>
                      <InputLabel htmlFor="email" required>
                        {t("LABEL.EMAIL")}
                      </InputLabel>
                      <Field
                        component={TextField}
                        name="email"
                        type="text"
                        id="email"
                        value={formik.values.email}
                        className={classes.label}
                      />
                    </Box>
                    <Box className={classes.field}>
                      <InputLabel htmlFor="password" required>
                        {t("LABEL.PASSWORD")}
                      </InputLabel>
                      <Field
                        component={TextField}
                        value={formik.values.password}
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
                    <Box className={classes.create}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{
                                color: "white",
                                "&.Mui-checked": { color: "white" },
                              }}
                            />
                          }
                          onChange={() => setRememberMe(!rememberMe)}
                          label={t("LABEL.REMEMBERME")}
                        />
                      </FormGroup>
                      <Typography
                        className={classes.forgot}
                        onClick={() => {
                          setUserEmail(formik?.values?.email);
                          dispatch(clearLoginResponse());
                          navigate(`/${lang}/forget-password`, {
                            state: {
                              userEmail: formik?.values?.email
                                ? formik?.values?.email
                                : "",
                            },
                          });
                        }}
                      >
                        {t("LABEL.FORGOTPASS")}
                      </Typography>
                    </Box>
                    <Box className={classes.end}>
                      <Link sx={{ textDecoration: "none!important" }}>
                        <Buttonn
                          label={t("BUTTON.LOGIN")}
                          className={classes.buttonStyle}
                          textStyle={classes.titleButton}
                          onClick={(e) => formik?.submitForm(e)}
                        />
                      </Link>
                    </Box>
                  </Box>
                </form>

                <SharedDialog
                  open={showDialog}
                  onClose={() => {
                    setShowDialog(false);

                    formik.resetForm();
                    dispatch(clearLoginResponse());
                  }}
                  title={isRTL ? "عذراً" : "Sorry"}
                  description={
                    isRTL
                      ? "المستخدم غير موجود، الرجاء المحاولة مرة أخرى"
                      : "User is not exist, Please Log in again"
                  }
                  buttons={true}
                  handleOkay={() => {
                    setShowDialog(false);

                    formik.resetForm({});
                    dispatch(clearLoginResponse());
                  }}
                  okayBtn={true}
                />
              </>
            );
          }}
        </Formik>
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
      </Container>
    </>
  );
}
export default Login;
